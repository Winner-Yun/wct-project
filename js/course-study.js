const reviewsContainer = document.getElementById("program-container");
const scrollLeftButton = document.getElementById("scroll-left-button");
const scrollRightButton = document.getElementById("scroll-right-button");

let step = 757.5; // Define the scroll step size
let scrollCount = 0;
let direction = 1; // 1 for right, -1 for left

// Auto-scroll function
function autoScroll() {
  if (scrollCount < 3) {
    reviewsContainer.scrollBy({
      left: step * direction, // Scroll in the current direction
      behavior: "auto",
    });
    scrollCount++;
  } else {
    direction *= -1;
    scrollCount = 0; // Reset the scroll counter
  }
}

setInterval(autoScroll, 5000);

const courseContainer = document.getElementById("skills-grid-container");
const scrollLeftButtonC = document.getElementById("scroll-left-buttonC");
const scrollRightButtonC = document.getElementById("scroll-right-buttonC");

let stepC = 1085; // Define the scroll step size
let scrollCountC = 0;
let directionC = 1; // 1 for right, -1 for left

// Scroll Left Button Click
scrollLeftButtonC.addEventListener("click", () => {
  courseContainer.scrollBy({
    left: -stepC,
    behavior: "smooth",
  });
});

// Scroll Right Button Click
scrollRightButtonC.addEventListener("click", () => {
  courseContainer.scrollBy({
    left: stepC,
    behavior: "smooth",
  });
});

const scrollToTopBtn = document.getElementById('arrow-upbtn');

// Add click event listener
scrollToTopBtn.addEventListener('click', function() {
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This ensures smooth scrolling
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add('animate__animated', 'animate__fadeInRight');
      observer.unobserve(entry.target);
    }
  });
});
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
});
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add('animate__animated', 'animate__fadeInDown');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.search-course').forEach(element => {
  observer3.observe(element);
});
document.querySelectorAll('.infoProgram').forEach(element => {
  observer2.observe(element);
});
document.querySelectorAll('.skills-grid').forEach(element => {
  observer.observe(element);
});
document.querySelectorAll('.video-item').forEach(element => {
  observer2.observe(element);
});
document.querySelectorAll('.navbar').forEach(element => {
  observer3.observe(element);
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










