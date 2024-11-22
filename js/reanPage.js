function toggleIcon(event) {
  event.preventDefault(); // Prevent default link behavior
  const icon = this.querySelector("i");
  icon.classList.toggle("bx-bookmark");
  icon.classList.toggle("bxs-bookmark-star");
}

// Add event listener to multiple elements
[
  "iconToggle1",
  "iconToggle2",
  "iconToggle3",
  "iconToggle4",
  "iconToggle5",
].forEach((id) => {
  document.getElementById(id).addEventListener("click", toggleIcon);
});
