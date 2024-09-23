import '../scss/style.scss'

import { swiperInit } from './_swiper-init.js';
import { transferElements } from './_transfer-elements.js'; // 

document.addEventListener('DOMContentLoaded', function() {
  swiperInit();
  transferElements();
})