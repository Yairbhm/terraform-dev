
const summary = document.getElementById('summary');
let selectedAmount = '';

function updateSummary(amount) {
  selectedAmount = amount;
  if (amount) {
    summary.textContent = `Has seleccionado pagar $${amount}.`;
  } else {
    summary.textContent = '';
  }
}

document.querySelectorAll('.tier-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('customAmount').value = '';
    updateSummary(btn.dataset.amount);
  });
});

const customInput = document.getElementById('customAmount');
customInput.addEventListener('input', e => {
  document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
  updateSummary(e.target.value);
});

document.getElementById('orderBtn').addEventListener('click', () => {
  if (!selectedAmount || Number(selectedAmount) <= 0) {
    alert('Selecciona una cantidad válida.');
    return;
  }
  alert(`Gracias por tu pago de $${selectedAmount}!`);

});
