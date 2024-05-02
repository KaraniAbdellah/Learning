location.reload() // For Reload The Page
console.log("Hello\nWorld");
Output:
// Hello
// World

console.log("This\tis\ttabbed");
// Output:
// This    is    tabbed

console.log("Back\bSpace");
// Output:
// BacSpace

console.log("Carriage\rReturn");
// Output:
// Carriage
// Return

console.log("Form\fFeed");
// Output:
// Form
// Feed

console.log("This is a backslash: \\");
// Output:
// This is a backslash: \

console.log("He said, \"Hello!\"");
// Output:
// He said, "Hello!"

console.log("\u03A3"); // Greek capital letter Sigma
// Output:
// Σ

console.log("Vertical\vTab");
// Output:
// Vertical
//     Tab


console.log("Null\0Character");
// Output:
// Null�Character


console.log("\x41"); // Hexadecimal code for 'A'
// Output:
// A


console.log("\u{1F600}"); // Grinning Face Emoji
// Output:
// 😄


console.log("This is a very long string that \
spans multiple lines for better readability.");
// Output:
// This is a very long string that spans multiple lines for better readability.

console.log("This is a \cM control character."); // \cM represents a control character, often interpreted as a carriage return
// Output:
// This is a 
// control character.

console.log("\x48\x65\x6C\x6C\x6F"); // Hexadecimal codes for "Hello"
// Output:
// Hello


/* Start Functions */

// Function Join => Change Type To String
var array = ["Abdellah", "Karani"];
console.log(array.join("-")); // "-" => Separator Is Dash(-) => Abdellah-karani


// Function replace => Replace [Search Regular Expression] 
var str = "!Hello!";
var myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
console.log(str.replace("!", "o")); // oHello! => Take First Element 
console.log(str.replace(/!?/, "o")); // Replace Last Element => !Helloo
console.log(myString.replaceAll(",", " ")); // Replace , By Space


// In Loop If You Want To Return A Value One Time
// return console.log("Return This Value One Time");

// Function fill => For Fill The Array
console.log(Array(5).fill(8)); // [8, 8, 8, 8, 8]  => Number 8 Five Time

// Declare Variables With values In One Line
const [Beginning, ending] = [Math.min(...array), Math.max(...array)];
var [start, end] = [Math.min(...array), Math.max(...array)];

