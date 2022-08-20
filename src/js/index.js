import '../scss/style.scss';

import './menu.js';

import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [ Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1.25,
});
