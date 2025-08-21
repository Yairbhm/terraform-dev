document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const [emailInput, passwordInput] = this.querySelectorAll('input');
  console.log('Email:', emailInput.value);
  console.log('Password:', passwordInput.value);
  alert('Inicio de sesión simulado.');
});
