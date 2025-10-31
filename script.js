// Handle image upload
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.style.visibility = 'hidden'; // keeps layout stable

  const scrollContainer = document.getElementById('scrollContainer');
  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file);
  uploaded.classList.add('uploaded');

  scrollContainer.appendChild(uploaded);
}

// Handle "Use 1 ticket" click
document.getElementById('useTicketButton').addEventListener('click', () => {
  // Hide main content
  document.getElementById('mainHeader').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('mainFooter').style.display = 'none';

  // Show fullscreen ticket
  const fullScreen = document.getElementById('fullScreenImage');
  fullScreen.style.display = 'flex';
});

// Handle fullscreen ticket click
document.getElementById('fullScreenImage').addEventListener('click', () => {
  // Hide the fullscreen view
  const fullScreen = document.getElementById('fullScreenImage');
  fullScreen.style.display = 'none';

  // Restore header
  const header = document.getElementById('mainHeader');
  header.style.display = 'block';
  header.querySelector('img').src = "https://github.com/ZaneAP/GoFan/blob/main/IMG_2351.jpeg?raw=true";

  // Replace main content
  const main = document.getElementById('mainContent');
  main.style.display = 'flex';
  main.innerHTML = `
    <div class="scroll-container" style="width:100%; max-width:600px;">
      <img src="https://github.com/ZaneAP/GoFan/blob/main/1-e459d354.jpeg?raw=true" style="width:100%; height:auto; display:block;" alt="New Center Image">
    </div>
  `;

  // Optionally restore footer if desired
  document.getElementById('mainFooter').style.display = 'flex';
});
