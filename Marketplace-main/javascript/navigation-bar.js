//DOM
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
//DOM Event Listener - Showing the menu when hamburger is clicked
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});