function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Hide the upload container
  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.classList.add('hidden');

  const reader = new FileReader();
  reader.onload = function(e) {
    const scrollContainer = document.getElementById('scrollContainer');

    // Create uploaded image
    const uploaded = new Image();
    uploaded.src = e.target.result;
    uploaded.classList.add('uploaded');

    // Append uploaded image after overlay
    scrollContainer.appendChild(uploaded);
  };
  reader.readAsDataURL(file);
}
