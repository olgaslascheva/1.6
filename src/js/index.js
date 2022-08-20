import '../scss/style.scss';

import './menu.js';
import './brands__show-more.js';

import Swiper, { Pagination } from 'swiper';

const swiper = document.querySelector('.swiper');
let mobileSwiper;

function initMobileSwiper() {
  if (window.innerWidth <= 600 && swiper.dataset.mobile == 'false') {
    mobileSwiper = new Swiper (swiper, {
      modules: [ Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1.25,
    });

    swiper.dataset.mobile = 'true';
  }

  if (window.innerWidth > 600) {
    swiper.dataset.mobile = 'false';

    mobileSwiper.destroy();
  }
}

initMobileSwiper();
