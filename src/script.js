const menuOpenButton = document.querySelector ("#menu-open-button");
const menuCloseButton = document.querySelector ("#menu-close-button");
const navMenu = document .querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
  // TOGGLE MOBILE MENU VISIBILLITY //
   document.body.classList.toggle("show-mobile-menu");
});

// CLOSE MENU WHEN CLOSE BUTTON IS CLICKED //
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());
   