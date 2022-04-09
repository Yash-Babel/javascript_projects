var clr;
var hours, minutes, seconds;
var durationMain = 0;
var duration = 0;
function clickedStart() {
    console.log("In clickedStart");
    document.getElementById('reset-button').style.visibility = "hidden";
    document.getElementById('button').innerHTML = "Stop";
    document.getElementById('button').onclick = function () { clickedStop(); }
    let timeWhenStarted = new Date();
    let passedTime;

    clr = setInterval(() => {
        passedTime = new Date();

        duration = durationMain + (passedTime.getTime() - timeWhenStarted.getTime());
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        // milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

        //document.write(difference);

        // if (passedTime.getSeconds() - timeWhenStarted.getSeconds() >= 0 && passedTime.getMinutes() - timeWhenStarted.getMinutes() >= 0) {
        //     hours = passedTime.getHours() - timeWhenStarted.getHours();
        //     minutes = passedTime.getMinutes() - timeWhenStarted.getMinutes();
        //     seconds = passedTime.getSeconds() - timeWhenStarted.getSeconds();

        // } else if (passedTime.getSeconds() - timeWhenStarted.getSeconds() < 0 && passedTime.getMinutes() - timeWhenStarted.getMinutes() >= 0) {
        //     hours = passedTime.getHours() - timeWhenStarted.getHours();
        //     minutes = passedTime.getMinutes() - timeWhenStarted.getMinutes() - 1;
        //     seconds = passedTime.getSeconds() - timeWhenStarted.getSeconds() + 60;
        // } else if (passedTime.getSeconds() - timeWhenStarted.getSeconds() >= 0 && passedTime.getMinutes() - timeWhenStarted.getMinutes() < 0) {
        //     hours = passedTime.getHours() - timeWhenStarted.getHours() - 1;
        //     minutes = passedTime.getMinutes() - timeWhenStarted.getMinutes() + 60;
        //     seconds = passedTime.getSeconds() - timeWhenStarted.getSeconds();
        // } else {
        //     hours = passedTime.getHours() - timeWhenStarted.getHours() - 1;
        //     minutes = passedTime.getMinutes() - timeWhenStarted.getMinutes() + 59;
        //     seconds = passedTime.getSeconds() - timeWhenStarted.getSeconds() + 60;
        // }
        document.getElementById('rhime').innerHTML = "Passed Time : " + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    }, 100);
    // console.log("HEY");
    // clickedStop();

    //button.addEventListener('click', clickedStop);
    // document.getElementById('button').onclick = "clickedStop()";
    // console.log(document.getElementById('button').onclick);
}
function clickedStop() {
    console.log("In clickedStop");
    durationMain = duration;
    duration = 0;
    clearInterval(clr);
    document.getElementById('reset-button').style.visibility = "visible";
    //document.getElementById('rhime').innerHTML = "Passed Time : " + hours + ':' + minutes + ':' + seconds;
    document.getElementById('button').innerHTML = "Start";
    document.getElementById('button').onclick = function () { clickedStart(); }
    //button.addEventListener('click', clickedReset);
    // document.getElementById('button').onclick = "clickedReset()";
}
function clickedReset() {
    console.log("In clickedReset");
    document.getElementById('reset-button').style.visibility = "hidden";
    duration = 0;
    durationMain = 0;
    //button.addEventListener('click', clickedStart);
    //document.getElementById('button').onclick = function () { clickedStart(); }
    document.getElementById('rhime').innerHTML = "Press Start : 0:0:0:0"
}
// document.getElementById('button').onclick = "clickedStop()";
// console.log(document.getElementById('button').onclick);
