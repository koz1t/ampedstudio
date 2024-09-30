import { Skroll } from './vendors/skroll.min.js';

export function scrollAnimationInit() {
  new Skroll()
    .add(".hero-section__title span",{
      animation:"growInRight",
      delay:100,
      duration:500,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    })
    .add(".highlights__item-inner",{
      animation:"fadeInDown",
      delay:300,
      duration:1000,
      triggerBottom:1,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".section__title:not(.section__title--big)",{
      animation:"fadeInDown",
      delay:80,
      duration:800
    })
    .add(".content-image:not(.content-image--reverse) .content-image__content",{
      animation:"slideInLeft",
      delay:80,
      duration:800
    })
    .add(".content-image:not(.content-image--reverse) .content-image__image",{
      animation:"slideInRight",
      delay:100,
      duration:800
    })
    .add(".content-image--reverse .content-image__content",{
      animation:"slideInRight",
      delay:80,
      duration:800
    })
    .add(".content-image--reverse .content-image__image",{
      animation:"slideInLeft",
      delay:100,
      duration:800
    })
    .add([".cards:not(.cards--stacked) .cards__item"],{
      animation:"fadeInDown",
      delay:80,
      duration:700,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".reviews__item",{
      animation:"growInLeft",
      delay:80,
      duration:500,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".previews__item:nth-child(1), .previews__item:nth-child(2)",{
      animation:"fadeInUp",
      delay:120,
      duration:600,
      wait:250
    })
    .add(".previews__item:nth-child(n+3)",{
      animation:"growInRight",
      delay:80,
      duration:500,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    })
    .init();
}