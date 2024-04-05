let swiper = new Swiper(".addslide", {
  watchSlidesProgress: true,
  slidesPerView: 3.5,
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3.5,
    },
    500: {
      slidesPerView: 2.5,
    },
  },
});

// document.querySelector(".ham").addEventListener(click, function () {
//   const hamMenu = document.querySelector(".hammenu");
// });
