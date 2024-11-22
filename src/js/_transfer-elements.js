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
  
  let element = document.querySelector('.header:not(.header--v2) .header__linguise');
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

  element = document.querySelector('.header--v2 .header__linguise');
  if (element) {
    new TransferElements({
      sourceElement: element,
      breakpoints: {
        1279: {
          targetElement: document.querySelector('.header__burger-menu'),
          targetPosition: 2,
        }
      }
    });
  }
  // ============
}