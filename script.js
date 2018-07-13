/* save the hamburger button in a variable */
var menuBtn = document.getElementById('menuButton');
var menuBtnClose = document.getElementById('menuCloseButton');

var mainMenu = document.getElementById('mainMenu');

/* attach a click listener to the hamburger button */
menuBtn.addEventListener("click", clickButton);
menuBtnClose.addEventListener("click", clickButton);

/* function called from the listener */
function clickButton() {
  // toggle the class .open-menu
  mainMenu.classList.toggle('open-menu');
}
