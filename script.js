function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const uploadBox = document.getElementById('uploadBox');
      uploadBox.innerHTML = `
        <div class="image-wrapper">
          <img src="${e.target.result}" alt="Uploaded Image" class="uploaded-image">
          <img src="https://github.com/ZaneAP/GoFan/blob/main/IMG_2349.jpeg?raw=true" alt="Overlay" class="overlay-image">
        </div>
      `;
    };
    reader.readAsDataURL(file);
  }
}
