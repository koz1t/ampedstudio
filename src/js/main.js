import '../scss/style.scss'

import { burgerMenu } from './_burger-menu.js';
import { profile } from './_profile.js'; 
import { swiperInit } from './_swiper-init.js';
import { transferElements } from './_transfer-elements.js'; 
import { scrollAnimationInit } from './_scroll-animation-init.js'; 
import { parallax } from './_parallax-init.js'; 
import { audioHover } from './_audio-hover.js'; 

document.addEventListener('DOMContentLoaded', function() {
  burgerMenu();
  profile();
  swiperInit();
  transferElements();
  scrollAnimationInit();
  parallax();
  audioHover();
})