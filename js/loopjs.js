
const scrollToTopBtn = document.getElementById("arrow-upbtn");

// Add click event listener
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This ensures smooth scrolling
  });
});

/*new navbar*/ 

// Toggle the profile dropdown
document.getElementById("profileBtn").addEventListener("click", function () {
  const profileBar = document.querySelector(".profile-bar");
  profileBar.style.display =
    profileBar.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const costomeButton = document.querySelector(".costome");
  const notificationDropdown = document.querySelector(".notification-dropdown");

  costomeButton.addEventListener("click", () => {
    // Toggle the 'show' class on the dropdown
    notificationDropdown.classList.toggle("show");
  });

  // Optional: Hide the dropdown if clicking outside
  document.addEventListener("click", (event) => {
    if (!notificationDropdown.contains(event.target) && !costomeButton.contains(event.target)) {
      notificationDropdown.classList.remove("show");
    }
  });
});



// Close the dropdown if clicked outside of the profile or notification dropdowns
window.addEventListener("click", function (event) {
  if (
    !event.target.closest(".profile-bar") &&
    !event.target.closest("#profileBtn")
  ) {
    document.querySelector(".profile-bar").style.display = "none";
  }

});

// Get all dropdowns
const dropdowns = document.querySelectorAll(".menu .dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("show");
  });
});

document.getElementById("menuToggle").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");
  const toggleBtn = document.querySelector(".menu-toggle");
  const icon = toggleBtn.querySelector("i"); // Get the <i> element inside the button

  // Toggle menu visibility
  menu.classList.toggle("visible");

  // Adjust navbar width based on menu visibility
  if (menu.classList.contains("visible")) {
    navbar.classList.add("expanded"); // Add expanded class
    icon.classList.remove("bxs-chevron-down"); // Change icon to "up" arrow
    icon.classList.add("bxs-chevron-up");
    toggleBtn.classList.add("update");
  } else {
    navbar.classList.remove("expanded");
    icon.classList.remove("bxs-chevron-up"); // Change icon back to "down" arrow
    icon.classList.add("bxs-chevron-down");
    toggleBtn.classList.remove("update");
  }
});
