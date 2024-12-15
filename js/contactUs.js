const scrollToTopBtn = document.getElementById("arrow-upbtn");

// Add click event listener
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This ensures smooth scrolling
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target);
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
      observer.unobserve(entry.target);
    }
  });
});
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
      observer.unobserve(entry.target);
    }
  });
});
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".navbar").forEach((element) => {
  observer2.observe(element);
});
document.querySelectorAll(".informationWeb").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".contact-form").forEach((element) => {
  observer3.observe(element);
});
document.querySelectorAll(".contact-item").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".social-icons").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".map").forEach((element) => {
  observer.observe(element);
});

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
    if (
      !notificationDropdown.contains(event.target) &&
      !costomeButton.contains(event.target)
    ) {
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
