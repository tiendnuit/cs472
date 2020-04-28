var clockTimer;
window.onload = function() {
    clockTimer = this.setInterval(tick, 1000);
    document.getElementById("stop-clock").onclick = clockTimerClicked;
};

const tick = function() {
    var today = new Date();

    ///Show full string
    var dateString = leadingZeroFormat(today.getFullYear()) + '-' + leadingZeroFormat(today.getMonth()+1) + '-' + leadingZeroFormat(today.getDate());
    var timeString = leadingZeroFormat(today.getHours()) + ":" + leadingZeroFormat(today.getMinutes()) + ":" + leadingZeroFormat(today.getSeconds());
    document.getElementById("date-string").innerHTML = dateString + " " + timeString;

    //Another way
    document.getElementById("year").innerHTML = leadingZeroFormat(today.getFullYear());
    document.getElementById("month").innerHTML = leadingZeroFormat(today.getMonth()+1);
    document.getElementById("day").innerHTML = leadingZeroFormat(today.getDate());
    document.getElementById("hour").innerHTML = leadingZeroFormat(today.getHours());
    document.getElementById("minute").innerHTML = leadingZeroFormat(today.getMinutes());
    document.getElementById("second").innerHTML = leadingZeroFormat(today.getSeconds());
};

const clockTimerClicked = function() {
    let stopButton = document.getElementById("stop-clock");
    let title = stopButton.title;
    if (title === "Stop") {
        clearInterval(clockTimer);
        stopButton.innerHTML = "Start";
        stopButton.title = "Start";
    } else if (title === "Start") {
        clockTimer = setInterval(tick, 1000);
        stopButton.innerHTML = "Stop";
        stopButton.title = "Stop";
    }
}


const leadingZeroFormat = function(n) {
    if (n < 10) return "0" + n;
    return n;
};

