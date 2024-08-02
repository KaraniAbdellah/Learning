/*
    Date And Time
    - Date Constructor

    Static Methods
    - Date.now()

    - To Track Time You Need Starting Point
    - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
    - Why 1970 [829 Days To 136 Years]

    Search For
    - Year 2038 Problem in Computer Science.

    UTC : Coordinated Universal Time
        Depend Your Distance Between Grinitch Line
*/
var dateNow = new Date();
console.log(dateNow);

console.log(Date.now()); // time in millesecond 1722632673112 from 1 January 1, 1970

var seconds = Date.now() / 1000;
console.log(seconds); // time in seconds

var minutes = seconds / 60;
console.log(minutes); // 28710548.98345

var hours = minutes / 60;
console.log(hours); // 478509.1472497222

var days = hours / 24;
console.log(days); // 19937.881531921295

var years = days / 365;
console.log(years); // 54.62433412620497

