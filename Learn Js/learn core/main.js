
// Start Revesing Array.form()

console.log(Array.from([1, 2, 3, 4]));
console.log(Array.from("1929283"));
console.log(Array.from(2333));

var myArray = [1, 2, 3, 3, 4, 5, 5, 6, 6];
var myNewArray = new Set(myArray);
console.log(Array.from(myNewArray));
console.log([...new Set(myArray)]);


console.log(Array.from("123", (n) => +n + +n));

function arg() {
    console.log(Array.from(arguments));
}
arg(122, 2, 3, 3, 3, 3);





