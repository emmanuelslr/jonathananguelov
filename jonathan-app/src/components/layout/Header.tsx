"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Investir à mes côtés",
    href: "https://aguesseaucapital.com/investir-a-nos-cotes/",
    external: true,
  },
  {
    label: "Mon livre",
    href: "https://www.fnac.com/a20924549/Jonathan-Anguelov-Tout-ira-mieux-demain",
    external: true,
  },
  { label: "Qui suis-je ?", href: "/mon-histoire" },
  { label: "Conférences", href: "/conferences" },
];

function renderNavLink(item: NavItem) {
  const className =
    "text-base font-semibold text-slate-600 transition-colors hover:text-slate-900";

  if (item.external) {
    return (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link key={item.label} href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="https://d1yei2z3i6k35z.cloudfront.net/10521134/679925fc8018c_logonoir.png"
            alt="Logo - Site officiel de Jonathan Anguelov"
            width={197}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => renderNavLink(item))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Basculer la navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="md:hidden">
          <div className="space-y-2 border-t border-slate-200 bg-white px-4 py-4">
            {NAV_ITEMS.map((item) => {
              const itemClass =
                "block rounded-full px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100";

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={itemClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={itemClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}