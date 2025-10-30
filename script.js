const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    // Clear previous images
    imagePreview.innerHTML = '';

    // Create uploaded image
    const uploadedImg = document.createElement('img');
    uploadedImg.src = e.target.result;
    uploadedImg.alt = 'Uploaded Image';
    uploadedImg.classList.add('uploaded');

    // Create overlay image
    const overlayImg = document.createElement('img');
    overlayImg.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlayImg.alt = 'Overlay';
    overlayImg.classList.add('overlay');

    imagePreview.appendChild(uploadedImg);
    imagePreview.appendChild(overlayImg);
  };
  reader.readAsDataURL(file);
});
