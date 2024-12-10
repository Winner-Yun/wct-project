const profileBar = document.querySelector(".profile-bar");
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", function () {
  profileBar.classList.toggle("show");
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

function openTab(tabId) {
  // Hide all tab content
  const contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // Remove active class from all buttons
  const buttons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Show the selected tab and mark button as active
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Show the first tab by default on page load
document.addEventListener("DOMContentLoaded", () => {
  openTab("description");
});

let existingComments = [
  {
    text: "លោកគ្រូសង្ហាហើយពូកែពន្យល់ទៀត។",
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    username: "សិស្ស", // Comment username
    profileImage: "../img/secretComment.png", // Comment image
    replies: [
      {
        text: "បាទអគុណប្អូន!",
        timestamp: new Date(Date.now() - 120000), // 2 minutes ago
        username: "លោកគ្រូ", // Reply username
        profileImage: "../img/teacher/kimchayPoster.jpg", // Reply image
      },
      {
        text: "ខំប្រឹងរៀនណា!",
        timestamp: new Date(Date.now() - 30000), // 1 minute ago
        username: "លោកគ្រូ", // Reply username
        profileImage: "../img/teacher/kimchayPoster.jpg", // Reply image
      },
    ],
  },
  {
    text: "បើបានលោកគ្រូធ្វើសង្សាមិនដឹងរៀនពូកែយ៉ាងណាទេ។",
    timestamp: new Date(Date.now() - 600000), // 10 minutes ago
    username: "សិស្ស", // Comment username
    profileImage: "../img/secretComment.png", // Comment image
    replies: [
      {
        text: "ហាសហាលោកគ្រូមានប្តីហើយ។",
        timestamp: new Date(Date.now() - 240000), // 4 minutes ago
        username: "លោកគ្រូ", // Reply username
        profileImage: "../img/teacher/kimchayPoster.jpg", // Reply image
      },
    ],
  },
  {
    text: "សំឡេងពិរោះណាស់លោកគ្រូ​។",
    timestamp: new Date(Date.now() - 1200000), // 20 minutes ago
    username: "សិស្ស", // Comment username
    profileImage: "../img/secretComment.png", // Comment image
    replies: [
      {
        text: "បាទគ្រូអតីតម្ចាស់ពាន The Voice ដែរ។",
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        username: "លោកគ្រូ", // Reply username
        profileImage: "../img/teacher/kimchayPoster.jpg", // Reply image
      },
    ],
  },
];

// Default user profile images and names
const defaultProfileImages = {
  student: "../img/secretComment.png",
};

// Function to display existing comments
function displayComments() {
  const commentsList = document.getElementById("comments-list");
  const commentCount = document.getElementById("comment-count");
  commentsList.innerHTML = ""; // Clear previous comments

  // Sort comments by timestamp (newest first)
  existingComments.sort((a, b) => b.timestamp - a.timestamp);

  existingComments.forEach((comment, index) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
          <img src="${comment.profileImage}" alt="${comment.username} Profile Image" class="profile-image">
          <p><span class="username">${comment.username}</span>: ${comment.text}</p>
          <button class="toggle-replies" data-index="${index}">
              ${comment.replies.length} Replies ▼
          </button>
          <div class="replies" id="replies-${index}" style="display: none;"></div>
          <div class="reply-form" id="reply-form-${index}" style="display: none;">
              <textarea id="reply-input-${index}" placeholder="Write a reply..." required></textarea>
              <button class="submit-reply" data-index="${index}">Post Reply</button>
          </div>
      `;

    // Append reply buttons to each reply by student
    comment.replies.forEach((reply, replyIndex) => {
      const replyElement = document.createElement("div");
      replyElement.classList.add("reply");
      replyElement.innerHTML = `
              <img src="${reply.profileImage}" alt="${reply.username} Profile Image" class="profile-image">
              <p><span class="username">${reply.username}</span>: ${reply.text}</p>
              <button class="reply-button" data-comment-index="${index}" data-reply-index="${replyIndex}">Reply</button>
          `;
      commentElement
        .querySelector(`#replies-${index}`)
        .appendChild(replyElement);
    });

    commentsList.appendChild(commentElement);
  });

  // Add event listeners to toggle replies
  document.querySelectorAll(".toggle-replies").forEach((button) => {
    button.addEventListener("click", function () {
      const index = button.getAttribute("data-index");
      const repliesDiv = document.getElementById(`replies-${index}`);
      const isVisible = repliesDiv.style.display === "block";
      repliesDiv.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible
        ? `${existingComments[index].replies.length} Replies ▼`
        : `${existingComments[index].replies.length} Replies ▲`;
    });
  });

  // Update comment count
  commentCount.textContent = existingComments.length;
}

// Event listener for adding a new comment
document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText) {
      // Add new comment with the current timestamp
      existingComments.push({
        text: commentText,
        timestamp: new Date(),
        username: "សិស្ស", // New comment username
        profileImage: defaultProfileImages.student, // New comment image
        replies: [], // Initialize with empty replies
      });
      displayComments(); // Re-display comments
      commentInput.value = ""; // Clear the input field
    }
  });

// Initial display of comments
displayComments();

function startQuiz() {
  alert("Starting the quiz!");
}

const observer = new IntersectionObserver((entries) => {
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
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
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
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".introTelling").forEach((element) => {
  observer3.observe(element);
});
document.querySelectorAll(".containerBox").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".paragraph").forEach((element) => {
  observer2.observe(element);
});
document.querySelectorAll(".video-container").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".suggestion").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".profile-container").forEach((element) => {
  observer4.observe(element);
});
document.querySelectorAll(".tab-content").forEach((element) => {
  observer2.observe(element);
});
document.querySelectorAll(".navbar").forEach((element) => {
  observer3.observe(element);
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

