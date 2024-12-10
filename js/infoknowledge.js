
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



/*End*/

// Interactive Example: Update course details dynamically
document.querySelectorAll(".details-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const rightPanel = document.querySelector(".right-panel");
    const courses = [
      {
        title: "HTML Basics",
        description:
          "សិក្សាអំពីរចនាសម្ព័ន្ធនៃទំព័របណ្តាញ, HTML ដែលមានន័យសំខាន់, និងស្លាកដែលចាំបាច់ដើម្បីបង្កើតគេហទំព័រដំបូងរបស់អ្នកចាប់ពីដំបូង។",
      },
      {
        title: "CSS Mastery",
        description:
          "ជាអ្នកជំនាញ CSS ដើម្បីបង្កើតការរចនាដែលគួរឲ្យទាក់ទាញ, អនិមិត្តភាព, និងទំរង់ត្រូវតាមប្រព័ន្ធសម្រាប់គម្រោងបណ្តាញសម័យថ្មីៗ។",
      },
      {
        title: "JavaScript Essentials",
        description:
          "យល់ដឹងអំពីមូលដ្ឋាននៃ JavaScript រួមមានអថេរ, វ្រង្ស, មុខងារ, និងការប្រតិបត្តិការលើ DOM។",
      },
      {
        title: "React for Beginners",
        description:
          "លោតចូលទៅក្នុង React ដើម្បីបង្កើតគំនិត UI ដំណើរការល្អដែលអាចប្រើឡើងវិញ និងគ្រប់គ្រងស្ថានភាពបានយ៉ាងងាយស្រួលសម្រាប់កម្មវិធីបណ្តាញដែលមានអន្តរកម្ម។",
      },
      {
        title: "Responsive Web Design",
        description:
          "រៀនពីរបៀបបង្កើតគេហទំព័រដែលឆ្លើយតប ហើយមានរូបរាងស្អាតនៅលើកុំព្យូទ័រ, តាប្លេត, និងឧបករណ៍ទូរស័ព្ទចល័តដោយប្រើ CSS និង media queries។",
      },
    ];
    const { title, description } = courses[index];
    rightPanel.querySelector("h2").textContent = title;
    rightPanel.querySelector(".description").textContent = description;
  });
});

/*add scroll by link to website*/
document.addEventListener("DOMContentLoaded", function () {

  function scrollToPercentage(percent) {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetScrollPosition = (percent / 100) * totalHeight;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth", 
    });
  }

  document.getElementById("whyKanesha").addEventListener("click", function (e) {
    e.preventDefault();
    scrollToPercentage(15); 
  });

  document
    .getElementById("programInfo")
    .addEventListener("click", function (e) {
      e.preventDefault();
      scrollToPercentage(42); 
    });

  document
    .getElementById("programPrice")
    .addEventListener("click", function (e) {
      e.preventDefault();
      scrollToPercentage(62);
    });
});

const scrollToTopBtn = document.getElementById("arrow-upbtn");


scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});
