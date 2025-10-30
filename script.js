function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Hide upload container after selection
  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.style.display = 'none';

  const scrollContainer = document.getElementById('scrollContainer');

  // Add uploaded image
  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file);
  uploaded.classList.add('uploaded');

  scrollContainer.appendChild(uploaded);
}
