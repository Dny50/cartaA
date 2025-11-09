const botonMusica = document.getElementById('botonMusica');
const musica = document.getElementById('musica');
let reproduciendo = true;

botonMusica.addEventListener('click', () => {
  if (reproduciendo) {
    musica.pause();
    botonMusica.textContent = '🎵 Reproducir música';
  } else {
    musica.play();
    botonMusica.textContent = '🎵 Pausar música';
  }
  reproduciendo = !reproduciendo;
});
