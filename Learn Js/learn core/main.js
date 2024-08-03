// Date and Time
/*
Date And Time
    - getTime() => Number Of Milliseconds
    - getDate() => Day Of The Month
    - getFullYear()
    - getMonth() => Zero Based [ start with zero ]
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/
var dateNow = new Date();
var birthday = new Date("Jan 18, 2005");
var dateDiff = dateNow - birthday;

console.log(dateDiff); // in Milliseconds
console.log(dateDiff / 1000 / 60 / 60/ 24 / 365); // in year

console.log(dateNow.getTime()); // 1722687498143 from 1970
console.log(dateNow.getDate()); // 3
console.log(dateNow.getFullYear()); // 2024
console.log(dateNow.getMonth()); // 7 becuase is month start with 0 --> 11
console.log(dateNow.getDate()); // 3
console.log(dateNow.getHours()); // 13 -->  13:20:10
console.log(dateNow.getMinutes()); // 20 minute
console.log(dateNow.getSeconds()); // 10 second




