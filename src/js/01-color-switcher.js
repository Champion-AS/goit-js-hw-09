function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');


btnStop.disabled = true;
let timerId;

btnStart.addEventListener('click', onStart);

function onStart() {
    startBtn ()

    timerId = setInterval(() => {
        const color = getRandomHexColor();
        bodyEl.style.background = color;
}, 1000)
}

btnStop.addEventListener('click', onStop);

function onStop() {
 stopBtn()
  clearInterval(timerId);
}

function startBtn() {
  btnStart.disabled = true;
    btnStop.disabled = false;
}
function stopBtn() {
   btnStart.disabled = false;
  btnStop.disabled = true;
}