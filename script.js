function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const scrollContainer = document.getElementById('scrollContainer');

  const uploaded = new Image();
  uploaded.src = URL.createObjectURL(file); // faster than FileReader
  uploaded.classList.add('uploaded');

  scrollContainer.appendChild(uploaded);
}
