// Test de différentes URLs Offstone
const testUrls = [
  'https://offstone.fr/api/newsletter-jonathan',
  'https://offstone.fr/api/newsletter',
  'https://offstone.fr/newsletter-jonathan',
  'https://offstone.fr/api/subscribe',
  'https://offstone.fr/subscribe'
];

const testData = {
  email: 'test@example.com',
  utm_source: 'jonathananguelov',
  utm_medium: 'newsletter',
  utm_campaign: 'newsletter_jonathan',
  utm_content: 'newsletter_signup',
  utm_term: '',
  page_url: 'http://localhost:3002',
  referrer: '',
  cta_id: 'newsletter_jonathan_signup'
};

async function testUrl(url) {
  try {
    console.log(`\n--- Testing URL: ${url} ---`);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log(`Status: ${response.status}`);
    console.log(`Status Text: ${response.statusText}`);
    console.log(`Headers:`, Object.fromEntries(response.headers.entries()));
    
    const text = await response.text();
    console.log(`Body: ${text.substring(0, 200)}...`);
    
    if (response.ok) {
      console.log('✅ SUCCESS!');
      return true;
    } else {
      console.log('❌ FAILED');
      return false;
    }
  } catch (error) {
    console.log(`❌ ERROR: ${error.message}`);
    return false;
  }
}

async function testAllUrls() {
  console.log('Testing Offstone URLs...');
  
  for (const url of testUrls) {
    const success = await testUrl(url);
    if (success) {
      console.log(`\n🎉 WORKING URL FOUND: ${url}`);
      break;
    }
  }
}

testAllUrls();









