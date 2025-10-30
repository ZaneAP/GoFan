const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const scrollableImage = document.getElementById('scrollableImage');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    // Set uploaded image as scrollable background
    scrollableImage.style.backgroundImage = `url('${e.target.result}')`;
  };
  reader.readAsDataURL(file);
});
