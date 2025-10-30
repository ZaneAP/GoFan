const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

// Make the upload box clickable
uploadBox.addEventListener('click', () => fileInput.click());

// Handle file selection
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    // Clear previous image
    imagePreview.innerHTML = '';

    // Create image element
    const img = document.createElement('img');
    img.src = e.target.result;
    img.alt = 'Uploaded Image';

    // Add to preview container
    imagePreview.appendChild(img);
  };

  reader.readAsDataURL(file);
});
