// Regular Expressions - Quantifiers Part 1

/*
  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

var mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
var mailRegex = /\w+@\w+.\w+/ig;
console.log(mails.match(mailRegex));

var nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
var numsRegx = /0\d*0/gi;
console.log(nums.match(numsRegx));

var urls = "https://google.com http://www.website.net web.com"; // http + https
var urlsRegex = /(https?:\/\/)?(www)?.\w+.\w+/gi;
console.log(urls.match(urlsRegex));





