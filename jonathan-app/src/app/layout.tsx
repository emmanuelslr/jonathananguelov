import type { Metadata } from "next";
import "./globals.css";
import "@/styles/extracted.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'$GT':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTPVFF9B');`.replace("$GT", "gtm.start");

const HUBSPOT_SCRIPT = `
  (function(d,s,i) {
    if (d.getElementById(i)) { return; }
    var n = d.createElement(s), e = d.getElementsByTagName(s)[0];
    n.id = i; n.src = '//js.hs-scripts.com/47477676.js';
    e.parentNode.insertBefore(n, e);
  })(document, 'script', 'hs-script-loader');

  // S'assurer que les cookies HubSpot sont disponibles pour le tracking
  window.addEventListener('load', function() {
    if (typeof window.hbspt !== 'undefined') {
      // Forcer la création du cookie hubspotutk si nécessaire
      if (!document.cookie.includes('hubspotutk=')) {
        var utk = 'hsutk_' + Math.random().toString(36).substr(2, 9);
        document.cookie = 'hubspotutk=' + utk + '; path=/; max-age=31536000';
      }
    }
  });
`;

export const metadata: Metadata = {
  title: "Jonathan Anguelov - Site Officiel",
  description:
    "Site officiel de Jonathan Anguelov - Recois mes conseils en Start-up, Tech, Immobilier & Vente. Mes Videos, Webinar et Evenements Exclusifs.",
  keywords: ["Jonathan Anguelov", "entrepreneur", "startup", "tech", "immobilier", "vente", "Aircall", "Aguesseau Capital"],
  authors: [{ name: "Jonathan Anguelov" }],
  creator: "Jonathan Anguelov",
  publisher: "Jonathan Anguelov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/10521134/679644bb0b1b6_Flavicon.png",
    apple: "/10521134/679644bb0b1b6_Flavicon.png",
  },
  verification: {
    google: "your-google-verification-code", // À remplacer par votre code de vérification Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/10521134/679644bb0b1b6_Flavicon.png" />
        <link
          rel="apple-touch-icon"
          href="/10521134/679644bb0b1b6_Flavicon.png"
        />
        <link
          rel="stylesheet"
          href="https://d3fit27i5nzkqh.cloudfront.net/assets/css/optimizedFontAwesome.css"
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {GTM_SCRIPT}
        </Script>
        <Script id="hubspot-script" strategy="afterInteractive">
          {HUBSPOT_SCRIPT}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
