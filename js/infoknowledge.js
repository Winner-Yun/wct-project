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
