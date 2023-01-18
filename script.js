import Countdown from "./module/countDown.js";

const diasAteNatal = new Countdown("24 december 2023 23:59:59 GMT-0300");

const dias = document.querySelector("#dias");
const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

setInterval(() => {
  dias.innerText = diasAteNatal._total.days;
  horas.innerText = diasAteNatal._total.hours;
  minutos.innerText = diasAteNatal._total.minutes;
  segundos.innerText = diasAteNatal._total.seconds;
}, 1000);
