import crypto from "crypto";

const RAW_ALLOWED_ORIGINS = process.env.NEWSLETTER_ALLOWED_ORIGINS ?? "";
const allowedOrigins = RAW_ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean);

const SIGNING_SECRET = process.env.NEWSLETTER_SIGNING_SECRET ?? "";
const TOKEN_TTL_MS = Number(process.env.NEWSLETTER_TOKEN_TTL_MS ?? 60000);

const issuedTokens = new Map<string, { issuedAt: number; expiresAt: number }>();

function timingSafeEqual(expected: string, actual: string) {
  if (expected.length === 0 || actual.length === 0) {
    return false;
  }

  const expectedBuffer = Buffer.from(expected, "utf8");
  const actualBuffer = Buffer.from(actual, "utf8");

  if (expectedBuffer.length !== actualBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, actualBuffer);
}

export function isOriginAllowed(value: string | null) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    
    // Autoriser localhost en développement
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return true;
    }
    
    if (allowedOrigins.length === 0) {
      return true;
    }

    return allowedOrigins.includes(url.origin);
  } catch {
    return false;
  }
}

export function getSigningSecret() {
  return SIGNING_SECRET.length > 0 ? SIGNING_SECRET : null;
}

export function issueNewsletterToken() {
  const secret = getSigningSecret();
  if (!secret) {
    return null;
  }

  const now = Date.now();
  const token = crypto.randomBytes(32).toString("base64url");
  const signature = crypto.createHmac("sha256", secret).update(`${token}:${now}`).digest("base64url");
  const expiresAt = now + TOKEN_TTL_MS;

  issuedTokens.set(token, { issuedAt: now, expiresAt });

  if (issuedTokens.size > 10000) {
    const current = Date.now();
    for (const [key, value] of issuedTokens) {
      if (value.expiresAt <= current) {
        issuedTokens.delete(key);
      }
    }
  }

  return { token, timestamp: now, signature, expiresIn: TOKEN_TTL_MS };
}

export function verifyNewsletterToken(token: string | null, timestampHeader: string | null, signature: string | null) {
  const secret = getSigningSecret();
  if (!secret) {
    return { ok: false, error: "Newsletter signing secret missing" } as const;
  }

  if (!token || !timestampHeader || !signature) {
    return { ok: false, error: "Missing security headers" } as const;
  }

  const record = issuedTokens.get(token);
  if (!record) {
    return { ok: false, error: "Unknown token" } as const;
  }

  const parsedTimestamp = Number(timestampHeader);
  if (!Number.isFinite(parsedTimestamp) || parsedTimestamp !== record.issuedAt) {
    issuedTokens.delete(token);
    return { ok: false, error: "Timestamp mismatch" } as const;
  }

  const now = Date.now();
  if (record.expiresAt <= now) {
    issuedTokens.delete(token);
    return { ok: false, error: "Token expired" } as const;
  }

  const expectedSignature = crypto.createHmac("sha256", secret).update(`${token}:${record.issuedAt}`).digest("base64url");
  const isValid = timingSafeEqual(expectedSignature, signature);

  issuedTokens.delete(token);

  if (!isValid) {
    return { ok: false, error: "Invalid signature" } as const;
  }

  return { ok: true } as const;
}

export function getAllowedOrigins() {
  return allowedOrigins;
}

export function cleanupExpiredTokens() {
  const now = Date.now();
  for (const [key, value] of issuedTokens) {
    if (value.expiresAt <= now) {
      issuedTokens.delete(key);
    }
  }
}
