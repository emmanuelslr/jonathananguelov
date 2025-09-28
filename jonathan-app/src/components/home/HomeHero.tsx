"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";
import AnimatedSection from "../AnimatedSection";
import { useNewsletterToken } from "@/hooks/useNewsletterToken";

type FormStatus = "idle" | "submitting" | "success" | "error";

const HERO_IMAGES = {
  portrait: {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67ab808d10182_Retouche_PRESSE_.jpg",
    width: 640,
    height: 720,
    alt: "Jonathan Anguelov",
  },
  avatars: {
    src: "/images/home-page/avatars.webp",
    width: 120,
    height: 30,
    alt: "Avatars des membres de la communaute",
  },
};

function isValidEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export default function HomeHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { getValidToken, resetToken } = useNewsletterToken();

  useEffect(() => {
    setIsClient(true);
  }, []);

  function getUtmParams() {
    if (!isClient || typeof window === "undefined") {
      return {
        utm_source: "jonathananguelov",
        utm_medium: "newsletter",
        utm_campaign: "newsletter_jonathan",
        utm_content: "hero_signup",
        utm_term: "",
        page_url: "",
        referrer: "",
        cta_id: "hero_newsletter_signup",
      };
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source:
          urlParams.get("utm_source") || localStorage.getItem("utm_source") || "jonathananguelov",
        utm_medium:
          urlParams.get("utm_medium") || localStorage.getItem("utm_medium") || "newsletter",
        utm_campaign:
          urlParams.get("utm_campaign") || localStorage.getItem("utm_campaign") || "newsletter_jonathan",
        utm_content:
          urlParams.get("utm_content") || localStorage.getItem("utm_content") || "hero_signup",
        utm_term: urlParams.get("utm_term") || localStorage.getItem("utm_term") || "",
        page_url: window.location.href,
        referrer: document.referrer,
        cta_id: "hero_newsletter_signup",
      } as const;

      Object.entries(utmParams).forEach(([key, value]) => {
        if (key.startsWith("utm_") && value) {
          try {
            localStorage.setItem(key, value);
          } catch {
            /* ignore */
          }
        }
      });

      return utmParams;
    } catch {
      return {
        utm_source: "jonathananguelov",
        utm_medium: "newsletter",
        utm_campaign: "newsletter_jonathan",
        utm_content: "hero_signup",
        utm_term: "",
        page_url: "",
        referrer: "",
        cta_id: "hero_newsletter_signup",
      };
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      setStatus("error");
      setErrorMessage("L'email est requis.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Format d'email invalide.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const securityToken = await getValidToken();
      const utmParams = getUtmParams();
      const payload = {
        email,
        firstName: "",
        lastName: "",
        ...utmParams,
      };

      const response = await fetch("/api/newsletter", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-Newsletter-Token": securityToken.token,
          "X-Newsletter-Timestamp": String(securityToken.timestamp),
          "X-Newsletter-Signature": securityToken.signature,
        },
        body: JSON.stringify(payload),
      });

      resetToken();

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setErrorMessage(result?.error ?? "Une erreur est survenue. Reessaie dans quelques instants.");
        setShowPopup(false);
        return;
      }

      setStatus("success");
      setEmail("");
      setShowPopup(true);
    } catch {
      resetToken();
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Reessaie dans quelques instants.");
      setShowPopup(false);
    }
  }

  return (
    <AnimatedSection animation="slideUp">
      <section className="relative bg-white py-12 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-12 sm:pl-2 sm:pr-8 lg:flex-row lg:items-stretch lg:gap-16 lg:pl-2 lg:pr-8">
          <div className="flex-1 space-y-6 sm:space-y-12 lg:py-4 flex flex-col justify-center lg:justify-start lg:pt-16">
            <div className="space-y-6 sm:space-y-8 text-center">
              <h1 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: "900" }}>
                Rejoins ma
                <br />
                Newsletter et recois
                <br />
                mes meilleurs conseils
              </h1>

              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-[#012634]">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">V</span>
                  <span className="hidden sm:inline">Recois mes conseils en Start-up, Tech, Immobilier & Vente.</span>
                  <span className="sm:hidden">Conseils Start-up, Tech, Immobilier & Vente</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">V</span>
                  <span className="hidden sm:inline">Videos, <strong>Webinaires & Evenements Exclusifs.</strong></span>
                  <span className="sm:hidden">Videos & <strong>Webinaires Exclusifs</strong></span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Image
                  src={HERO_IMAGES.avatars.src}
                  alt={HERO_IMAGES.avatars.alt}
                  width={HERO_IMAGES.avatars.width}
                  height={HERO_IMAGES.avatars.height}
                  className="h-6 w-auto sm:h-8"
                />
                <span className="text-base sm:text-lg font-bold text-[#012634]">Rejoindre +1 800 membres</span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="hidden sm:flex mx-auto max-w-xl items-center gap-3 rounded-full border border-white/70 bg-white px-6 py-4 shadow-[0_10px_30px_rgba(1,38,52,0.18)]"
              >
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="flex-1 rounded-full border border-transparent bg-transparent px-4 py-3 text-base text-[#012634] placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-0"
                  disabled={status === "submitting"}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-[#3A8DFF] px-6 py-3 text-base font-semibold text-white shadow-md shadow-[#3A8DFF]/30 transition hover:bg-[#2F78E0] focus:outline-none focus:ring-2 focus:ring-[#3A8DFF]/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span aria-hidden="true">{"\u00bb"}</span>
                  S&apos;abonner
                </button>
              </form>

              {status === "error" && errorMessage && (
                <div className="hidden sm:block text-center">
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md flex flex-col justify-start -mt-8 sm:-mt-8 lg:-mt-16">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-black/15 animate-card-hover">
              <Image
                src={HERO_IMAGES.portrait.src}
                alt={HERO_IMAGES.portrait.alt}
                width={400}
                height={500}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
                <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(1,38,52,0.18)]">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm text-[#012634] placeholder:text-slate-500 outline-none focus:border-[#3A8DFF] focus:ring-2 focus:ring-[#3A8DFF]/30"
                      disabled={status === "submitting"}
                      required
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#3A8DFF]/30 transition hover:bg-[#2F78E0] focus:outline-none focus:ring-2 focus:ring-[#3A8DFF]/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span aria-hidden="true">{"\u00bb"}</span>
                      S&apos;abonner
                    </button>
                  </form>

                  {status === "error" && errorMessage && (
                    <div className="mt-2">
                      <p className="text-red-600 text-xs">{errorMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ConfirmationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </section>
    </AnimatedSection>
  );
}
