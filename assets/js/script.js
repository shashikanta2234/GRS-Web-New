/* Nave menu */
const nav_class = document.querySelector(".nav");
const showNavbar = () => {
  nav_class.classList.toggle("active");
};

const mobile_nav = document.querySelector(".nav-btn");
mobile_nav.addEventListener("click", () => showNavbar());

const nav_content = document.querySelector(".nav-content");
nav_content.addEventListener("mouseout", () => showNavbar());

/* Owl Carousel */

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items:5,
    center:true,
    margin:5,
    autoplay:2000,
    pagination:true,
    mergeFit:true,
    rewind:true,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      680: {
        items: 3,
      },
      840: {
        items: 5,
      },
    },
  });
});
