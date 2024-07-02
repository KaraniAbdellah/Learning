// Revise The last Leasson of The regex Quantifiers


// First Lesson
let name = "hello Abdellah abdellah Abdellah Abdddellllah Karrranu karani";
let regexName = /(Abdellah|Karani)/gi;

console.log(name.match(regexName));
console.log(name.match(/abdellah/g));
console.log(name.match(/df/gi));

// Second Lesson
var tld = "Com Net Org Info Code Io";
let regex_com = /[a-z]/gi;
console.log(tld.match(regex_com));
let nums = "1234579jk";
console.log(nums.match(/[0-9]/gi));
console.log(nums.match(/[^0-9]/gi));
let special_nums = "1@23)34_90~4#";
console.log(special_nums.match(/[^a-z0-9]/gi));
console.log(special_nums.match(/[123]@/gi));

// Trith Lesson
var email = 'O@@@g...com O@g.co_m O@g.net A@Y.com O-g.com o@s.org 1@1.com abdellah@gmail.com';
console.log(email.match(/\w@\w.com/gi));
console.log(email.match(/\d@\d/gi));
console.log(email.match(/\s/gi));
console.log(email.match(/\S/gi));

// Forth Lesson
let names = "spam Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo 3spam";
console.log(names.match(/\bspam/gi));
console.log(names.match(/spam\b/gi));
console.log(names.match(/\bspam\b/gi));
console.log(names.match(/\Bspam/gi));
console.log(names.match(/spam\B/gi));
console.log(names.match(/\Bspam\B/gi));




















