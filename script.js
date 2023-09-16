const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const hourEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const millisecondsEL = document.getElementById("milliseconds");

var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer = false;

startEl.addEventListener("click", () => {
    timer = true;
    stopWatch();
})

stopEl.addEventListener("click", () => {
    timer = false;
})

resetEl.addEventListener("click", () => {
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    hourEL.textContent = "0"+hours;
    minutesEL.textContent = "0"+minutes;
    secondsEL.textContent = "0"+seconds;
    millisecondsEL.textContent = "0"+milliseconds;
})
-
function stopWatch() {
    if (timer == true) {
        milliseconds = milliseconds + 1;
        millisecondsEL.textContent = milliseconds;
        if (milliseconds == 100) {
            seconds = seconds + 1;
            milliseconds = 0;
            secondsEL.textContent = seconds;
        }

        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
            minutesEL.textContent = minutes;
        }

        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
            hourEL.textContent = hours;
        }
        setTimeout("stopWatch()", 10);

    }

}




















// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;


// startEl.addEventListener("click", () => {
//     startTime = Date.now() - elapsedTime;

//     timerInterval = setInterval(() => {
//         elapsedTime = Date.now() - startTime;
//         timerEl.textContent = formatTime(elapsedTime);
//     }, 10)

//     function formatTime(elapsedTime) {
//         const miliseconds = Math.floor((elapsedTime % 1000) / 10);
//         const seconds = (Math.floor((elapsedTime % 1000) * 60) / 1000);
//         const minutes = (Math.floor((elapsedTime % 1000) * 60 * 60) / (1000 * 60));
//         const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

//         return (
//             (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
//             (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
//             (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
//             (miliseconds > 9 ? miliseconds : "0" + miliseconds)
//         );
//     }
// })

// stopEl.addEventListener("click", () => {
//     console.log("stop");
// })

// resetEl.addEventListener("click", () => {
//     console.log("reset");
// })