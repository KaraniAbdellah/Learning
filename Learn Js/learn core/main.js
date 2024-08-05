// Formatting Date And Time
/*
    new Date(timestamp)
    new Date(Date String)
    new Date(Numeric Values)

    Format
    - "Jan 18 2005"
    - "01/18/2005"
    - "2005-01-18" => ISO International Standard
    - "2005 01"
    - "2005"
    - "82" --> 1982
    - 2005, 9, 18, 2, 1, 0
    - 2005, 9, 18
    - "2005-01-25T06:01:00Z" --> Z [ Time Zone ]

    Date.parse("String") // Read Date From A String And Return Date In MillSecond
*/
var myBrithday = Date.parse("Jan 18 2005");
console.log(myBrithday); // 1106006400000

var date1 = new Date(myBrithday);
console.log(date1);

var date2 = new Date(2005, 1, 18, 14, 90, 90);
console.log(date2); // Fri Feb 18 2005 15:31:30

var date3 = new Date("2005-01-25T06:01:00Z");
console.log(date3);



