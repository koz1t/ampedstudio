export function profile() {
  const profiles = document.querySelectorAll('.profile');
  profiles.forEach(profile => {
    const avatar = profile.querySelector('.profile__avatar');
    if (avatar) {
      const handleClickOutside = (e) => {
        if (!e.target.closest('.profile')) {
          profile.classList.remove('profile--active');
        }
      };

      avatar.addEventListener('click', () => {
        if (profile.classList.toggle('profile--active'))
          window.addEventListener('click', handleClickOutside);
        else
          window.removeEventListener('click', handleClickOutside);
      })
    }
  });
}