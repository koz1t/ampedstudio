export function tags() {
  const tags = document.querySelectorAll('.tags');
  tags.forEach(tag => {
    const tagSpoiler = tag.querySelector('.tags__spoiler');
    tagSpoiler?.addEventListener('click', () => {
      tagSpoiler.classList.toggle('tags__spoiler--active');
    })
  });
}