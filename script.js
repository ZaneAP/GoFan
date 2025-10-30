function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.innerHTML = `
      <img src="${e.target.result}" class="uploaded" alt="Uploaded Image">
      <img src="https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true" class="overlay" alt="Overlay Image">
    `;

    const uploaded = wrapper.querySelector('.uploaded');
    const overlay = wrapper.querySelector('.overlay');

    function resizeOverlay() {
      overlay.style.width = uploaded.offsetWidth + 'px';
      overlay.style.height = uploaded.offsetHeight + 'px';
    }

    uploaded.onload = resizeOverlay;
    window.addEventListener('resize', resizeOverlay);
  };
  reader.readAsDataURL(file);
}
