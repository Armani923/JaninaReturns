const countdownDate = new Date('March 20, 2024 09:00:00').getTime();

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const audio = document.getElementById('finalCountdownAudio');

let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

document.addEventListener('DOMContentLoaded', function () {
  audio.addEventListener('ended', function () {
    isPlaying = false;
  });
  
  const countdownContainer = document.querySelector('.countdown-container');
  countdownContainer.addEventListener('click', toggleAudio);
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, '0');
  daysElement.classList.add('animate');
  setTimeout(() => daysElement.classList.remove('animate'), 500);

  hoursElement.textContent = hours.toString().padStart(2, '0');
  hoursElement.classList.add('animate');
  setTimeout(() => hoursElement.classList.remove('animate'), 500);

  minutesElement.textContent = minutes.toString().padStart(2, '0');
  minutesElement.classList.add('animate');
  setTimeout(() => minutesElement.classList.remove('animate'), 500);

  secondsElement.textContent = seconds.toString().padStart(2, '0');
  secondsElement.classList.add('animate');
  setTimeout(() => secondsElement.classList.remove('animate'), 500);

  if (distance < 0) {
    clearInterval(countdownInterval);
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
