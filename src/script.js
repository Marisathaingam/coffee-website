
const navLinks = document.querySelectorAll (".nav-menu .nav-link");
const menuCloseButton = document.querySelector ("#menu-close-button");
const menuOpenButton = document.querySelector ("#menu-open-button");
const navMenu = document .querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
  // TOGGLE MOBILE MENU VISIBILLITY //
   document.body.classList.toggle("show-mobile-menu");
});

// CLOSE MENU WHEN CLOSE BUTTON IS CLICKED //
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());
// CLOSE MENU WHEN THE LINK IS CLICKED //
navLinks.forEach(link => {
  link.addEventListener("click",()=> menuOpenButton.click());
});
//INTIALIZE SWIPER //
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,


  // IF WE NEED PAGINATION //
  pagination: {
    el: '.swiper-pagination', 
    clickable:true,
    dynamicBullets: true,

  },

  // NAVIGATION ARROWS //
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // RESPONSIVE BRWAKPOINTS //
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2 
    },
    1024:{
      slidesPerView: 3
    } 
  }
});