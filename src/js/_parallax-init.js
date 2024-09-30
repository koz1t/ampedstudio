import SimpleParallax from "simple-parallax-js/vanilla";

export function parallax() {
  const images = document.querySelectorAll('.cards--grid-beautiful img');
  new SimpleParallax(images, {
    delay: 0.6,
    scale: 1.1,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  new SimpleParallax(document.querySelectorAll('.cards--masonry img'), {
    delay: 0.6,
    scale: 1.2,
    transition: 'cubic-bezier(0,0,0,1)'
  });

}