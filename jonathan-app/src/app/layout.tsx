import type { Metadata } from "next";
import "./globals.css";
import "@/styles/extracted.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'$GT':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTPVFF9B');`.replace("$GT", "gtm.start");

const HUBSPOT_SCRIPT = `
  // Script HubSpot
  (function(d,s,i,r) {
    if (d.getElementById(i)){return;}
    var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
    n.id=i;n.src='//js.hs-scripts.com/146846899.js';
    e.parentNode.insertBefore(n, e);
  })(document,"script","hs-script-loader");

  // Callback HubSpot pour le formulaire newsletter
  window.onHubSpotFormSubmit = function(formData) {
    const email = formData.email;
    
    // Récupérer les UTM depuis l'URL ou localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get('utm_source') || localStorage.getItem('utm_source') || 'jonathananguelov',
      utm_medium: urlParams.get('utm_medium') || localStorage.getItem('utm_medium') || 'newsletter',
      utm_campaign: urlParams.get('utm_campaign') || localStorage.getItem('utm_campaign') || 'newsletter_jonathan',
      utm_content: urlParams.get('utm_content') || localStorage.getItem('utm_content') || 'newsletter_signup',
      utm_term: urlParams.get('utm_term') || localStorage.getItem('utm_term') || ''
    };

    // Sauvegarder les UTM dans localStorage
    Object.entries(utmParams).forEach(([key, value]) => {
      if (key.startsWith('utm_') && value) {
        localStorage.setItem(key, value);
      }
    });

    // Appel API Offstone
    fetch('https://offstone.fr/api/newsletter-jonathan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        ...utmParams,
        page_url: window.location.href,
        referrer: document.referrer,
        cta_id: 'newsletter_jonathan_signup'
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log('Newsletter envoyée à Offstone:', result);
    })
    .catch(error => {
      console.error('Erreur envoi newsletter:', error);
    });
  };
`;

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

