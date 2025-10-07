"use client";

import { useEffect, useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";
import { useNewsletterToken } from "@/hooks/useNewsletterToken";

type FormState = "idle" | "submitting" | "success" | "error";

function isValidEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { getValidToken, resetToken } = useNewsletterToken();

  const handleClosePopup = () => {
    setShowPopup(false);
    if (status !== "submitting") {
      setStatus("idle");
    }
  };

  const isDisabled = status === "submitting";

  useEffect(() => {
    setIsClient(true);
  }, []);

  function getUtmParams() {
    if (!isClient || typeof window === "undefined") {
      return {
        utm_source: "jonathananguelov",
        utm_medium: "newsletter",
        utm_campaign: "newsletter_jonathan",
        utm_content: "newsletter_signup",
        utm_term: "",
        page_url: "",
        referrer: "",
        cta_id: "newsletter_jonathan_signup",
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
          urlParams.get("utm_content") || localStorage.getItem("utm_content") || "newsletter_signup",
        utm_term: urlParams.get("utm_term") || localStorage.getItem("utm_term") || "",
        page_url: window.location.href,
        referrer: document.referrer,
        cta_id: "newsletter_jonathan_signup",
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
        utm_content: "newsletter_signup",
        utm_term: "",
        page_url: "",
        referrer: "",
        cta_id: "newsletter_jonathan_signup",
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
    setShowPopup(true);

    try {
      const securityToken = await getValidToken();
      const utmParams = getUtmParams();
      const payload = {
        email,
        firstName,
        lastName,
        newsletter: "newsletter_jonathananguelov",
        source_formulaire: "newsletter_jonathan",
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
      setFirstName("");
      setLastName("");
      setShowPopup(true);
    } catch {
      resetToken();
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Reessaie dans quelques instants.");
      setShowPopup(false);
    }
  }

  return (
    <section id="newsletter-form" className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl bg-[#012634] px-6 py-12 text-white shadow-xl shadow-[#012634]/30 sm:px-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Newsletter privee
          </p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl" style={{ fontWeight: "900" }}>
            Acces prioritaire aux conseils, videos et webinaires de Jonathan
          </h2>
          <p className="text-base text-white/80">
            Inscris-toi pour recevoir chaque semaine mes insights sur la croissance des startups, l&apos;immobilier et les ventes.
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-1">*</span>
              <span>Strategies actionnables issues d&apos;Aircall et d&apos;Aguesseau Capital.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">*</span>
              <span>Invitations a des evenements et webinaires exclusifs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">*</span>
              <span>Ressources reservees au club d&apos;investisseurs de Jonathan.</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 space-y-4 rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Prenom
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                disabled={isDisabled}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Nom
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                disabled={isDisabled}
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Adresse e-mail
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
              disabled={isDisabled}
            />
          </label>
          <button
            type="submit"
            disabled={isDisabled}
            className="w-full rounded-full bg-[#012634] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#012634]/30 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Envoi en cours..." : "Je m&apos;inscris"}
          </button>

          <p className="text-xs text-slate-500">
            Aucun spam. Tu pourras te desinscrire en un clic depuis chaque e-mail.
          </p>

          {status === "error" && errorMessage && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>

      <ConfirmationPopup isOpen={showPopup} onClose={handleClosePopup} />
    </section>
  );
}