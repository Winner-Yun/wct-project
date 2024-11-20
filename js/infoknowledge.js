/*notification*/
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
/*end*/

/*Profilr Bar*/
const profileBar = document.querySelector(".profile-bar");
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", function () {
  profileBar.classList.toggle("show");
});

/*End*/ 


// Interactive Example: Update course details dynamically
document.querySelectorAll('.details-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
      const rightPanel = document.querySelector('.right-panel');
      const courses = [
          {
              title: "HTML Basics",
              description: "សិក្សាអំពីរចនាសម្ព័ន្ធនៃទំព័របណ្តាញ, HTML ដែលមានន័យសំខាន់, និងស្លាកដែលចាំបាច់ដើម្បីបង្កើតគេហទំព័រដំបូងរបស់អ្នកចាប់ពីដំបូង។",
          },
          {
              title: "CSS Mastery",
              description: "ជាអ្នកជំនាញ CSS ដើម្បីបង្កើតការរចនាដែលគួរឲ្យទាក់ទាញ, អនិមិត្តភាព, និងទំរង់ត្រូវតាមប្រព័ន្ធសម្រាប់គម្រោងបណ្តាញសម័យថ្មីៗ។",
          },
          {
              title: "JavaScript Essentials",
              description: "យល់ដឹងអំពីមូលដ្ឋាននៃ JavaScript រួមមានអថេរ, វ្រង្ស, មុខងារ, និងការប្រតិបត្តិការលើ DOM។",
          },
          {
              title: "React for Beginners",
              description: "លោតចូលទៅក្នុង React ដើម្បីបង្កើតគំនិត UI ដំណើរការល្អដែលអាចប្រើឡើងវិញ និងគ្រប់គ្រងស្ថានភាពបានយ៉ាងងាយស្រួលសម្រាប់កម្មវិធីបណ្តាញដែលមានអន្តរកម្ម។",
          },
          {
              title: "Responsive Web Design",
              description: "រៀនពីរបៀបបង្កើតគេហទំព័រដែលឆ្លើយតប ហើយមានរូបរាងស្អាតនៅលើកុំព្យូទ័រ, តាប្លេត, និងឧបករណ៍ទូរស័ព្ទចល័តដោយប្រើ CSS និង media queries។",
          },
      ];
      const { title, description } = courses[index];
      rightPanel.querySelector('h2').textContent = title;
      rightPanel.querySelector('.description').textContent = description;
  });
});

