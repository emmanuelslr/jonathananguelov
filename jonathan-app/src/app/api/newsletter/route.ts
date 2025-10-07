import { NextResponse } from "next/server";
import {
  cleanupExpiredTokens,
  getAllowedOrigins,
  isOriginAllowed,
  verifyNewsletterToken,
} from "@/lib/newsletterSecurity";

const RATE_LIMIT_PER_MINUTE = Number(process.env.NEWSLETTER_RATE_LIMIT_PER_MINUTE ?? 2000);
const RATE_LIMIT_BURST = Number(process.env.NEWSLETTER_RATE_LIMIT_BURST ?? RATE_LIMIT_PER_MINUTE);
const EMAIL_COOLDOWN_MS = Number(process.env.NEWSLETTER_EMAIL_COOLDOWN_MS ?? 30000);
const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;
const OFFSTONE_API_URL = process.env.OFFSTONE_API_URL;
const OFFSTONE_API_KEY = process.env.OFFSTONE_API_KEY;

const EMAIL_MAX_LENGTH = 320;
const FIELD_MAX_LENGTH = 255;
const PAGE_MAX_LENGTH = 2000;

const rateLimitBuckets = new Map<string, { tokens: number; lastRefill: number }>();
const recentEmails = new Map<string, number>();

function getClientIp(request: Request) {
  // Essayer plusieurs headers pour obtenir l'IP réelle
  const headers = [
    request.headers.get("x-forwarded-for"),
    request.headers.get("x-real-ip"),
    request.headers.get("x-client-ip"),
    request.headers.get("cf-connecting-ip"), // Cloudflare
    request.headers.get("x-cluster-client-ip"),
    request.headers.get("forwarded-for"),
    request.headers.get("forwarded")
  ];

  for (const header of headers) {
    if (header) {
      const parts = header.split(",");
      const ip = parts[0]?.trim();
      if (ip && ip !== "unknown" && ip !== "::1" && ip !== "127.0.0.1") {
        return ip;
      }
    }
  }

  return "unknown";
}

function sanitizeString(value: unknown, maxLength = FIELD_MAX_LENGTH) {
  if (typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  const normalized = trimmed.replace(/\s+/g, " ");
  return normalized.length > maxLength ? normalized.slice(0, maxLength) : normalized;
}

function sanitizeUrl(value: unknown) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value);
    const serialized = url.toString();
    return serialized.length > PAGE_MAX_LENGTH ? serialized.slice(0, PAGE_MAX_LENGTH) : serialized;
  } catch {
    return "";
  }
}

function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!local || !domain) {
    return "hidden";
  }

  if (local.length <= 2) {
    return `${local[0]}*@${domain}`;
  }

  return `${local[0]}***${local[local.length - 1]}@${domain}`;
}

async function verifyCaptcha(token: string, ip: string) {
  if (!HCAPTCHA_SECRET) {
    return false;
  }

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: HCAPTCHA_SECRET,
        response: token,
        remoteip: ip,
      }),
    });

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as { success?: boolean };
    return Boolean(result.success);
  } catch {
    return false;
  }
}

function pruneRecentEmails(now: number) {
  if (recentEmails.size < 5000) {
    return;
  }

  for (const [email, timestamp] of recentEmails) {
    if (now - timestamp > EMAIL_COOLDOWN_MS) {
      recentEmails.delete(email);
    }
  }
}

function pruneRateLimitBuckets(now: number) {
  if (rateLimitBuckets.size < 5000) {
    return;
  }

  for (const [key, bucket] of rateLimitBuckets) {
    if (now - bucket.lastRefill > 600000) {
      rateLimitBuckets.delete(key);
    }
  }
}

function buildJson(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

type NewsletterPayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  newsletter?: string;
  source_formulaire?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  page_url?: string;
  referrer?: string;
  cta_id?: string;
  captchaToken?: string;
  hubspotUtk?: string;
};

async function applyRateLimit(ip: string, captchaToken?: string) {
  const now = Date.now();
  pruneRateLimitBuckets(now);

  const bucket = rateLimitBuckets.get(ip) ?? { tokens: RATE_LIMIT_BURST, lastRefill: now };
  const elapsedMinutes = (now - bucket.lastRefill) / 60000;
  const replenished = elapsedMinutes * RATE_LIMIT_PER_MINUTE;
  bucket.tokens = Math.min(RATE_LIMIT_BURST, bucket.tokens + replenished);
  bucket.lastRefill = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    rateLimitBuckets.set(ip, bucket);
    return { ok: true } as const;
  }

  if (!HCAPTCHA_SECRET) {
    rateLimitBuckets.set(ip, bucket);
    return { ok: false, requiresCaptcha: false } as const;
  }

  if (!captchaToken) {
    rateLimitBuckets.set(ip, bucket);
    return { ok: false, requiresCaptcha: true } as const;
  }

  const captchaValid = await verifyCaptcha(captchaToken, ip);
  if (!captchaValid) {
    rateLimitBuckets.set(ip, bucket);
    return { ok: false, requiresCaptcha: true } as const;
  }

  rateLimitBuckets.set(ip, bucket);
  return { ok: true, captchaValidated: true } as const;
}

