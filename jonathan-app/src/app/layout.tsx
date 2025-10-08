import type { Metadata } from "next";
import "./globals.css";
import "@/styles/extracted.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// GTM désactivé temporairement pour éviter les doublons avec l'API HubSpot directe
// const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'$GT':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTPVFF9B');`.replace("$GT", "gtm.start");

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
        {/* HubSpot Tracking Code - Permet de lier les soumissions de formulaire aux contacts */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
        />
        {/* GTM désactivé temporairement pour éviter les doublons avec l'API HubSpot directe */}
        {/* <Script id="gtm-script" strategy="afterInteractive">
          {GTM_SCRIPT}
        </Script> */}
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
