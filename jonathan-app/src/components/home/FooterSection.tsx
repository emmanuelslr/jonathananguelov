import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@Jonathan-Anguelov" },
  { label: "Instagram", href: "https://www.instagram.com/jonathananguelov" },
  { label: "TikTok", href: "https://www.tiktok.com/@jonathananguelov" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathan-anguelov-14346611/?originalSubdomain=fr",
  },
];

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Articles", href: "/posts" },
  { label: "Qui suis-je ?", href: "/mon-histoire" },
  { label: "Conférences", href: "/conferences" },
];

const EXTERNAL_LINKS = [
  {
    label: "Mon livre",
    href: "https://www.amazon.ca/Rien-%C3%A0-perdre-Jonathan-Anguelov/dp/2379354413",
  },
];

const BUSINESS_LINKS = [
  { label: "Aircall", href: "https://aircall.io/" },
  { label: "Aguesseau Capital", href: "https://aguesseaucapital.com" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1E34] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1.6fr)_repeat(2,minmax(0,1fr))]">
          <div className="max-w-sm space-y-6">
            <Image
              src="https://d1yei2z3i6k35z.cloudfront.net/10521134/679754c09c5b3_logopiedspage.png"
              alt="Logo de Jonathan Anguelov"
              width={320}
              height={96}
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Suivez-moi
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-white">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gray-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {EXTERNAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              MES BUSINESS
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              {BUSINESS_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Jonathan Anguelov. Tous droits réservés.</p>
          <p className="text-xs">
            Images et contenus © Jonathan Anguelov.
          </p>
        </div>
      </div>
    </footer>
  );
}
