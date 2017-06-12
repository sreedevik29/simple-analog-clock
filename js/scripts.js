var HOURHAND = document.querySelector("hour");
var MINUTEHAND = document.queerySelector("minute");
var SECONDHAND = document.querySelector("second");

var hrPosition = 20;
var minPosition = 130;
var secPosition = 267;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
