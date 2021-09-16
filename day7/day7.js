let times = document.getElementById("timer");
let hour = 0;
let min = 0;
let sec = 0;
let stopWatch;

function setting() {
    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);

    sec += 1;

    if (sec === 60) {
        min += 1;
        sec = 0;
    }

    if (min === 60) {
        hour += 1;
        min = 0;
        sec = 0;
    }

    if (hour < 10 || hour === 0) {
        hour = "0" + hour;
    }

    if (min < 10 || min === 0) {
        min = "0" + min;
    }
    if (sec < 10 || sec === 0) {
        sec = "0" + sec;
    }
    times.innerHTML = hour + ':' + min + ':' + sec;
    start();
}

function start() {
    stopWatch = setTimeout("setting()", 1000);

}
function stop() {
    clearTimeout(stopWatch);
}
function reset() {
    times.innerHTML = "00:00:00";
    clearTimeout(stopWatch);
    hour = 0;
    min = 0;
    sec = 0;
}