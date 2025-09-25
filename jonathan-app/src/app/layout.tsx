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
    n.id = i; n.src = '//js.hs-scripts.com/' + (process.env.NEXT_PUBLIC_HUBSPOT_SCRIPT_ID || '') + '.js';
    e.parentNode.insertBefore(n, e);
  })(document, 'script', 'hs-script-loader');

  async function submitNewsletterPayload(payload) {
    try {
      const tokenResponse = await fetch('/api/newsletter/token', {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store'
      });

      if (!tokenResponse.ok) {
        return;
      }

      const tokenData = await tokenResponse.json();

      await fetch('/api/newsletter', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Newsletter-Token': tokenData.token,
          'X-Newsletter-Timestamp': String(tokenData.timestamp),
          'X-Newsletter-Signature': tokenData.signature
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Newsletter forwarding failed', error);
    }
  }

  window.onHubSpotFormSubmit = async function(formData) {
    if (!formData || !formData.email) {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get('utm_source') || localStorage.getItem('utm_source') || 'jonathananguelov',
      utm_medium: urlParams.get('utm_medium') || localStorage.getItem('utm_medium') || 'newsletter',
      utm_campaign: urlParams.get('utm_campaign') || localStorage.getItem('utm_campaign') || 'newsletter_jonathan',
      utm_content: urlParams.get('utm_content') || localStorage.getItem('utm_content') || 'newsletter_signup',
      utm_term: urlParams.get('utm_term') || localStorage.getItem('utm_term') || ''
    };

    Object.entries(utmParams).forEach(function(entry) {
      var key = entry[0];
      var value = entry[1];
      if (key.indexOf('utm_') === 0 && value) {
        try {
          localStorage.setItem(key, value);
        } catch (error) {}
      }
    });

    const payload = {
      email: formData.email,
      firstName: formData.firstname || '',
      lastName: formData.lastname || '',
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_term: utmParams.utm_term,
      page_url: window.location.href,
      referrer: document.referrer,
      cta_id: 'newsletter_jonathan_signup'
    };

    submitNewsletterPayload(payload);
  };
`;

export const metadata: Metadata = {
  title: "Jonathan Anguelov - Site Officiel",
  description:
    "Site officiel de Jonathan Anguelov - Recois mes conseils en Start-up, Tech, Immobilier & Vente. Mes Videos, Webinar et Evenements Exclusifs.",
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
