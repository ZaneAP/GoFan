function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');

    // Create uploaded image element
    const uploadedImg = new Image();
    uploadedImg.src = e.target.result;
    uploadedImg.classList.add('uploaded');

    // Create overlay image element
    const overlayImg = new Image();
    overlayImg.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlayImg.classList.add('overlay');

    // Wait until uploaded image loads to set overlay height correctly
    uploadedImg.onload = () => {
      overlayImg.style.height = uploadedImg.offsetHeight + 'px';
      wrapper.style.height = uploadedImg.offsetHeight + 'px'; // container height matches image
    };

    // Clear wrapper and append both images
    wrapper.innerHTML = '';
    wrapper.appendChild(uploadedImg);
    wrapper.appendChild(overlayImg);

    // Resize overlay on window resize
    window.addEventListener('resize', () => {
      overlayImg.style.height = uploadedImg.offsetHeight + 'px';
      wrapper.style.height = uploadedImg.offsetHeight + 'px';
    });
  };
  reader.readAsDataURL(file);
}
