import '../scss/style.scss'

import { swiper } from './vendors/swiper-bundle.min.js'; // Swiper slider
import { swiperInit } from './_swiper-init.js'; // Swiper init
import { masonry } from './vendors/masonry.pkgd.min.js'; // Swiper slider

document.addEventListener('DOMContentLoaded', function() {
  swiper();
  swiperInit();
  masonry();
})