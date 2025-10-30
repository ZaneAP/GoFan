function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('scrollableWrapper');
    wrapper.innerHTML = ''; // clear previous images

    // Create uploaded image
    const uploaded = document.createElement('img');
    uploaded.src = e.target.result;
    uploaded.classList.add('uploaded');

    // Create overlay image
    const overlay = document.createElement('img');
    overlay.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlay.classList.add('overlay');

    // Wait for uploaded image to load to set wrapper height
    uploaded.onload = () => {
      wrapper.style.height = uploaded.offsetHeight + 'px';
      overlay.style.height = uploaded.offsetHeight + 'px';
    };

    wrapper.appendChild(uploaded);
    wrapper.appendChild(overlay);

    // Update overlay on resize
    window.addEventListener('resize', () => {
      overlay.style.height = uploaded.offsetHeight + 'px';
      wrapper.style.height = uploaded.offsetHeight + 'px';
    });
  };
  reader.readAsDataURL(file);
}
