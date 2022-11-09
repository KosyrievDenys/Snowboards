'use strict'
// import Swiper,{Navigation} from 'swiper/bundle';
//
// Swiper.use([Navigation]);

// const headerBurger = document.querySelector('.header-burger')
// headerBurger.onclick = () => {
//     const headerNav = document.querySelector('.header-nav');
//     headerBurger.classList.toggle('action-header-burger');
//     headerNav.classList.toggle('action-header-nav');
// }

const headerBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
headerBurger.addEventListener('click', function (e) {
  headerBurger.classList.toggle('active-header-burger');
  headerNav.classList.toggle('active-header-nav');
})

// const swiper = new Swiper('.intro-slider', {
//     loop: true,
//     autoplay: {
//         delay: 4000,
//     },
//     simulateTouch: false,
//     speed: 800,
// watchOverflow: true,
// });

new Swiper('.intro-swiper', {
  loop: true,
  // autoplay: {
  //   // delay: 4000,
  // },
  simulateTouch: false,
  speed: 800,
  watchOverflow: true,
});

new Swiper('.series-swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // slidesPerGroup: 1,
  // spaceBetween: 30,
  // keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //     pageUpDown: true,
  // },
  // mousewheel: {
  //     sensitivity: 1,
  //     eventsTarget: '.series-slider',
  // },
  // watchOverflow: true,
  // speed: 800,
});

