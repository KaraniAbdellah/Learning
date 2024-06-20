// Regular Expression --> Character Classes [ Part 1 ]
/*
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters. [^a-z, A-Z, 0-9 And Underscore]
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

var email = 'O@@@g...com O@g.co_m O@g.net A@Y.com O-g.com o@s.org 1@1.com abdellah@gmail.com';
var dot = /./g;
var word = /\w/g;
var special = /\W/g;
var digit = /\d/g;
var non_digit = /\D/g;
var white_space = /\s/g;
var no_white_space = /\S/g;
var valid_email = /\w@\w.(com|net)/g;

console.log(email.match(valid_email)); 



