"use client";

import { useEffect, useState } from "react";
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

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: isOpen ? 'flex' : 'none',
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        paddingTop: '10vh',
        boxSizing: 'border-box'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Bouton de fermeture */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
            aria-label="Fermer"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Section texte */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="space-y-8">
                {/* Titre simplifié */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    Merci pour votre inscription
                  </h2>
                  <div className="h-1 w-16 bg-[#012634] rounded-full"></div>
                </div>

                {/* Message principal */}
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Bienvenue dans ma communauté ! Je suis ravi de vous compter parmi nous.
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-lg font-medium text-gray-900">
                      À très bientôt !
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      — Jonathan
                    </p>
                  </div>
                </div>

                {/* Bouton de fermeture */}
                <button
                  onClick={onClose}
                  className="w-full rounded-lg bg-[#012634] px-6 py-3 text-base font-medium text-white transition hover:bg-[#012634]/90 focus:outline-none focus:ring-2 focus:ring-[#012634]/50"
                >
                  Parfait, merci !
                </button>
              </div>
            </div>

            {/* Section image */}
            <div className="relative lg:w-80 lg:flex-shrink-0">
              <div className="relative h-64 w-full lg:h-full">
              <Image
                src="/images/home-page/jonathan popup off.webp"
                alt="Jonathan Anguelov"
                fill
                className="object-cover object-center"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
