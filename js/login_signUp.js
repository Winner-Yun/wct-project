function toggleForm() {
  const formSlider = document.getElementById("formSlider");
  formSlider.style.transform =
    formSlider.style.transform === "translateX(-50%)"
      ? "translateX(0)"
      : "translateX(-50%)";
}

document
  .getElementById("toggleLoginPassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("loginPassword");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("bx-hide");
    this.classList.toggle("bx-show");
  });

document
  .getElementById("toggleSignUpPassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("signUpPassword");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("bx-show");
    this.classList.toggle("bx-hide");
  });

document
  .getElementById("toggleSignUp2Password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("signUp2Password");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("bx-show");
    this.classList.toggle("bx-hide");
  });

document.getElementById("logInButton").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.getElementById("signUpButton").addEventListener("click", function () {
  window.location.href = "index.html";
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

document.querySelectorAll(".container").forEach((element) => {
  observer.observe(element);
});
