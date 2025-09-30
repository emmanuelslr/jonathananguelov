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
      // Empecher le scroll du body quand le popup est ouvert
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: isOpen ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
        boxSizing: "border-box",
      }}
      role="dialog"
      aria-modal="true"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700 sm:right-6 sm:top-6"
            aria-label="Fermer"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-6 sm:p-8 lg:p-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">Merci pour votre inscription</h2>
                  <div className="h-1 w-12 rounded-full bg-[#012634] sm:w-16"></div>
                </div>

                <div className="space-y-4 sm:space-y-6 text-gray-600">
                  <p className="text-base leading-relaxed sm:text-lg">
                    Bienvenue dans ma communaute ! Je suis ravi de te compter parmi nous.
                  </p>

                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base font-medium text-gray-900 sm:text-lg">A tres bientot !</p>
                    <p className="mt-1 text-sm text-gray-500">- Jonathan</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full rounded-lg bg-[#012634] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#012634]/90 focus:outline-none focus:ring-2 focus:ring-[#012634]/50 sm:text-base"
                >
                  Parfait, merci !
                </button>
              </div>
            </div>

            <div className="relative h-48 w-full sm:h-64 lg:w-80 lg:h-full lg:flex-shrink-0">
              <Image
                src="/images/home-page/jonathan popup off.webp"
                alt="Jonathan Anguelov"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
