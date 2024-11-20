const profileBar = document.querySelector(".profile-bar");
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", function () {
  profileBar.classList.toggle("show");
});

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

document.querySelectorAll('.introTelling').forEach(element => {
  observer3.observe(element);
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

function toggleMenu() {
  const navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("show");
}


/*go to info*/




