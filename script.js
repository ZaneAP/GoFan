const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const scrollableBackground = document.getElementById('scrollableBackground');

// Make the upload box clickable
uploadBox.addEventListener('click', () => fileInput.click());

// Handle file selection
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    // Hide the upload box
    uploadBox.style.display = 'none';

    // Show the scrollable background
    scrollableBackground.style.display = 'block';

    // Set uploaded image as background
    scrollableBackground.style.backgroundImage = `url('${e.target.result}')`;

    // Optional: background scroll is native via overflow
    scrollableBackground.style.backgroundSize = 'cover';
    scrollableBackground.style.backgroundPosition = 'center';
  };

  reader.readAsDataURL(file);
});
