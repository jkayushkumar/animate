window.onload = function () {
    GetClockTime();
}
function GetClockTime() {
    var localdate = new Date();
    var hours = localdate.getHours();
    var min = localdate.getMinutes();
    var sec = localdate.getSeconds();
    var hdeg = hours * 30;
    if (min > 15 && min < 30) {
        hdeg = hdeg + 5;
    }
    if (min >= 30 && min < 45) {
        hdeg = hdeg + 15;
    }
    if (min >= 45) {
        hdeg = hdeg + 20;
    }
    var mindeg = min * 6;
    var secdeg = sec * 6;
    document.getElementById("hour-hand").style = "transform: translateX(-50%) rotate(" + hdeg + "deg);"
    document.getElementById("minute-hand").style = "transform: translateX(-50%) rotate(" + mindeg + "deg);"
    document.getElementById("second-hand").style = "transform: translateX(-50%) rotate(" + secdeg + "deg);"
    setTimeout(GetClockTime, 1000);

}