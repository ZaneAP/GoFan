function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.innerHTML = `
      <img src="${e.target.result}" alt="Uploaded Image" class="uploaded-image">
      <img src="https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true" alt="Overlay" class="overlay-image">
    `;

    const uploaded = wrapper.querySelector('.uploaded-image');
    const overlay = wrapper.querySelector('.overlay-image');

    function resizeOverlay() {
      overlay.style.width = uploaded.offsetWidth + 'px';
      overlay.style.height = uploaded.offsetHeight + 'px';
    }

    uploaded.onload = resizeOverlay;
    window.addEventListener('resize', resizeOverlay);
  };
  reader.readAsDataURL(file);
}
