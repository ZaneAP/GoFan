function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Hide upload container
  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.style.display = 'none';

  const scrollContainer = document.getElementById('scrollContainer');

  // Add uploaded image
  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file);
  uploaded.classList.add('uploaded');

  scrollContainer.appendChild(uploaded);
}

// Handle "Use 1 ticket" button
document.getElementById('useTicketButton').addEventListener('click', () => {
  // Hide all main elements
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';

  // Show full-screen image
  document.getElementById('fullScreenImage').style.display = 'flex';
});
