function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.style.display = 'none';

  const scrollContainer = document.getElementById('scrollContainer');

  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file);
  uploaded.classList.add('uploaded');

  scrollContainer.appendChild(uploaded);
}

// "Use 1 ticket" button
document.getElementById('useTicketButton').addEventListener('click', () => {
  document.getElementById('mainHeader').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('mainFooter').style.display = 'none';

  const fsImage = document.getElementById('fullScreenImage');
  fsImage.style.display = 'flex';

  // Clicking anywhere on fullscreen ticket changes header + center image
  fsImage.onclick = () => {
    fsImage.style.display = 'none';

    // Show header again
    const header = document.getElementById('mainHeader');
    header.style.display = 'block';
    header.querySelector('img').src = "https://github.com/ZaneAP/GoFan/blob/main/IMG_2351.jpeg?raw=true";

    // Replace main content
    const mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'flex';
    mainContent.innerHTML = `
      <div class="scroll-container" style="width:100%; max-width:600px;">
        <img src="https://github.com/ZaneAP/GoFan/blob/main/1-e459d354.jpeg?raw=true" style="width:100%; height:auto; display:block;" alt="New Center Image">
      </div>
    `;
  };
});
