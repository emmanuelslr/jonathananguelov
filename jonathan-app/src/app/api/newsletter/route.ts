import { NextResponse } from "next/server";

type NewsletterPayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  page_url?: string;
  referrer?: string;
  cta_id?: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as NewsletterPayload;

    if (!data.email || typeof data.email !== "string") {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Format d'email invalide" }, { status: 400 });
    }

    // Préparer le payload pour l'API Offstone
    const offstonePayload = {
      email: data.email,
      utm_source: data.utm_source || "jonathananguelov",
      utm_medium: data.utm_medium || "newsletter",
      utm_campaign: data.utm_campaign || "newsletter_jonathan",
      utm_content: data.utm_content || "newsletter_signup",
      utm_term: data.utm_term || "",
      page_url: data.page_url || "",
      referrer: data.referrer || "",
      cta_id: data.cta_id || "newsletter_jonathan_signup"
    };

    // Appel direct à HubSpot
    try {
      console.log('Envoi vers HubSpot avec payload:', offstonePayload);
      
      // Vérifier que les variables d'environnement sont définies
      if (!process.env.HUBSPOT_PORTAL_ID || !process.env.HUBSPOT_FORM_ID) {
        console.error('Variables d\'environnement HubSpot manquantes');
        throw new Error('Configuration HubSpot manquante');
      }
      
      const hubspotPayload = {
        portalId: process.env.HUBSPOT_PORTAL_ID,
        formId: process.env.HUBSPOT_FORM_ID,
        fields: [
          { name: "email", value: data.email },
          { name: "utm_source", value: data.utm_source || "jonathananguelov" },
          { name: "utm_medium", value: data.utm_medium || "newsletter" },
          { name: "utm_campaign", value: data.utm_campaign || "newsletter_jonathan" },
          { name: "utm_content", value: data.utm_content || "newsletter_signup" },
          { name: "utm_term", value: data.utm_term || "" },
          { name: "page_url", value: data.page_url || "" },
          { name: "cta_id", value: data.cta_id || "newsletter_jonathan_signup" }
        ]
      };

      const hubspotResponse = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(hubspotPayload)
      });

      console.log('Réponse HubSpot status:', hubspotResponse.status);
      console.log('Réponse HubSpot headers:', Object.fromEntries(hubspotResponse.headers.entries()));

      if (!hubspotResponse.ok) {
        const errorText = await hubspotResponse.text();
        console.error('Erreur API HubSpot:', {
          status: hubspotResponse.status,
          statusText: hubspotResponse.statusText,
          body: errorText
        });
        
        // Si l'API HubSpot échoue, on continue quand même
        console.log('Continuing despite HubSpot error...');
      } else {
        const hubspotResult = await hubspotResponse.json();
        console.log('Newsletter envoyée à HubSpot avec succès:', hubspotResult);
      }
    } catch (hubspotError) {
      console.error('Erreur envoi newsletter à HubSpot:', hubspotError);
      // On continue même si HubSpot échoue
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Newsletter subscription successful" 
    });
  } catch (error) {
    console.error("Newsletter API error", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
