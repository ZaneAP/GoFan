// Handle image upload
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.style.visibility = 'hidden'; // stays invisible but keeps space

  const scrollContainer = document.getElementById('scrollContainer');
  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file);
  uploaded.classList.add('uploaded');
  scrollContainer.appendChild(uploaded);
}

// When user presses "Use 1 ticket"
document.getElementById('useTicketButton').addEventListener('click', () => {
  // Hide main content and footer
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('mainFooter').style.display = 'none';

  // Show the scrollable ticket section
  document.getElementById('ticketSection').style.display = 'flex';
});

// When user taps anywhere on the ticket image
document.getElementById('ticketSection').addEventListener('click', () => {
  const ticketSection = document.getElementById('ticketSection');
  ticketSection.style.display = 'none';

  // Keep header
  const header = document.getElementById('mainHeader');
  header.style.display = 'block';
  header.querySelector('img').src = "https://github.com/ZaneAP/GoFan/blob/main/IMG_2351.jpeg?raw=true";

  // Replace main area with centered new image
  const main = document.getElementById('mainContent');
  main.style.display = 'flex';
  main.innerHTML = `
    <div class="centered-container">
      <img src="https://github.com/ZaneAP/GoFan/blob/main/1-e459d354.jpeg?raw=true" alt="Centered Image">
    </div>
  `;
});
