const timers = document.querySelector("#timer");

let timeSeconds = setInterval(() => {
  const el = +timers.textContent;
  if (el > 0) {
    timers.textContent = el - 1;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(timeSeconds);
  }
}, 1000);

const timerHigh = document.querySelector("#timerHigh");
let time = new Date("1970-01-01T" + timerHigh.textContent);
let second = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
let timeEnd = Date.now() + second * 1000;

let timer = setInterval(function () {
  let reset = timeEnd - Date.now();
  if (reset <= 0) {
    clearInterval(timer);
    alert("Вы победили в конкурсе!");
  } else {
    timerHigh.textContent = new Date(1970, 0, 0, 0, 0, reset / 1000).toLocaleTimeString();
  }
}, 1000);

