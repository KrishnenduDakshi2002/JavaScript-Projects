const secondCount = document.getElementById("seconds");
const minuteCount = document.getElementById("minutes");
const hourCount = document.getElementById("hours");
const dayCount = document.getElementById("days");
// const monthCount = document.getElementById("months");

let date = document.getElementById('inp');

const newYear = " 1 jan 2023 00:00:01 GMT+0530";
function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  let miliseconds = newYearDate - currentDate;
  let totalSeconds = miliseconds / 1000;
  let seconds = Math.floor(miliseconds / 1000) % 60;
  let minutes = Math.floor(miliseconds / 60000) % 60;
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let days = Math.floor(totalSeconds / 86400);



  secondCount.innerHTML = formatTime(seconds);
  minuteCount.innerHTML = formatTime(minutes);
  hourCount.innerHTML = formatTime(hours);
  dayCount.innerHTML = formatTime(days);



}

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
}

// countDown();
setInterval(countDown, 1000);
