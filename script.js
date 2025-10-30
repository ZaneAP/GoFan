function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.innerHTML = ''; // clear previous images

    // Uploaded image
    const uploadedImg = document.createElement('img');
    uploadedImg.src = e.target.result;
    uploadedImg.alt = 'Uploaded Image';
    uploadedImg.classList.add('uploaded');

    // Overlay image
    const overlayImg = document.createElement('img');
    overlayImg.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlayImg.alt = 'Overlay';
    overlayImg.classList.add('overlay');

    wrapper.appendChild(uploadedImg);
    wrapper.appendChild(overlayImg);
  };
  reader.readAsDataURL(file);
}
