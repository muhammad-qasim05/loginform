const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // form validation
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all required fields.');
    return;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long and contain at least one number.');
    return;
  }
  
  // submit the form if validation passes
  form.submit();
});

function isValidEmail(email) {
  // regex for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValid




