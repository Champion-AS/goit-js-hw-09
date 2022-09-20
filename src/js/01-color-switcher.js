function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let start = btnStart.disabled;
let stop = btnStop.disabled;

stop = true;
let timerId;

btnStart.addEventListener('click', onStart);

function onStart() {
    start = true;
    stop = false;

    timerId = setInterval(() => {
        const color = getRandomHexColor();
        bodyEl.style.background = color;
}, 1000)
}

btnStop.addEventListener('click', onStop);

function onStop() {
  start = false;
  stop = true;
  clearInterval(timerId);
}
