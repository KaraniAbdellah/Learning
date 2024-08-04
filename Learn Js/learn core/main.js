// Set Date And Time
/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/
var dateNow = new Date();
console.log(dateNow);

// dateNow.setTime(1000);
console.log(dateNow); // Thu Jan 01 1970 00:00:01

// dateNow.setDate(10);
console.log(dateNow); // Sat Aug 10 2024 18:18:15 

// dateNow.setFullYear(2020, 11, 7);
console.log(dateNow); // Mon Dec 07 2020 18:21:17

// dateNow.setMonth(11, 3);
console.log(dateNow); // Tue Dec 03 2024 18:25:32

// dateNow.setHours(10, 9, 34);
console.log(dateNow); // Sun Aug 04 2024 10:09:34

// dateNow.setMinutes(23, 60);
console.log(dateNow); // Sun Aug 04 2024 18:24:00

dateNow.setSeconds(8, 100);
console.log(dateNow); // Sun Aug 04 2024 18:29:08






