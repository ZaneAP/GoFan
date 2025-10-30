function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('scrollableWrapper');

    // Uploaded image
    const uploadedImg = new Image();
    uploadedImg.src = e.target.result;
    uploadedImg.classList.add('uploaded');

    // Overlay image
    const overlayImg = new Image();
    overlayImg.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlayImg.classList.add('overlay');

    // Wait until uploaded image loads to adjust overlay if needed
    uploadedImg.onload = () => {
      overlayImg.style.width = uploadedImg.offsetWidth + 'px';
    };

    // Clear wrapper and append both images
    wrapper.innerHTML = '';
    wrapper.appendChild(uploadedImg);
    wrapper.appendChild(overlayImg);

    // Update overlay width on window resize
    window.addEventListener('resize', () => {
      overlayImg.style.width = uploadedImg.offsetWidth + 'px';
    });
  };
  reader.readAsDataURL(file);
}
