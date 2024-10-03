export function burgerMenu() {
  const 
    burgerBtn = document.querySelector('.burger-btn'),
    header = document.querySelector('.header');
    
  if (burgerBtn && header) {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.burger-btn')) {
        if (!e.target.closest('.header__burger-menu') || e.target.closest('.header__burger-close')) {
          header.classList.remove('header--burger-active');
        }
      }
    };

    burgerBtn.addEventListener('click', () => {
      if (header.classList.toggle('header--burger-active'))
        window.addEventListener('click', handleClickOutside);
      else
        window.removeEventListener('click', handleClickOutside);
    })
  }
}