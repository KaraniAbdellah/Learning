// Regular Expression --> Ranges
/*
  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

var tld = "Com Net Org Info Code Io";
var regex_tld = /(org|info|Io)/ig; // without g he return just "org" 
console.log(tld.match(regex_tld));

var nums = "1234579jk";
var regex_nums = /[0-9]/gi;
var regex_not_nums = /[^0-5]/gi;
console.log(nums.match(regex_nums)); // ['1', '2', '3', '4', '5', '7', '9']
console.log(nums.match(regex_not_nums)); // ['7', '9', 'j', 'k']


var special_nums = "1@23)34_90~4#";
var regex_special_nums = /[^0-9]/gi;
console.log(special_nums.match(regex_special_nums)); // ['@', ')', '_', '~', '#']


var practice = "Os1 Os1 Os2 Os8 Os8Os";
var regex_practice = /os[5-9]os/gi;
console.log(practice.match(regex_practice)); // ['Os8Os']


