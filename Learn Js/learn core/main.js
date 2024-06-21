// Regular Expressions - Character Classes Part 2
/*
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
    return true || false
*/

let names = "spam Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
var contain_spam = /\bspam\b/gi;
var end_spam = /spam\b/gi;
var begin_spam = /\bspam/gi;
var not_begin_or_end = /\Bspam\B/gi; // contain spam but does not begin or end with "spam"
console.log(names.match(begin_spam));
console.log(names.match(not_begin_or_end));

console.log(/\bspam/.test("Osama")); // false
console.log(/\bspam/.test("spam")); // true



