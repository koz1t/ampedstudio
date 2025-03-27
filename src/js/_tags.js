export function tags() {
  const tags = document.querySelectorAll('.tags');
  tags.forEach(tag => {
    const tagSpoiler = tag.querySelector('.tags__spoiler');
    tagSpoiler?.addEventListener('click', () => {
      if (tagSpoiler.classList.toggle('tags__spoiler--active')) {
        if (!tagSpoiler.querySelector('span') && !tagSpoiler.classList.contains('tags__spoiler--icons'))
          tagSpoiler.innerHTML = 'Hidden';
      } else {
        if (!tagSpoiler.querySelector('span') && !tagSpoiler.classList.contains('tags__spoiler--icons'))
          tagSpoiler.innerHTML = 'More';
      }
    })
  });
}