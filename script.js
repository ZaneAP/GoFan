const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const scrollableContainer = document.getElementById('scrollableContainer');
const uploadedImage = document.getElementById('uploadedImage');

// Click upload box to open file picker
uploadBox.addEventListener('click', () => fileInput.click());

// Handle file selection
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    // Hide the upload box
    uploadBox.style.display = 'none';

    // Show scrollable container
    scrollableContainer.style.display = 'block';

    // Set uploaded image source
    uploadedImage.src = e.target.result;

    // Optional: make the image scrollable
    uploadedImage.style.width = 'auto';
    uploadedImage.style.height = 'auto';
  };

  reader.readAsDataURL(file);
});
