// Part 2
let myString = "AaBbcdefG123!234%^&*";
var atozSmall = /[A-Z]/g;
console.log(myString.match(atozSmall)); // ['A', 'B', 'G']
var NotAtozSmall = /[^a-z]/g;
console.log(myString.match(NotAtozSmall)); // Not a to z charcter
var a_And_b_And_c = /[abp]/g;
console.log(myString.match(a_And_b_And_c)); // ['a', 'b']
var not_a_And_b_And_c = /[^BbcdefG123!234%^&*]/g;
console.log(myString.match(not_a_And_b_And_c)); // ['A', 'a']
var allCapital_and_Small = /[a-z,A-Z]/g; // or [a-zA-Z]
console.log(myString.match(allCapital_and_Small)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
var numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials)); // ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
var specials = /[^0-9^a-zA-Z]/g;
console.log(myString.match(specials)); // ['!', '%', '&', '*']





