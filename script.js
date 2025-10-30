function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Hide the upload section
  const uploadContainer = document.getElementById('uploadContainer');
  uploadContainer.classList.add('hidden');

  const reader = new FileReader();
  reader.onload = function(e) {
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.innerHTML = ''; // clear previous images

    // Scrolling overlay image (above)
    const overlay = new Image();
    overlay.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlay.classList.add('overlay');

    // Uploaded image
    const uploaded = new Image();
    uploaded.src = e.target.result;
    uploaded.classList.add('uploaded');

    // Append overlay first so it appears above uploaded image
    scrollContainer.appendChild(overlay);
    scrollContainer.appendChild(uploaded);
  };
  reader.readAsDataURL(file);
}
