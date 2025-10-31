const ticketButton = document.getElementById("ticketButton");
const footerButton = document.getElementById("footerButton");
const fullscreenContainer = document.getElementById("fullscreenContainer");
const centerImageContainer = document.getElementById("centerImageContainer");
const uploadSection = document.getElementById("uploadSection");

ticketButton.addEventListener("click", () => {
  uploadSection.classList.add("hidden");
  centerImageContainer.classList.add("hidden");
  fullscreenContainer.classList.remove("hidden");
});

fullscreenContainer.addEventListener("click", () => {
  fullscreenContainer.classList.add("hidden");
  centerImageContainer.classList.remove("hidden");
});

footerButton.addEventListener("click", () => {
  fullscreenContainer.classList.add("hidden");
  centerImageContainer.classList.remove("hidden");
});
