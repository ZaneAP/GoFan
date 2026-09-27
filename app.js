// =========================================================
// GoFan Interaction Controller
// =========================================================

let selected = true;
let autoTransitionTimer = null;

// Navigate between screens
function go(screenId) {
  // Clear any pending timer from success screen
  if (autoTransitionTimer) {
    clearTimeout(autoTransitionTimer);
    autoTransitionTimer = null;
  }

  // Switch screens
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  window.scrollTo(0, 0);

  // Manage bottom bar visibility
  const botBar = document.getElementById('bot-bar');
  if (botBar) {
    botBar.style.display = (screenId === 'screen-tickets') ? 'flex' : 'none';
  }
}

// Toggle ticket selection on screen 1
function toggleTicket(e) {
  if (e) e.stopPropagation();
  selected = !selected;
  renderSelectionState();
}

function renderSelectionState() {
  const card = document.getElementById('tkt-card');
  const btn = document.getElementById('bot-use');

  if (selected) {
    if (card) card.classList.add('selected');
    if (btn) btn.disabled = false;
  } else {
    if (card) card.classList.remove('selected');
    if (btn) btn.disabled = true;
  }
}

// Navigate to confirmation screen
function goConfirm() {
  if (!selected) return;
  go('screen-confirm');
}

// Complete ticket use from confirmation screen
function doUse() {
  go('screen-success');

  // Automatically transition to the "Used Tickets" screen after 2.8s
  autoTransitionTimer = setTimeout(() => {
    go('screen-used');
  }, 2800);
}

// Navigate back to available tickets
function goAvail() {
  go('screen-tickets');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderSelectionState();
});
