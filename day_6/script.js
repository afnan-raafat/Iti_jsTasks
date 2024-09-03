var timer;
var startTime;
var Time = 0;
var running = false;
 /// تلات ازرار ب تلات دوال 

 /// fun 1 
function start() {
    if (!running) {
        startTime = Date.now() - Time;
        timer = setInterval(updateTime, 1); 
        running = true;
        document.getElementById("startBtn").disabled = true;
        document.getElementById("stopBtn").disabled = false;
    }
}
/////////fun 2 /////// 
function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById("startBtn").disabled = false;
        document.getElementById("stopBtn").disabled = true;
    }
}
//////////fun 3 //////
function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00 h 00 m 00 s 000 ms" ;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
}

function updateTime() {
    Time = Date.now() - startTime;

    let hours = Math.floor(Time / 3600000);
    let minutes = Math.floor((Time % 3600000) / 60000);
    let seconds = Math.floor((Time % 60000) / 1000);
    let milliseconds = Time % 1000;
     
    document.getElementById("display").textContent = // شكل الكتابه الصحيح :)
        (hours < 10 ? "0" + hours : hours) + " h " +
        (minutes < 10 ? "0" + minutes : minutes) + " m " +
        (seconds < 10 ? "0" + seconds : seconds) + " s " +
        (milliseconds < 100 ? "0" + (milliseconds < 10 ? "0" + milliseconds : milliseconds) : milliseconds) + " ms";
}
