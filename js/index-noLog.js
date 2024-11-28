const scrollContainer = document.querySelector(".scroll-container");
let isDragging = false; // Tracks if the mouse is being held down
let startX, scrollStart;

// Mouse down event (start of the "drag")
scrollContainer.addEventListener("mousedown", (e) => {
  isDragging = true; // Set dragging to true
  startX = e.pageX - scrollContainer.offsetLeft; // Get the initial mouse X position
  scrollStart = scrollContainer.scrollLeft; // Store the initial scroll position
  scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling during drag
});

// Mouse move event (dragging the container)
scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // If not dragging, exit the function
  e.preventDefault(); // Prevent default selection behavior

  const currentX = e.pageX - scrollContainer.offsetLeft; // Current X position of the mouse
  const scrollDistance = startX - currentX; // Calculate how much to scroll based on mouse movement

  scrollContainer.scrollLeft = scrollStart + scrollDistance; // Scroll the container
});

// Mouse up event (end of the "drag")
document.addEventListener("mouseup", () => {
  isDragging = false; // Stop dragging
  scrollContainer.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
});

// Mouse leave event (stop dragging even if mouse leaves container)
scrollContainer.addEventListener("mouseleave", () => {
  isDragging = false; // Stop dragging when mouse leaves the container
});

document.getElementById("scroll-left").addEventListener("click", () => {
  const scrollAmount = 10000;
  scrollContainer.scrollBy({
    left: -scrollAmount, // Move left
    behavior: "smooth", // Smooth scroll
  });
});

document.getElementById("scroll-right").addEventListener("click", () => {
  const scrollAmount = 10000;
  scrollContainer.scrollBy({
    left: scrollAmount, // Move right
    behavior: "smooth", // Smooth scroll
  });
});

const reviewsContainer = document.getElementById("reviews-container");
const scrollLeftButton = document.getElementById("scroll-left-button");
const scrollRightButton = document.getElementById("scroll-right-button");

// Scroll Left Button Click
scrollLeftButton.addEventListener("click", () => {
  reviewsContainer.scrollBy({
    left: -300, // Scroll to the right by 300px
    behavior: "smooth",
  });
});

// Scroll Right Button Click
scrollRightButton.addEventListener("click", () => {
  reviewsContainer.scrollBy({
    left: 300, // Scroll to the right by 300px
    behavior: "smooth",
  });
});

let currentFlippedBox = null;

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    // If the box is already flipped, flip it back to the front
    if (this.classList.contains("flipped")) {
      this.classList.remove("flipped");
      currentFlippedBox = null; // Reset current flipped box
    } else {
      // If another box is flipped, flip it back to the front
      if (currentFlippedBox) {
        currentFlippedBox.classList.remove("flipped");
      }
      // Flip the clicked box to the back
      this.classList.add("flipped");
      currentFlippedBox = this; // Set current flipped box
    }
  });
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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
      observer.unobserve(entry.target);
    }
  });
});
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target);
    }
  });
});
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
      observer.unobserve(entry.target);
    }
  });
});
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__zoomIn");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".navbar").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".informationWeb").forEach((element) => {
  observer2.observe(element);
});
document.querySelectorAll(".teacherValue").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".scroll-container").forEach((element) => {
  observer3.observe(element);
});
document.querySelectorAll(".review-section").forEach((element) => {
  observer3.observe(element);
});
document.querySelectorAll(".container").forEach((element) => {
  observer2.observe(element);
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
