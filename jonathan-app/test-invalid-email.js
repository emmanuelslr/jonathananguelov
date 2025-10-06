// Test avec email invalide
const testData = {
  email: "email-invalide",
  firstName: "Test",
  lastName: "User"
};

console.log('Test API avec email invalide:', testData);

fetch('http://localhost:3002/api/newsletter', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => {
  console.log('Response status:', response.status);
  return response.json();
})
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.error('Error:', error);
});









