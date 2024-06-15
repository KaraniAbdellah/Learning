// Regular Expression - Modifiers
/*
  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => All case insensitive
  g => global --> global match finds all matches (not only the first
  m => Multilines --> Search in lines (text)

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

var myString = "Hello Elzero Web School I Love elzero";
var regex = /elzero/;
console.log(myString.match(regex)); // elzero in index 31
var regex = /elzero/i;
console.log(myString.match(regex)); // elzero in index 6
var regex = /elzero/ig;
console.log(myString.match(regex)); // ['Elzero', 'elzero']
var regex = new RegExp("elzero", "gi");
console.log(myString.match(regex)); // ['Elzero', 'elzero']
var regex = new RegExp("elzeros", "gi");
console.log(myString.match(regex)); // null







