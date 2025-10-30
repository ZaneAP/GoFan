function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('scrollableWrapper');
    
    // Clear previous images
    wrapper.innerHTML = '';

    // Create uploaded image
    const uploadedImg = new Image();
    uploadedImg.src = e.target.result;
    uploadedImg.classList.add('uploaded');

    // Create overlay image
    const overlayImg = new Image();
    overlayImg.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlayImg.classList.add('overlay');

    // Wait for uploaded image to load to set wrapper height
    uploadedImg.onload = () => {
      wrapper.style.height = uploadedImg.offsetHeight + 'px';
      overlayImg.style.height = uploadedImg.offsetHeight + 'px';
    };

    // Append images
    wrapper.appendChild(uploadedImg);
    wrapper.appendChild(overlayImg);

    // Update overlay height on window resize
    window.addEventListener('resize', () => {
      overlayImg.style.height = uploadedImg.offsetHeight + 'px';
      wrapper.style.height = uploadedImg.offsetHeight + 'px';
    });
  };
  reader.readAsDataURL(file);
}
