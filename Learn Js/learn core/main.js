
console.log(Array.from("Abdellah"));
console.log(
    Array.from("12345", function(number) {
        return +number + +number;
}));
console.log(Array.from("12345", (n) => +n + +n));

// Use Cases 1
var myArray = [1, 1, 1, 2, 3, 4];
var myNewArray = new Set(myArray);
console.log(myNewArray);
console.log(Array.from(myNewArray));
console.log([...new Set(myArray)]); // Future

// Uses Cases 2
function array_from() {
    console.log(arguments);
    return Array.from(arguments);
}
console.log(array_from("Abdellah", "karani", 30));


