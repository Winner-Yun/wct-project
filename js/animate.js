const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        observer.unobserve(entry.target);
      }
    });
  });
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add('animate__animated', 'animate__fadeInRight');
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('.sidebar').forEach(element => {
    observer.observe(element);
  });
  document.querySelectorAll('.settings-content').forEach(element => {
    observer2.observe(element);
  });