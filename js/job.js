function scrollByPercentage(percentage) {
  const scrollAmount = (window.innerHeight * percentage) / 100;
  window.scrollBy({
    top: scrollAmount,
    left: 0,
    behavior: "smooth",
  });
}

// "Start Searching" button scrolls down by 50% of the viewport
const startSearchingBtn = document.getElementById("start-searching-btn");
startSearchingBtn.addEventListener("click", () => scrollByPercentage(50));

// "Browse Jobs" button scrolls down by 100% of the viewport
const browseJobsBtn = document.getElementById("browse-jobs-btn");
browseJobsBtn.addEventListener("click", () => scrollByPercentage(80));

// Get all dropdowns
const dropdowns = document.querySelectorAll(".menu .dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("show");
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
