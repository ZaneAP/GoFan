function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Hide upload button
  const uploadLabel = document.getElementById('uploadLabel');
  uploadLabel.classList.add('hidden');

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.innerHTML = ''; // clear previous images

    // Uploaded image
    const uploaded = new Image();
    uploaded.src = e.target.result;
    uploaded.classList.add('uploaded');

    // Overlay image
    const overlay = new Image();
    overlay.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlay.classList.add('overlay');

    // Append both
    wrapper.appendChild(uploaded);
    wrapper.appendChild(overlay);

    // Adjust overlay height to match uploaded image
    uploaded.onload = () => {
      overlay.style.height = uploaded.offsetHeight + 'px';
    };

    // Update overlay on window resize
    window.addEventListener('resize', () => {
      overlay.style.height = uploaded.offsetHeight + 'px';
    });
  };
  reader.readAsDataURL(file);
}
