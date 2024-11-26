const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
      observer.unobserve(entry.target);
    }
  });
});
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".sidebar").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".settings-content").forEach((element) => {
  observer2.observe(element);
});

/*animate infokhnowledge*/

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".navbar").forEach((element) => {
  observer3.observe(element);
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".controlInfo").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".parah-tell").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".demoVideo").forEach((element) => {
  observer2.observe(element);
});

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__zoomIn");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".box").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".left-panel").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".right-panel").forEach((element) => {
  observer2.observe(element);
});
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when the element is in view
      entry.target.classList.add("animate__animated", "animate__fadeInBottomLeft");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".aniBack").forEach((element) => {
  observer2.observe(element);
});
document.querySelectorAll(".rocket").forEach((element) => {
  observer6.observe(element);
});
document.querySelectorAll(".teacher-card").forEach((element) => {
  observer5.observe(element);
});

/*animation on qr code pay*/
document.querySelectorAll(".qr-phone").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".payment-form").forEach((element) => {
  observer5.observe(element);
});

/*animation on reanPage*/
document.querySelectorAll(".card").forEach((element) => {
  observer5.observe(element);
});


/*animation on website Page frontend*/
document.querySelectorAll(".hero-text").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".project-card ").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".testimonials ").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".services h2  ").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".services p  ").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".anima").forEach((element) => {
  observer5.observe(element);
});

/*animate blog*/
document.querySelectorAll(".related-article").forEach((element) => {
  observer3.observe(element);
});
document.querySelectorAll(".comparison-section").forEach((element) => {
  observer5.observe(element);
});
document.querySelectorAll(".comment-section").forEach((element) => {
  observer4.observe(element);
});

