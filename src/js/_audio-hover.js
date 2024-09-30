export function audioHover() {
  document.body.click();
  const audioItems = document.querySelectorAll('[data-audio]');
  let currentAudio = null;

  audioItems.forEach(audioItem => {
    audioItem.addEventListener('mouseenter', function () {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      const audioSrc = audioItem.getAttribute('data-audio');
      currentAudio = new Audio(audioSrc);
      const playPromise = currentAudio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    });

    audioItem.addEventListener('mouseleave', function () {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    });
  });
}