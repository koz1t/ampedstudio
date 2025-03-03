export function audioBtn() {
  const audioBtns = document.querySelectorAll('.audio-btn');
  let activeAudioBtn;
  let audioPlayer = new Audio(); // Создаем новый элемент audio
  const footer = document.querySelector('footer.footer');

  audioBtns.forEach(btn => {
    btn.classList.remove('audio-btn--active');
    btn.addEventListener('click', () => {
      // Удаляем существующий плеер
      document.querySelectorAll('.record-player').forEach(player => player.remove());

      if (activeAudioBtn == btn) {
        activeAudioBtn.classList.remove('audio-btn--active');
        activeAudioBtn = undefined;
        audioPlayer.pause(); // Останавливаем аудио, если кнопка деактивирована
      } else {
        activeAudioBtn?.classList.remove('audio-btn--active');
        activeAudioBtn = btn;
        activeAudioBtn.classList.add('audio-btn--active');
        audioPlayer.src = btn.getAttribute('data-src'); // Устанавливаем источник аудио
        audioPlayer.play(); // Воспроизводим аудио

        // Создаем блоки плеера
        const player = document.createElement('div');
        player.classList.add('record-player');

        const control = document.createElement('div');
        control.classList.add('record-player__control');

        const pauseBtn = document.createElement('div');
        pauseBtn.classList.add('record-player__pause');
        pauseBtn.addEventListener('click', () => {
          if (audioPlayer.paused) {
            audioPlayer.play();
            pauseBtn.classList.remove('record-player__pause--play');
          } else {
            audioPlayer.pause();
            pauseBtn.classList.add('record-player__pause--play');
          }
        });

        const resetBtn = document.createElement('div');
        resetBtn.classList.add('record-player__reset');
        resetBtn.addEventListener('click', () => {
          audioPlayer.currentTime = 0;
          audioPlayer.play();
          pauseBtn.classList.remove('record-player__pause--play');
        });

        const closeBtn = document.createElement('div');
        closeBtn.classList.add('record-player__close');
        closeBtn.addEventListener('click', () => {
          activeAudioBtn.classList.remove('audio-btn--active');
          activeAudioBtn = undefined;
          audioPlayer.pause();
          player.remove();
        });

        const preview = document.createElement('div');
        preview.classList.add('record-player__preview');
        preview.style.backgroundImage = `url(${btn.getAttribute('data-preview')})`; // Устанавливаем фоновое изображение

        control.appendChild(pauseBtn);
        control.appendChild(resetBtn);
        control.appendChild(closeBtn);

        player.appendChild(control);
        player.appendChild(preview);

        if (footer) {
          footer.after(player);
        }
      }
    });
  });
}
