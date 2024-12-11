let currentIndex = 0;
const slides = document.querySelectorAll(".carousel .slide");
const totalSlides = slides.length;

function changeSlide() {
  slides[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add("active");
}

setInterval(changeSlide, 10000);

// Get all topic links and cards
const topicLinks = document.querySelectorAll(".topic-link");
const topicCards = document.querySelectorAll(".topic-card");

// Function to filter topic cards based on selected topic
function filterTopics(selectedTopic) {
  topicCards.forEach((card) => {
    // Show or hide topic cards based on the selected topic
    if (selectedTopic === "all" || card.dataset.topic === selectedTopic) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Add event listeners to each topic link
topicLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    topicLinks.forEach((link) => link.classList.remove("active"));

    link.classList.add("active");

    const selectedTopic = link.getAttribute("data-topic");

    // Filter the topics
    filterTopics(selectedTopic);
  });
});

filterTopics("all");

