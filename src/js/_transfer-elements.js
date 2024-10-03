import TransferElements from 'transfer-elements';

export function transferElements() {
  // ============
  let elements = document.querySelectorAll('.content-image .section__title');
  elements.forEach(element => {
    new TransferElements({
      sourceElement: element,
      breakpoints: {
        900: {
          targetElement: element.closest('.section__container')
        }
      }
    });
  });
  
  let element = document.querySelector('.header__linguise');
  if (element) {
    new TransferElements({
      sourceElement: element,
      breakpoints: {
        900: {
          targetElement: document.querySelector('.header__burger-menu'),
          targetPosition: 2,
        }
      }
    });
  }
  // ============
}