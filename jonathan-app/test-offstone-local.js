// Test de l'API Offstone en local
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

console.log('Test API Offstone local avec données:', testData);

fetch('http://localhost:3001/api/newsletter-jonathan', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => {
  console.log('Response status:', response.status);
  console.log('Response ok:', response.ok);
  return response.json();
})
.then(data => {
  console.log('Response data:', data);
  if (data.success) {
    console.log('✅ SUCCESS! API Offstone fonctionne en local!');
  } else {
    console.log('❌ FAILED:', data);
  }
})
.catch(error => {
  console.error('Error:', error);
  console.log('❌ API Offstone non accessible sur localhost:3001');
});



