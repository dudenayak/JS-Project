const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');

const errorUsername = document.getElementById('errorUsername');
const errorEmail = document.getElementById('errorEmail');
const errorPhone = document.getElementById('errorPhone');
const errorPassword = document.getElementById('errorPassword');
const errorCPassword = document.getElementById('errorCPassword');

// USERNAME
username.addEventListener('input', (e) => {
  if (username.value == '') {
    errorUsername.innerHTML = 'Username is required';
  } else {
    errorUsername.innerHTML = '';
  }
});

// EMAIL
const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return email.match(regex);
};

email.addEventListener('input', (e) => {
  if (email.value == '') {
    errorEmail.innerHTML = 'Email is required';
  } else if (!isValidEmail(email.value)) {
    errorEmail.innerHTML = 'Provide a valid email address.';
  } else {
    errorEmail.innerHTML = '';
  }
});

// PHONE

const isValidPhone = (phone) => {
  const regexPhone = /^[0-9]{10}$/;
  return phone.match(regexPhone);
};

phone.addEventListener('input', (e) => {
  if (phone.value == '') {
    errorPhone.innerHTML = 'Phone number is required';
  } else if (!isValidPhone(phone.value)) {
    errorPhone.innerHTML = 'Provide a valid phone number.';
  } else {
    errorPhone.innerHTML = '';
  }
});

// PASSWORD
password.addEventListener('input', (e) => {
  if (password.value == '') {
    errorPassword.innerHTML = 'Password is required';
  } else if (password.value.length < 8) {
    errorPassword.innerHTML = 'Password must be at least 8 characters.';
  } else {
    errorPassword.innerHTML = '';
  }
});

// CONFIRM PASSWORD
cpassword.addEventListener('input', (e) => {
  if (cpassword.value == '') {
    errorCPassword.innerHTML = 'Please confirm your password.';
  } else if (cpassword.value != password.value) {
    errorCPassword.innerHTML = 'Passwords does not match.';
  } else {
    errorCPassword.innerHTML = '';
  }
});

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(username.value);
  validateInputs();
});
