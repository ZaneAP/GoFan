function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.innerHTML = ''; // clear previous images

    // Uploaded image
    const uploaded = document.createElement('img');
    uploaded.src = e.target.result;
    uploaded.classList.add('uploaded');

    // Overlay image
    const overlay = document.createElement('img');
    overlay.src = 'https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true';
    overlay.classList.add('overlay');

    // Append both
    wrapper.appendChild(uploaded);
    wrapper.appendChild(overlay);
  };
  reader.readAsDataURL(file);
}
