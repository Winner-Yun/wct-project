function toggleIcon(event) {
    event.preventDefault(); // Prevent default link behavior
    const icon = this.querySelector("i");
    icon.classList.toggle("bx-bookmark");
    icon.classList.toggle("bxs-bookmark-star");
  }
  
  // Add event listener to multiple elements
  [
    "iconToggle1",
    "iconToggle2",
    "iconToggle3",
    "iconToggle4",
    "iconToggle5",
  ].forEach((id) => {
    document.getElementById(id).addEventListener("click", toggleIcon);
  });
  
  
  /*card change page*/
  
  // Add an event listener to the card
  document.getElementById("card1").addEventListener("click", function () {
    window.location.href = "login_signUp.html"; // Redirect to your target page
  });
  
  // Add click event listener to each card
  document.getElementById('card2').addEventListener('click', function () {
      window.location.href = 'login_signUp.html'; // Redirect for Card 2
    });
    
    document.getElementById('card3').addEventListener('click', function () {
      window.location.href = 'login_signUp.html'; // Redirect for Card 3
    });
    
    document.getElementById('card4').addEventListener('click', function () {
      window.location.href = 'login_signUp.html'; // Redirect for Card 4
    });
    
    document.getElementById('card5').addEventListener('click', function () {
      window.location.href = 'login_signUp.html'; // Redirect for Card 5
    });
    
  