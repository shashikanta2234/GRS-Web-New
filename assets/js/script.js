/* Nav menu */
const nav_class = document.querySelector(".nav");
const showNavbar = () => {
  nav_class.classList.toggle("active");
};

const mobile_nav = document.querySelector(".nav-btn");
mobile_nav.addEventListener("click", () => showNavbar());

const nav_content = document.querySelector(".nav-content");
nav_content.addEventListener("mouseout", () => showNavbar());

function hide() {
  var abc = document.querySelector(".e-details");
  if (abc.style.opacity.value === 0) {
    abc.style.opacity.value = 1;
  } else {
    abc.style.opacity.value = 0;
  }
}
/* Slider */

$(document).ready(function () {
  $("#owl-carousel1").owlCarousel({
    loop: true,
    items: 5,
    center: true,
    margin: 5,
    autoplay: 2000,
    pagination: true,
    mergeFit: true,
    rewind: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.1,
      },
      500: {
        items: 1.5,
      },
      600:{
        items: 2,
      },
      680: {
        items: 3,
      },
      840: {
        items: 4.5,
      },
      1000: {
        items: 5,
      },
    },
  });
});

/* Events slider */

$(document).ready(function () {
  $("#owl-carousel2").owlCarousel({
    loop: true,
    items: 5,
    center: true,
    margin: 5,
    autoplay: 2000,
    pagination: true,
    mergeFit: true,
    rewind: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.2,
      },
      500: {
        items: 1.5,
      },
      600:{
        items:2,
      },
      640: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1199: {
        items: 5,
      },
    },
  });
});

/* Sponsors slider */

/* Slider */

$(document).ready(function () {
  $("#owl-carousel12").owlCarousel({
    loop: true,
    items: 7,
    center: true,
    margin: 5,
    autoplay: 2000,
    pagination: true,
    mergeFit: true,
    rewind: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 2,
      },
      500: {
        items: 3,
      },
      680: {
        items: 5,
      },
      1000: {
        items:6,
    },
  }
  });
});
