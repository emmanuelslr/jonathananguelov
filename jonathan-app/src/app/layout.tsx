import type { Metadata } from "next";
import "./globals.css";
import "@/styles/extracted.css";
import { Analytics } from "@vercel/analytics/next";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'$GT':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTPVFF9B');`.replace("$GT", "gtm.start");

export const metadata: Metadata = {
  title: "Jonathan Anguelov - Site Officiel",
  description:
    "Site officiel de Jonathan Anguelov - ? Reçois mes conseils en Start-up, Tech, Immobilier & Vente. Mes Vidéos, Webinar & Évènements Exclusifs.",
  icons: {
    icon: "/10521134/679644bb0b1b6_Flavicon.png",
    apple: "/10521134/679644bb0b1b6_Flavicon.png",
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
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