export async function POST(request: Request) {
  try {
    cleanupExpiredTokens();

    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    const allowlist = getAllowedOrigins();
    if (allowlist.length > 0 && !isOriginAllowed(origin) && !isOriginAllowed(referer)) {
      return buildJson({ error: "Forbidden" }, 403);
    }

    const tokenHeader = request.headers.get("x-newsletter-token");
    const timestampHeader = request.headers.get("x-newsletter-timestamp");
    const signatureHeader = request.headers.get("x-newsletter-signature");

    const tokenValidation = verifyNewsletterToken(tokenHeader, timestampHeader, signatureHeader);
    if (!tokenValidation.ok) {
      return buildJson({ error: "Invalid request" }, 403);
    }

    let data: NewsletterPayload;
    try {
      data = (await request.json()) as NewsletterPayload;
    } catch {
      return buildJson({ error: "Invalid payload" }, 400);
    }

    const emailRaw = typeof data.email === "string" ? data.email.trim() : "";
    if (!emailRaw) {
      return buildJson({ error: "Email required" }, 400);
    }

    if (emailRaw.length > EMAIL_MAX_LENGTH) {
      return buildJson({ error: "Email too long" }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRaw)) {
      return buildJson({ error: "Invalid email" }, 400);
    }

    const email = emailRaw.toLowerCase();
    const ip = getClientIp(request);

    const rateLimitResult = await applyRateLimit(ip, data.captchaToken);
    if (!rateLimitResult.ok) {
      if (rateLimitResult.requiresCaptcha) {
        return buildJson({ error: "Captcha required" }, 429);
      }
      return buildJson({ error: "Too many requests" }, 429);
    }

    const now = Date.now();
    pruneRecentEmails(now);

    const lastSubmission = recentEmails.get(email);
    if (lastSubmission && now - lastSubmission < EMAIL_COOLDOWN_MS) {
      return buildJson({ error: "Duplicate submission" }, 429);
    }

    recentEmails.set(email, now);

    const firstName = sanitizeString(data.firstName);
    const lastName = sanitizeString(data.lastName);
    const newsletter = sanitizeString(data.newsletter) || "newsletter_jonathananguelov";
    const sourceFormulaire = sanitizeString(data.source_formulaire) || "newsletter_jonathan";
    const utmSource = sanitizeString(data.utm_source);
    const utmMedium = sanitizeString(data.utm_medium);
    const utmCampaign = sanitizeString(data.utm_campaign);
    const utmContent = sanitizeString(data.utm_content);
    const utmTerm = sanitizeString(data.utm_term);
    const pageUrl = sanitizeUrl(data.page_url);
    const referrer = sanitizeUrl(data.referrer);
    const ctaId = sanitizeString(data.cta_id);

    const offstonePayload = {
      email,
      firstName,
      lastName,
      newsletter,
      source_formulaire: sourceFormulaire,
      utm_source: utmSource || "jonathananguelov",
      utm_medium: utmMedium || "newsletter",
      utm_campaign: utmCampaign || "newsletter_jonathan",
      utm_content: utmContent || "newsletter_signup",
      utm_term: utmTerm,
      page_url: pageUrl,
      referrer,
      cta_id: ctaId || "newsletter_jonathan_signup",
    };

    if (OFFSTONE_API_URL) {
      try {
        await fetch(OFFSTONE_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(OFFSTONE_API_KEY ? { "X-API-Key": OFFSTONE_API_KEY } : {}),
            "User-Agent": "newsletter-service/1.0",
          },
          body: JSON.stringify(offstonePayload),
        });
      } catch (error) {
        console.error("Offstone forwarding failed", {
          message: error instanceof Error ? error.message : "Unknown error",
          email: maskEmail(email),
        });
      }
    }

    // HubSpot integration - Envoi direct avec les nouveaux champs
    if (!process.env.HUBSPOT_PORTAL_ID || !process.env.HUBSPOT_FORM_ID) {
      console.error("HubSpot configuration missing", { email: maskEmail(email) });
      return buildJson({ ok: true, message: "Subscription accepted" });
    }

    try {
      const hubspotPayload = {
        portalId: process.env.HUBSPOT_PORTAL_ID,
        formId: process.env.HUBSPOT_FORM_ID,
        fields: [
          { name: "email", value: email },
          { name: "firstname", value: firstName },
          { name: "lastname", value: lastName },
          { name: "newsletter", value: "Newsletter Jonathan Anguelov" },
          { name: "source_formulaire", value: sourceFormulaire },
          { name: "utm_source", value: offstonePayload.utm_source },
          { name: "utm_medium", value: offstonePayload.utm_medium },
          { name: "utm_campaign", value: offstonePayload.utm_campaign },
          { name: "utm_content", value: offstonePayload.utm_content },
          { name: "utm_term", value: offstonePayload.utm_term },
          { name: "page_url", value: offstonePayload.page_url },
          { name: "cta_id", value: offstonePayload.cta_id },
        ].filter((field) => field.value),
        context: {
          ipAddress: ip !== "unknown" ? ip : undefined,
          pageUri: offstonePayload.page_url,
          pageName: "Newsletter Jonathan",
          hutk: data.hubspotUtk || request.headers.get("cookie")?.match(/hubspotutk=([^;]+)/)?.[1] || undefined,
        },
      };

      const hubspotResponse = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(hubspotPayload),
        },
      );

      if (!hubspotResponse.ok) {
        console.error("HubSpot submission failed", {
          status: hubspotResponse.status,
          email: maskEmail(email),
        });
      }
    } catch (error) {
      console.error("HubSpot request error", {
        message: error instanceof Error ? error.message : "Unknown error",
        email: maskEmail(email),
      });
    }

    return buildJson({ ok: true, message: "Subscription accepted" });
  } catch (error) {
    console.error("Newsletter API error", error instanceof Error ? error.message : error);
    return buildJson({ error: "Unexpected error" }, 500);
  }
}

