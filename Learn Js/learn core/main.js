/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/
// Spread With String => Expand String

console.log("Abdellah"); // Abdellah
console.log(..."Abdellah"); // A b d e l l a h
console.log([..."Abdellah"]); // ['A', 'b', 'd', 'e', 'l', 'l', 'a', 'h']

// Concatenate Arrays

var evenNums = [2, 4, 6, 8];
var oddNums = [1, 3, 5, 7];
console.log([...evenNums, ...oddNums]); // [2, 4, 6, 8, 1, 3, 5, 7]
console.log(evenNums.concat(oddNums)); // [2, 4, 6, 8, 1, 3, 5, 7]

// Copy Array

var copiedArray = [...evenNums];
console.log(copiedArray); // [2, 4, 6, 8]

// Push Inside Array

var allFriends = ["Abdelatif", "Muhamed", "Abdellah"];
var thisYearFriends = ["Badr", "Ayman"];
allFriends.push(...thisYearFriends);
console.log(allFriends);

// Use With Math Object

var myNums = [10, 20, 30, 40, 50];
console.log(Math.max(...myNums)); // 50

// Spread With Objects => Merge Objects
var objOne = {
    a: 1,
    b: 2,
};
var objTwo = {
    c: 3,
    d: 4,
};
console.log({...objOne, ...objTwo, e: 5}); // {a: 1, b: 2, c: 3, d: 4, e: 5}







