const profileBar = document.querySelector('.profile-bar');
const profileBtn = document.getElementById('profileBtn');
profileBtn.addEventListener('click', function() {
  profileBar.classList.toggle('show');
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
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add('animate__animated', 'animate__fadeInDown');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.navbar').forEach(element => {
  observer2.observe(element);
});
document.querySelectorAll('.informationWeb').forEach(element => {
  observer.observe(element);
});
