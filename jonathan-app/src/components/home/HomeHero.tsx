"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ConfirmationPopup from "./ConfirmationPopup";

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
    alt: "Avatars des membres de la communauté",
  },
};

export default function HomeHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showPopup, setShowPopup] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Éviter les problèmes d'hydratation
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fonction de validation email
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Fonction pour récupérer les paramètres UTM
  function getUtmParams() {
    if (!isClient || typeof window === 'undefined') {
      return {
        utm_source: 'jonathananguelov',
        utm_medium: 'newsletter',
        utm_campaign: 'newsletter_jonathan',
        utm_content: 'hero_signup',
        utm_term: '',
        page_url: '',
        referrer: '',
        cta_id: 'hero_newsletter_signup'
      };
    }
    
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source') || localStorage.getItem('utm_source') || 'jonathananguelov',
        utm_medium: urlParams.get('utm_medium') || localStorage.getItem('utm_medium') || 'newsletter',
        utm_campaign: urlParams.get('utm_campaign') || localStorage.getItem('utm_campaign') || 'newsletter_jonathan',
        utm_content: urlParams.get('utm_content') || localStorage.getItem('utm_content') || 'hero_signup',
        utm_term: urlParams.get('utm_term') || localStorage.getItem('utm_term') || '',
        page_url: window.location.href,
        referrer: document.referrer,
        cta_id: 'hero_newsletter_signup'
      };

      // Sauvegarder les UTM dans localStorage
      Object.entries(utmParams).forEach(([key, value]) => {
        if (key.startsWith('utm_') && value) {
          try {
            localStorage.setItem(key, value);
          } catch {
            // Ignore localStorage errors
          }
        }
      });

      return utmParams;
    } catch (error) {
      console.warn('Error getting UTM params:', error);
      return {
        utm_source: 'jonathananguelov',
        utm_medium: 'newsletter',
        utm_campaign: 'newsletter_jonathan',
        utm_content: 'hero_signup',
        utm_term: '',
        page_url: '',
        referrer: '',
        cta_id: 'hero_newsletter_signup'
      };
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!email) {
      setStatus("error");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Afficher le popup immédiatement pour une meilleure UX
    setStatus("success");
    setShowPopup(true);
    setEmail("");

    // Gérer l'API en arrière-plan
    try {
      const utmParams = getUtmParams();
      
      const payload = {
        email,
        firstName: '',
        lastName: '',
        ...utmParams,
      };
      
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        // Ne pas afficher d'erreur à l'utilisateur car le popup est déjà affiché
      }

      const result = await response.json();
      console.log("Newsletter API response:", result);
    } catch (error) {
      console.error("Hero form submission error:", error);
      // Ne pas afficher d'erreur à l'utilisateur car le popup est déjà affiché
    }
  }

  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-12 sm:pl-2 sm:pr-8 lg:flex-row lg:items-stretch lg:gap-16 lg:pl-2 lg:pr-8">
          <div className="flex-1 space-y-6 sm:space-y-12 lg:py-4 flex flex-col justify-center lg:justify-start lg:pt-16">
            <div className="space-y-6 sm:space-y-8 text-center">
              <h1 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
                Rejoins ma<br />
                Newsletter et reçois<br />
                mes meilleurs conseils
              </h1>
              
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-[#012634]">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">✓</span>
                  <span className="hidden sm:inline">Reçois mes conseils en Start-up, Tech, Immobilier & Vente.</span>
                  <span className="sm:hidden">Conseils Start-up, Tech, Immobilier & Vente</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">✓</span>
                  <span className="hidden sm:inline">Vidéos, <strong>Webinaires & Évènements Exclusifs.</strong></span>
                  <span className="sm:hidden">Vidéos & <strong>Webinaires Exclusifs</strong></span>
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

              <form onSubmit={handleSubmit} className="hidden sm:flex flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                  disabled={status === "submitting"}
                  required
                />
                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "..." : ">> S'abonner"}
                </button>
              </form>
              
              {status === "error" && (
                <div className="hidden sm:block text-center">
                  <p className="text-red-600 text-sm">
                    {!email ? "L'email est requis." : 
                     !isValidEmail(email) ? "Format d'email invalide." : 
                     "Une erreur est survenue. Réessaie dans quelques instants."}
                  </p>
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
              
              {/* Formulaire superposé sur mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
                <div className="bg-white rounded-xl p-3 shadow-lg">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                      disabled={status === "submitting"}
                      required
                    />
                    <button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "..." : ">> S'abonner"}
                    </button>
                  </form>
                  
                  {status === "error" && (
                    <div className="mt-2">
                      <p className="text-red-600 text-xs">
                        {!email ? "L'email est requis." : 
                         !isValidEmail(email) ? "Format d'email invalide." : 
                         "Une erreur est survenue. Réessaie dans quelques instants."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Popup de confirmation */}
        <ConfirmationPopup 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)} 
        />
    </section>
  );
}
