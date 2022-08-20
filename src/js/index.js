import '../scss/style.scss';

import './menu.js';

import Swiper, { Pagination } from 'swiper';

// const swiper = new Swiper('.swiper', {
//   modules: [ Pagination],
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   slidesPerView: 1.25,
// });

let swipers = document.querySelector('.swiper');
let mobileSwiper;

function initMobileSwiper() {
  if (window.innerWidth <= 600 && swipers.dataset.mobile == 'false') {
    mobileSwiper = new Swiper (swipers, {
      modules: [ Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1.25,
    });

    swipers.dataset.mobile = 'true';
  }

  if (window.innerWidth > 600) {
    swipers.dataset.mobile = 'false';

    mobileSwiper.destroy();
  }
}

initMobileSwiper();
