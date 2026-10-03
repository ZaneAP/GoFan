// ===== STATE =====
let ticketSelected = false;
let ticketUsed = false;
// ===== SCREEN NAVIGATION =====
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}
// ===== TICKET SELECTION =====
function toggleTicket() {
  if (ticketUsed) return;
  ticketSelected = !ticketSelected;
  updateTicketUI();
}
function toggleSelectAll(selectAll) {
  if (ticketUsed) return;
  ticketSelected = selectAll;
  updateTicketUI();
}
function updateTicketUI() {
  const card = document.getElementById('ticket-card');
  const checkbox = document.getElementById('ticket-checkbox');
  const btn = document.getElementById('btn-select-tickets');
  if (ticketSelected) {
    card.classList.add('selected');
    checkbox.classList.add('checked');
  } else {
    card.classList.remove('selected');
    checkbox.classList.remove('checked');
  }
  btn.disabled = !ticketSelected;
}
// ===== USE TICKET =====
function useTicket() {
  ticketUsed = true;
  showScreen('screen-success');
}
// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Start with ticket not selected, button disabled
  updateTicketUI();
});
