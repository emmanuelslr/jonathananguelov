// Test de l'intégration HubSpot
const testHubSpotIntegration = async () => {
  try {
    console.log('🧪 Test de l\'intégration HubSpot...');
    
    const payload = {
      email: "test-hubspot-fixed@example.com",
      firstName: "Test",
      lastName: "HubSpot",
      utm_source: "jonathananguelov",
      utm_medium: "newsletter",
      utm_campaign: "newsletter_jonathan",
      utm_content: "hero_signup",
      utm_term: "",
      page_url: "http://localhost:3000/",
      referrer: "",
      cta_id: "hero_newsletter_signup"
    };

    console.log('📤 Envoi du payload:', JSON.stringify(payload, null, 2));

    const response = await fetch('http://localhost:3000/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('📊 Status de la réponse:', response.status);
    console.log('📊 Headers de la réponse:', Object.fromEntries(response.headers.entries()));

    const result = await response.text();
    console.log('📋 Réponse complète:', result);

    if (response.ok) {
      console.log('✅ Test réussi ! Vérifiez maintenant dans HubSpot :');
      console.log('   - Aller dans Contacts → All contacts');
      console.log('   - Chercher: test-hubspot-fixed@example.com');
      console.log('   - Vérifier les UTM parameters');
    } else {
      console.log('❌ Erreur lors du test');
    }

  } catch (error) {
    console.error('❌ Erreur:', error);
  }
};

testHubSpotIntegration();