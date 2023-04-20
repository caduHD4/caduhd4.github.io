const countdownLabel = document.querySelector('.countdown-label');
const countdownItems = document.querySelectorAll('.countdown-value');
const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

// Define a data do evento (31 de maio de 2023 às 21h)
const eventDate = new Date('2023-05-31T21:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const diff = eventDate - currentDate;

  // Calcula o tempo restante em dias, horas, minutos e segundos
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  // Atualiza os valores do contador na tela
  countdownItems[0].textContent = days.toString().padStart(2, '0');
  countdownItems[1].textContent = hours.toString().padStart(2, '0');
  countdownItems[2].textContent = minutes.toString().padStart(2, '0');
  countdownItems[3].textContent = seconds.toString().padStart(2, '0');

  // Atualiza a mensagem do contador
  countdownLabel.textContent = 'Dias';
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = "<i class='fa fa-pause'></i>";
  } else {
    audio.pause();
    playButton.innerHTML = "<i class='fa fa-music'></i>";
  }
}

function startCountdown() {
  audio.play(); // reproduz a música
  updateCountdown(); // atualiza o contador
}


// Executa a função startCountdown assim que a página for carregada
document.addEventListener('DOMContentLoaded', startCountdown);

// Executa a função updateCountdown a cada segundo
setInterval(updateCountdown, 1000);
