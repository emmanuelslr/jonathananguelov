"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmationPopup({ isOpen, onClose }: ConfirmationPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Empêcher le scroll du body quand le popup est ouvert
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{ 
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 shadow-lg transition hover:bg-white hover:text-gray-800"
          aria-label="Fermer"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Section texte */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="space-y-6">
              {/* Titre avec emoji */}
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black text-[#012634] lg:text-4xl">
                  Bienvenue à bord !
                </h2>
                <span className="text-4xl">🚀</span>
              </div>

              {/* Message principal */}
              <div className="space-y-4 text-gray-700">
                <p className="text-lg font-medium">
                  J&apos;aimerais vraiment mieux te connaître !
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-base">
                      Pour ça, je t&apos;ai envoyé quelques questions par mail.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👉</span>
                    <p className="text-base">
                      Prends le temps d&apos;y répondre, je lis toutes les réponses !
                    </p>
                  </div>
                </div>

                <p className="text-lg font-semibold text-[#012634]">
                  À bientôt !
                </p>
                
                <p className="text-base font-medium text-gray-600">
                  -Jonathan
                </p>
              </div>

              {/* Bouton de fermeture */}
              <button
                onClick={onClose}
                className="w-full rounded-full bg-[#012634] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#012634]/90 hover:shadow-xl"
              >
                Parfait, merci !
              </button>
            </div>
          </div>

          {/* Section image */}
          <div className="relative flex-1 p-8 lg:p-12">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#012634]/5 to-[#012634]/10">
              <Image
                src="/images/home-page/jonathan popup.jpg"
                alt="Jonathan Anguelov"
                width={400}
                height={300}
                className="h-full w-full object-cover object-center"
                style={{ minHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
