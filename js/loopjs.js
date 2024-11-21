/*animate loop*/
const profileBar = document.querySelector(".profile-bar");
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", function () {
  profileBar.classList.toggle("show");
});

const scrollToTopBtn = document.getElementById("arrow-upbtn");

// Add click event listener
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This ensures smooth scrolling
  });
});
function toggleNotificationDropdown() {
  const dropdown = document.getElementById("notificationDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("notificationDropdown");
  const bellIcon = document.querySelector(".controlbtn a:first-child");

  if (!dropdown.contains(event.target) && !bellIcon.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
