// =========================================================
// GoFan Interaction Controller
// Micro-interactions, Dynamic Timestamping, & Screen Transitions
// =========================================================

let selected = true;
let autoTransitionTimer = null;

// Format timestamp exactly like authentic GoFan: "Used Sat, Sep 26, 10:28 PM"
function formatRedemptionTime(date) {
  if (!date) date = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayNum = String(date.getDate()).padStart(2, '0');
  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  
  return `Used ${dayName}, ${monthName} ${dayNum}, ${hours}:${minutes} ${ampm}`;
}

// Gentle pleasant redemption chime (Web Audio API)
function playSuccessChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.12); // A5
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch (e) {
    // AudioContext may be restricted before user gesture
  }
}

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
  if (navigator.vibrate) {
    try { navigator.vibrate(10); } catch (err) {}
  }
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
  if (navigator.vibrate) {
    try { navigator.vibrate(15); } catch (err) {}
  }
  go('screen-confirm');
}

// Complete ticket use from confirmation screen
function doUse() {
  // Calculate and store dynamic redemption timestamp
  const now = new Date();
  const timeStr = formatRedemptionTime(now);
  try {
    localStorage.setItem('gofan_redeemed_time', timeStr);
  } catch (e) {}

  // Update DOM timestamp on Screen 4
  const metaTxt = document.querySelector('.used-meta-txt');
  if (metaTxt) {
    metaTxt.textContent = timeStr;
  }

  // Haptic feedback & sound
  if (navigator.vibrate) {
    try { navigator.vibrate([25, 45, 30]); } catch (err) {}
  }
  playSuccessChime();

  // Navigate to Success screen
  go('screen-success');

  // Automatically transition to the "Used Tickets" screen after 2.6s
  autoTransitionTimer = setTimeout(() => {
    go('screen-used');
  }, 2600);
}

// Navigate back to available tickets
function goAvail() {
  go('screen-tickets');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderSelectionState();

  // Initialize redemption time with saved or real-time timestamp
  const metaTxt = document.querySelector('.used-meta-txt');
  if (metaTxt) {
    let saved = null;
    try {
      saved = localStorage.getItem('gofan_redeemed_time');
    } catch (e) {}
    metaTxt.textContent = saved || formatRedemptionTime(new Date());
  }

  // Hook up print button
  const printBtn = document.querySelector('.bot-print');
  if (printBtn) {
    printBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.print();
    });
  }

  // Show all ticket info toggle
  const showInfoBtn = document.querySelector('.show-info');
  if (showInfoBtn) {
    showInfoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = showInfoBtn.getAttribute('data-expanded') === 'true';
      showInfoBtn.setAttribute('data-expanded', !isExpanded);
      showInfoBtn.innerHTML = !isExpanded
        ? `Hide ticket info <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 7.5L6 4l3.5 3.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `Show all ticket info <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    });
  }
});
