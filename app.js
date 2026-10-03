// ===== STATE =====
let selected = true;
// ===== NAV =====
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  // Show/hide fixed bottom bar only on tickets screen
  const bar = document.getElementById('bot-bar');
  if (bar) bar.style.display = id === 'screen-tickets' ? 'flex' : 'none';
}
// ===== TICKET SELECT / DESELECT =====
function toggleTicket(e) {
  if (e) e.stopPropagation();
  selected = !selected;
  renderCheck();
}
function renderCheck() {
  const el = document.getElementById('tkt-check');
  const btn = document.getElementById('bot-use');
  if (selected) {
    el.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="12" fill="#27ae60"/>
      <path d="M7.5 13.5l3.5 3.5 7.5-8" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    btn.disabled = false;
    btn.textContent = 'Use 1 ticket';
  } else {
    el.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="12" stroke="#c7c7cc" stroke-width="1.8" fill="#fff"/>
    </svg>`;
    btn.disabled = true;
    btn.textContent = 'Use 1 ticket';
  }
}
// ===== ACTIONS =====
function goConfirm() {
  if (!selected) return;
  go('screen-confirm');
}
function doUse() {
  go('screen-success');
}
function goAvail() {
  go('screen-tickets');
}
