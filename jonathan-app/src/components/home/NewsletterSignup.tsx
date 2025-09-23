"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  const isDisabled = status === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        throw new Error("Newsletter subscription failed");
      }

      setStatus("success");
      setEmail("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="newsletter-form" className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl bg-[#012634] px-6 py-12 text-white shadow-xl shadow-[#012634]/30 sm:px-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Newsletter privée
          </p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl" style={{ fontWeight: '900' }}>
            Accès prioritaire aux conseils, vidéos et webinaires de Jonathan
          </h2>
          <p className="text-base text-white/80">
            Inscris-toi pour recevoir chaque semaine mes insights sur la croissance des startups, l&apos;immobilier et les ventes.
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Stratégies actionnables issues d&apos;Aircall et d&apos;Aguesseau Capital.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Invitations à des événements et webinaires exclusifs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Ressources réservées au club d&apos;investisseurs de Jonathan.</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-4 rounded-2xl bg-white p-6 text-slate-900 shadow-lg"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Prénom
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
            {status === "submitting" ? "Envoi en cours..." : "Je m'inscris"}
          </button>

          <p className="text-xs text-slate-500">
            Aucun spam. Tu pourras te désinscrire en un clic depuis chaque e-mail.
          </p>

          {status === "success" ? (
            <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              Merci ! Ta demande d&apos;inscription est bien reçue.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              Une erreur est survenue. Réessaie dans quelques instants.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}