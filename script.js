const rulesBtn = document.getElementById('rules-btn'),
  closeBtn = document.getElementById('close-btn'),
  rules = document.getElementById('rules');

rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
});