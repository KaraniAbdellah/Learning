// Start Learning JavaScript
/* Method Of Write The Js Code
Execution => line By Line Must Script Do In last Of Page
But In Future can Modifier By Some Function.
    ----- External By File 
    ----- Internal By Script
*/



//  Comments = CTRL + /
// Single Line Comment
/*
Multiple Line Comment
*/



// Output To Screen
/* 
- window.alert()
- document.write()
- console.log()
-- window is object have a lot of window like [alert, close,focus...]
-- document have a html file
-- console have a lot of propriety
Syntax
*/
window.alert("Hello From Js File"); // It is harmful
console.alert("Hello From Js File"); // Nice
document.write("Hello From Js File"); // Simple for console



// Console Methods
/*
- log
- error
- table
- Group
- groupCollapsed
- group-End
- repeat
- warn
- Trace => Use In Function
*/
console.log("log");
console.error("log");
console.table(["ahmed", "mohamed", "ali", "abdellah"]);

console.group("Name-Of-Group");
console.log("Content Of This Group");
console.groupCollapsed("Child-group");
console.log("Content Of This Sous Group");
console.groupEnd(); // End Of Child Group 
console.groupEnd(); // End OF Group
// Start A New Group
console.group("Name-Of-New-Group");
console.log("Content Of This Group");
console.groupEnd(); // End Of Of New Group

console.time();
var i;
for (var i = 0; i < 1000; i++) {
    var double = i * 2444;
}
console.timeEnd();  // default: 0.244140625 ms

var user = "abdellah karani";
console.warn(user); // Symbol Warning
console.info(user); // Symbol Info(i)
console.debug(user); // Not Stander In Google

var message = "Hello, world! \n";
var repeatedMessage = message.repeat(3); // Repeats The Message Three Time
document.write(repeatedMessage);
/*
WEB API => Responsible of Console & Some Other Propriety
---JS Language Use web API For Give many propriety like console
*/
/*
    Styling console 
- Directive %c => Put After Word
*/
console.log("Hello World %c From JS File", "color: red; font-size: 40px;");
console.log("%c Hello %c World", "color: red; font-size: 40px;", "color: blue;");




//  What Is A EcmaScript6 ?
/*
ES6 => responsible of standardization of information[Language] & communication systems
6 => is version
Modern Browser Support This Version but Old NO
Solution Of Old Browser => BABEL [transformation old code into new code]
With standers You Wil l Not Find Any Problem(syntax) When You Transfer To Other Language
*/




// Data Type Intro
/*
Type.of => An Operator Can Detected Type Of Data
- String => "mohamed"
- Number => 103
- Array => Object => [10, 58, "Ahmed"]
- Object
_ Boolean
*/
console.log(typeof ("mohamed"));
console.log(typeof "helLo string");
console.log(typeof 10 + 485);
console.log(typeof [20, 300]);
console.log(typeof ["ahmed", "mohamed"]);
console.log(typeof ["ahmed", 20, "mohamed", 20]);
console.log(typeof ({ name: "abdellah", age: 19, country: "Maroc" }));
console.log(typeof (true));
console.log(typeof (false));
console.log(typeof undefined);// TYPE => undefined
console.log(typeof null); // TYPE => Object




// Variables
/* 
- What is Variables ?
reserving a space in memory for stock a value[this value put it variables] 
- Why we us variables ?
for no repeat ...
- Declare A Variables And Use
- Syntax( Keywords | Variables name | Assignment Operator | Variables Value )
- Variables Without Var
Maybe But It Happen Overwrite In Other Problem
- Multiple Variables In The Same Line
Using Operator [ + ]
- Id And Global Variables Exit In Html file Considered an Variables & Can Use It
- Loosely Typed 
Every in Id Name vs Strongly Typed
Js Is A Loosely Typed => Do Not Need To Types The Variables 
---------------------
Declare > Use Variable [If Not Considered Undefined]
*/
var user = "ahmed";
age = 18;
console.log(x);
console.log(user + "   " + age);
console.log(user, "is", age);
console.log(hello); // This An Id In HTML File Named helle
hello.innerHTML = "Modifier hello" // For Modifier A Value In Js File
console.log(elzero.innerHTML);
console.log(typeof elzero); // object [Id Type]



// Identifiers
/* 
- Name Conventions And Rules
[space Between Var , Begin Whit Number, Special Character( - @ ~ "" & * %  )]
[Under_Shool, Dollar ] => No Problem
- Reserved Words
[var, if, else, function, for, white , do ]
-----------------------
- camelCase
Best Practice Say => First Letter Small & Other Capital 
*/
var _u$s$er = "ahmed";

var helloworld = "Best Practice";
var camelCase = "Best Practice";
var PascalCase = "Best Practice";

var Snake_case = "Best Practice";
var Cobra_Case = "Best Practice";
var dash_case = "Best Practice";




// Variables Type Declare
/* Var
- Redeclare (Yes)
- Access Before Declare (Undefined)
- Variables Scope Drama [Added To Window] (Yes)
- Block Or Function Scope
*/
var a = 10;
var a = 20;
var a = 10, b = 20, c = 30, d = 100; // In One Statement
console.log(a); // No problem

console.log(access); // Undefined
var access = 100; // This Variables Add To window

/* Let
- Redeclare (No)
- Access Before Declare (Error)
- Variables Scope Drama (No)
- Block Or Function Scope
*/
var a = 10;
var a = 10;
console.log(a); // Error This Variables already Declare

var access = 1000; // This Variables Does Not Add TO window
console.log(access); // Error

/* Const
- Redeclare (Yes)
- Access Before Declare (Error) 
- Variables Scope Drama (No)
- Block Or Function Scope
*/
const a = 10;
const a = 10;
console.log(a); // Error This Variables already Declare

const access = 1000; // This Variables Does Not Add TO window
console.log(access); // Error




// String syntax + character Escape Sequences
/*
    \ Escape + Line Continue => For scaping the character
    \n => New line
*/

console.log("hello abdellah 'karani'"); // hello abdellah 'karani'
console.log('hello abdellah "karani"'); // hello abdellah "karani"
// console.log("hello abdellah "karani"") // Error
console.log("hello abdellah \"karani\""); // hello abdellah "karani"
console.log('hello abdellah \'karani\''); // hello abdellah 'karani'
console.log('hello abdellah \\\\ karani '); // hello abdellah \\ karani
console.log("hello \
abdellah \
karani"); // Each Word Have A Line
console.log("hello abdellah \n karani"); /* hello abdellah
    karani 
*/



// Concatenation
/*
Using [ + ]
+ " Text " +
*/
var a = "We Love ";
var b = "javaScript";
document.write(a + " " + b); // We Love JavaScript
document.write(a, " ", b);
document.write(a, b);

var text1 = "Hello";
var text2 = "world!";
var result = text1.concat(" ", text2);
console.log(result); // hello world
document.getElementById("demo").innerHTML = result; // result is hello world [add a p whit demo id]



// Template Literals (Template Strings)
/*
ES6 Code
var => ${var-name}
console.log(`var or text`);
var card = ` var value `;
*/
var a = "We Love";
var b = "JavaScript";
var c = "And";
var d = "Programming";
console.log(a + " \"\" " + b + "\n" + c + " " + d); // Js Code
console.log(`${a} "" '' \\ ${b} 
${c} ${d}`); // ES6 code
console.log(`${10 / 2}`); // Calc

// Another Example

var title = "hello world";
var text = "paragraph";
var card = `
<div class="card">
    <div class="info">
        <h2>${title}</h2>
        <p>${text}</p>
    </div>
</div>
`;



// Arithmetic Operator 
/*
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation 
  % Modulus (Division Remainder)
  ++ Increment [Post / Pre]
  -- Decrement [Post / Pre]
*/
console.log(10 + 30);
console.log("abdellah" + 10); // abdellah10 => Concatenation Operator

console.log(10 - 20);
console.log(10 - "abdellah");  // NaN [Not A Number] => It Is calc
console.log(typeof NaN); // number

console.log(10 * 2);
console.log(10 / 34);

console.log(2 ** 3); // 2 * 2 * 2
console.log(10 % 4) // Remove 2

var num = 10;
num++; // Post Increment [print & Add ++]
++num; // Pre Increment [Add ++ & print]
console.log(num); // Use In Console For Best Experience



// Unary 
/*
  + Unary Plus [Return Number If It Is Not Number]
  - Unary Negation [Return Number If It Is Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - False
  - Tree 
*/
console.log(+"100"); // 100 Type Number
console.log(-"-100"); // 100 Type Number
console.log(+"Hello");
console.log(+"10.4");
console.log(-"10.4");
console.log(+"0xFF"); // 255
console.log(-null); // -0
console.log(-true) // -1
console.log(-false) // -0
// Another Method => Functions
console.log(Number("9285")); // number
console.log(String(53356)); // string
console.log(Array("Hello World")); // array
console.log(Boolean(34)); // true
console.log(Boolean(0)); // false
console.log(Object(4)); // object




// Type Coercion (Type Casting)
/*
   +
   -
   "" - 2
   false - true
*/
var a = "10";
var b = 20;
var c = true;

console.log(a + b); // 1020
console.log(a - b); // -10
console.log("" - 2); // -2
console.log(+""); // 0
console.log(false - true); // -1

console.log(a + c); // 10true => Concatenation
console.log(+a + c); // 11
console.log(a + b + c); // 1020true => Concatenation
console.log(+a + b + c); //  31



// Assignment Operator
var number = 10;
number += 10;  // number = number + 10
number -= 20;  // number = number - 20
number *= 20;  // number = number * 20
number /= 10   // number = number / 10
console.log(number);



// Number 
/*
- Double precision
- Syntactic Sugar "_"
- e
- **
- With Decimal
- Number + BigInt
- Number Min Value
- Number Max Value
*/

console.log(1000000);
console.log(1_000_000); // 1000000
console.log(1e6);
console.log(10 ** 6);
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE + 623234); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE - 414) // -414
console.log(Number.MIN_VALUE + 414) // +414



// Number Methods
/*
- To Dots To Call A Methods
- toString()       => String
- toLocalString()  => String [123,345,00] Depend Localization
- toFixed()        => String
- parseInt()       => Number
- parseFloat()     => Number
- isInteger() ES6  => True or False
- isNaN() ES6      => True or False
*/
console.log((100).toString());
console.log(100..toString());
console.log(100.1.toString()); // string
nbr = 102030
nbr = nbr.toLocaleString(); // 102,030 in arabic
nbr = nbr.toLocaleString("ar-EG"); // 102030 in arabic

console.log(10.555.toFixed(2)); // 10.55
console.log(10.556.toFixed(2)); // string => 10.56

console.log(Number("100 Abdellah")); // NaN
console.log(+"100 Abdellah"); // NaN
console.log(parseInt(" 100.222 Abdellah Ali ")); // 100
console.log(parseInt("Abdellah 100 ")); // NaN

console.log(parseFloat(" 100.222 Abdellah Ali ")); // 100.222
console.log(parseFloat("Abdellah 100.222 ")); // NaN

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger("Abdellah")); // false
console.log(Number.isInteger(100));// true

console.log(Number.isNaN(100)); // false
console.log(Number.isNaN("100")); // false
console.log(Number.isNaN("Abdellah")); // false
console.log(Number.isNaN("Abdellah" / 10)); // true
console.log(Number.isNaN("200" / "0")); // false => 200 / 0 => infinity



// Math Object
/*
- round()
- ceil()
- floor()
- min()
- max()
- pow()
- sqrt()
- random()
- trunc() [ES6]
- length
- eval()
-  Math.PI
- abs() => method returns the absolute value of a number
*/
console.log(Math.round(99.3)); // 99
console.log(Math.round(99.5)); // 100
console.log(Math.PI); // 3.141592653589793

console.log(Math.ceil(99.1)); // 100
console.log(Math.floor(99.9)) // 99 
console.log(Math.floor("99.5")); // 99

console.log(Math.min(100, 10, -2, 102, 129, -332)); // -332
console.log(Math.max(100, 10, -2, 102, 129, -332)); // 129
window.alert(Math.min(...array)); // Min In Array
window.alert(Math.max(...array)); // Max In Array

console.log(Math.pow(2, 3)); // 2**3
console.log(Math.random()); // random Number
console.log(Math.floor(Math.random() * 4) + 1); // 1 To 4
console.log(Math.abs(-7.23));  // 7.23

console.log(Math.trunc(99.5)); // Return The Integer Number If There Is Fracture
console.log(Math.sqrt(4)); // Return 2
console.log(`${num}`.length); // Calculate Number Of chiffre In A Number

console.log(eval(value1 + operator + value2)); // Like A Equation 


// String Methods Part 1
/*
- Access With Index(position Number Of letter[Number || string])
---Index Count With 0
- Access With ChartAt()
- length()
- trim()
- toUppercase()
- toLowerCase()
- Chain Methods
*/
var theName = "name";
var last_name = "  KARANi  ";
console.log(theName[1]); // a
console.log(theName[4]); // undefined
console.log(last_name[1]); // space

console.log(theName.charAt(1)); // a
console.log(theName.charAt(4)); // Noting Show

console.log(theName.length); // 4
console.log(last_name.length);// 8

console.log(last_name.trim()); // Remove Space && Return KARANI
console.log(theName.toUpperCase()); // NAME
console.log(last_name.toLowerCase()); // karani
console.log(last_name.trim().charAt(5).toUpperCase()); // I



// String Methods Part 2
/*
- IndexOf(Value [Mind], Start [opt] 0)
- lastIndexOf(Value [Mind], Start [opt] Length)
- slice(Start [Mind], End [Opt] No Include End)
- repeat(Times) ES6
- Split (Separator [Opt], Limit[Opt]);
--------------------------------------------------------------------------
- [Mind = Mandatory, Opt = optional, length = Number Of index]
- [Separator => The Pointer You Want To Cut Based On, Limit => Number Of Slicing]

- Slice 
--- Count With The Index [positive Sense]
--- Count With 1 [Negative Value]
--- Not Include The End Value
- trim() --> Remove Spaces ...
*/

var my_mentor = "Elzero Web School";

console.log(my_mentor.indexOf("Web")); // 7
console.log(my_mentor.indexOf("Web", 3)); // Start In 3 => return 7
console.log(my_mentor.indexOf("Web", 8)); // -1

console.log(my_mentor.indexOf("o")); // 5
console.log(my_mentor.lastIndexOf("o")); // 15
console.log(my_mentor.indexOf("o", 8)); // 14
console.log(my_mentor.lastIndexOf("o", 8)); // 5

console.log(my_mentor.slice(2, 4)); // Take The Begin But End No => Return "ze"
console.log(my_mentor.slice(-6, -3)); // We Count With The Index => Return "Sch"
console.log(my_mentor.slice(-10, -7)); // Web

console.log(my_mentor.repeat(4)); // repeat my_mentor Four Times

console.log(my_mentor.split()); // "Elzero Web School" Like Array
console.log(my_mentor.split("")); // Each Letter In The Array
console.log(my_mentor.split(" ")); // Cut In The Space => "Elzero" "Web" "School" 
console.log(my_mentor.split(" ", 2)); // Cut In The Space => "Elzero" "Web"  
console.log(my_mentor.split("", 6)); // "E" "l" "z" "e" "r" "o"
console.log("  Hello     ".trim()); // "Hello"


// String Methods Part 3
/*

- Substring (Start [Mind], End [Opt] No Including End)
--- Start > End => Will Swap 
--- Start < 0 => It Start With 0
--- Use Length To Get Last Character
- Substr(Start [Mind], Character To Extract)
--- Start >= Length = Return  ""
--- Negative Start From End
- Includes (Value [Mind], Start [Opt] Default 0) [ES6]
- StartsWith (Value [Mind], Start [Opt] Default 0) [ES6]
- endswith (Value [Mind], Length [Opt] Default Full Length) [ES6]
---------------------------------------------------------------------------
- Substring 
--- Count With The Index [positive Sense]
--- Count With 1 [Negative Value]
--- Not Include The End Value
--- Start > End => Will Swap [Change] 
---  Start < 0 => It Start With 0
------- In Substring There Is No Negative Value [Out Side]

- Substr
--- No Index => Count The Character
--- Start >= Length => Return  Empty String

- Includes
--- Includes => Does This String Exist
--- Return True || False
--- Count With Index

- StartsWith
--- StartsWith => Does This String Start With This Letter || String
--- Return True || False
--- Count With index 

- endswith
--- endswith => Does This String End With X string
--- Count With 1
*/

var a = "Elzero Web School";

console.log(a.length); // 17

console.log(a.substring(11)); // School
console.log(a.substring(7, 10)); // Web
console.log(a.substring(10, 7)); // Web
console.log(a.substring(-10)); // Elzero Web School => 0 To Length
console.log(a.substring(-10, 8)); // Elzero Web School => 0 To 8
console.log(a.substring(a.length - 1)); // l
console.log(a.substring(a.length - 6)); // School
console.log(a.substring(a.length - 10, a.length - 7)); // Web

console.log(a.substr(0, 6)); // Elzero
console.log(a.substr(20, 17)); // ""
console.log(a.substr(-5, 2)); // ch => 2 Not The End => It Is Number Of Character

console.log(a.includes("Web")); // true
console.log(a.includes("Web", 8)); // false

console.log(a.startsWith("e".toUpperCase())); // True
console.log(a.startsWith("o", 14)); // True

console.log(a.endsWith("l")); // True => Take Full Length
console.log(a.endsWith("o", 6)); // True => Elzero => End With o 
console.log(a.endsWith("ro", 6)); // True



// Comparison Operator
/*
    == Equal
    != Not Equal [can be Used In Condition => !(Condition)]

    === Identical 
    !== Not Identical

    > Large Then
    >= Large Then Or Equal

    < Smaller Then
    <= Smaller Then Or Equal

    !==   =>   Compare Type Not Value
    ==    =>   Compare Value
*/
console.log(10 == "10"); // Equal Compare Only Value
console.log(10 != "10"); // false

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // True
console.log(10 !== 10); // False

console.log("Abdellah" === "Karani"); // False
console.log(typeof "Abdellah" === typeof "Karani"); // True



// Logical Operator
/*
    ! Not
    && And
    || Or
*/
console.log(true); // True
console.log(!true); // False
console.log(10 === "10" && 10 > 8); // false
console.log(!(10 == "10") || 0 != "10"); // True



// Condition
/*
Control Flow
    - if
    - else if
    - else

    if (Condition) {
        // Code Block
    }
    -------------
    - If Condition = True => Do Not Write (== true) => Like Confirmation
*/

var price = 100;
var discount = false;
var discountAmount = 30;
var country = "KSA";
var first_name = "Abdellah Karani";

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Morocco") {
    price -= 40;
} else if (first_name === "Abdellah") {
    price -= 50;
} else {
    price -= 10;
}
console.log(price); // 90



// Nested If Condition
var price = 100;
var discount = false;
var discountAmount = 30;
var country = "Morocco";
var first_name = "Abdellah Karani";
var student = true;

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Morocco") {
    if (student === true) {
        price -= discountAmount + 30; // price = price - (discountAmount + 30) 
    }
    else {
        price -= 40;
    }
} else {
    price -= 10;
}
console.log(price); // 40



// Condition (Ternary) Operator
/*
Condition ? If True : If False
Condition ? If True : condition ? Block Code : condition  ? Block Code : If All false
*/

var theName = "Mona";
var theGender = "Female";
var theAge = 30;

// If Condition
if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Ternary Condition
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

var result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20 ?
    console.log("Small")
    : theAge >= 20 && theAge < 40
        ? console.log("Medium")
        : theAge >= 40 && theAge < 60
            ? console.log("Then 40 Little To 60")
            : theAge >= 60
                ? console.log("Then 60")
                : console.log("Unknown");




// Logical Or => Alternative Data
/*
Alternative Data => If Data Value :
-- Null + Undefined + Any Falsy Value
--Nullish Coalescing Operator ??
---- Null + Undefined

    || => Undefined + Null + Any False Value
    ?? => Undefined + null
*/

var price = 100;
var price_one = false;
var price_tow = 0;
var price_three = ""; // False Value
var price_four = null;

console.log(`The Price Is ${price_one || 200}`); // The Price Is 200
console.log(`The Price Is ${price_tow || 200}`); // The Price Is 200
console.log(`The Price Is ${price_three || 200}`); // The Price Is 200

console.log(`The Price Is ${price_one ?? 200}`); // The Price Is false
console.log(`The Price Is ${price_tow ?? 200}`); // The Price Is 0
console.log(`The Price Is ${price_three ?? 200}`); // The Price Is 
console.log(`The Price Is ${price_four ?? 200}`); // The Price Is 200



// Switch Statement
/*

switch (expression) {
    Case 1 : 
        // Code Block
        Break;
    Case 2 : 
        // Code Block
        Break;
    Default :
        // Code Block 
}

    - Expression => Variable Name
    - Default Ordering => Write Break If You Want To Out In First Line
    - Multiple Match
    - Switch Compare With === [Same Type & Value]

*/
var day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thursday");
        break;
    case 3:
    case 4:
        console.log("Wednesday"); // Multiple Match => Case 3 & 4 Have Same Action
        break;
    case 4:
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown Day");
}

switch (job) {
    // False
    case "Manager" || "Support":
        console.log(`Your Mony Is 8000`);
    // True
    case "Manager":
    case "Support":
        console.log(`Your Mony Is 6000"`);
}



// Array Big Introduction
/*
    - Create Array [Two Methods] => new Array + []
    - Access Arrays Elements
    - Nested Array
    - Change Arrays Elements
    - Check For Array Array.isArray(arr)
*/

var MyFriends = ["Ahmed", "Omar", "Mohamed", ["Marwan", "Ali"]];
var MyFriends = new Array("Ahmed", "Omar", "Mohamed", ["Marwan", "Ali"]);

console.log(`Hello ${MyFriends[2]}`); //  Hello Omar
console.log(MyFriends[1][2]); // a
console.log(MyFriends[3][1][2]); // MyFriends => ["Marwan", "Ali"] => "Ali" => i

MyFriends[1] = "Amine"; // Change Omar To Amine
MyFriends[3] = "Ali"; //  Change ["Marwan", "Ali"] To Ali
MyFriends[3] = ["Sameh", "Mohamed"]; //  Change ["Marwan", "Ali"] To ["Sameh", "Mohamed"]
MyFriends[3][0] = "Abdellah"; // Change "Sameh" To "Abdellah"

console.log(Array.isArray(MyFriends)); // True




// Arrays Methods => Length
/*
    - Length
    --- Index Start With 0 [0, 1, 2, 3]
    --- arr[arr.length] => Add An Element To Array Without Count
*/
var array = ["Mohamed", "Ahmed", "Abdellah"];

array[array.length] = "Amer"; // Always Last Element Is "Amer"
console.log(array);

array[array.length - 1] = "Marwan"; // Update Last Element
console.log(array);

array[7] = "Yousef";
console.log(array); // ["Mohamed","Ahmed" ,"Abdellah" ,"Marwan" ,empty x 3 ,"Yousef"]
console.log(array.length); // 8

array.length = 2;
console.log(array); // ["Mohamed", "Ahmed"]



// Array Methods => Add & Remove [No Chain]
/*
    - unshift("", "") Add Element To The First
    - push("","") Add Element To The End
    - shift() Remove First Element From Array
    - pop() Remove Last Element From Array
*/

var MyFriends = ["Mohamed", "Ali", "Ahmed", "Sayed"];
console.log(MyFriends);
MyFriends.unshift("Anoir", "Nabil"); // Add "Anoir" "Nabil" To First Array
MyFriends.push("Anoir", "Nabil");  // Add "Anoir" "Nabil" To Last Array

MyFriends.shift(); // Remove First Element From Array
MyFriends.pop();  // Remove Last Element From Array

first = MyFriends.shift();
MyFriends.pop().shift(); // Error
console.log(`First Name Is ${first}`); // First Name Is Nabil



// Array Methods => Searching Array
/*
    - indexOf (Search Element, From Index [Opt])
    --- If Have Same Value => Get First Value
    --- Count With Index

    - lastIndexOf (Search Element, From Index [Opt])
    --- Count With Length

    - includes (valueToFind, FromIndex [Opt]) ES7
*/
var array = ["Ahmed", "Mohamed", "Ahmed", "Alaa", "Ali", "Ahmed"];

console.log(array.indexOf("Ahmed", 3)); // 5
console.log(array.lastIndexOf("Ahmed")); // 5

console.log(array.lastIndexOf("Ahmed", -2)); // 2
console.log(array.lastIndexOf("Ahmed", -5)); // 0

console.log(array.includes("Ahmed", 5)); // true



// Methods Array => Sorting Array
/*
    - sort(Function [Opt]) => For String
    --- Deals With First Number && Chiffre Number
    - reverse
    --- Return Reversed Array
*/
var array = [10, "Abdellah", "Brahim", "90", 1000, 100, 20, "10", -20, -10, -100];

console.log(array);
console.log(array.sort());
console.log(array.reverse());
console.log(array.sort().reverse()); // With The Chain
console.log(array.sort()[0]); // After Sort We Take First Element => -20
console.log(array.sort((a, b) => a - b)); // Lowest To Hight
console.log(array.sort((a, b) => b - a)); // Lowest To Hight


// Methods Array => Slicing Array
/*
    - slice(Start [Opt], End [Opt] No Including End)
    --- slice() => All Array
    --- If Start Undefined => 0
    --- Negative Count From End With Length
    --- If End Undefined || > Indexes => Slice To The End Array.length
    --- Return New Array

    - Splice(Start [Mandatory], DeleteCount [Opt] [0 No Remove], The Item To Add [Opt])
    --- If Negative => Start From End
*/
var arr = ["Ahmed", "Ali", "Aya", "Abdellah", "Sameh"];

console.log(arr);
console.log(arr.slice(2, 4));  // ["Aya", "Abdellah"]
console.log(arr.slice(-2));    //["Abdellah", "Sameh"]
console.log(arr.slice(1, -3)); // ["Ali"]
console.log(arr.slice(-4, -1)); // ["Ali", "Aya", "Abdellah"]

arr.splice(0, 0, "Anoir"); // Add "Anoir" In Index 0
arr.splice(0, 1, "Anoir"); // Add "Anoir" Index 0 && Delete "Anoir"
arr.splice(1, 4, "Omar"); // Add "Omar" In Index 1 && Delete 4 Element
console.log(arr); // ['Anoir', 'Omar', 'Sameh']



// Methods Array => Joining Array
/*
    - concat(array, array) => Return A New Array
    - join(Separator) => Return A String
*/
var MyFriends = ["Abdellah", "Sayed", "Aya", "Gamal"];
var MyNewFriends = ["Samar", "Sameh"];
var MySchoolFriends = ["Hytham", "Shady"];

var allFriends = MyFriends.concat(MyNewFriends, MySchoolFriends, ["Abdellah"], "Amine", 1);
console.log(allFriends);
console.log(allFriends.join("|"));




// Loop And Concept Of Loop For
/*
    - For
        for ([1] [2] [3]) {
            // Blocks Of Code
        }
    -- We Can Do Not Write [1] [2] [3]
*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}


// Looping In Sequences
var array = [1, 2, -1, 3, 4, 5, "Abdellah", "Omar", "Aya", "Sayed", "Amira"];
var OnlyNames = [];
var x = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] === String(array[i])) { // typeof array[i] === "string"
        OnlyNames[x] = array[i];
        console.log("Hello");
        x += 1; // Do Not You Need To Use => OnlyNames.push(array[i])
    }
}
console.log(OnlyNames);


// Nested Loop
var Goals = ["Computer", "Glasses", "Mouse", "Driving"];
var mony = [1500, 200, 100, 3000];
var Time = [2023, 2024];

for (var i = 0; i < Goals.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${Goals[i]}`);
    console.log("#".repeat(15));
    console.log("Mony :");
    for (var j = 0; j < mony.length; j++) {
        console.log(`- ${mony[j]}Dh`);
    }
    console.log("Time :");
    for (var k = 0; k < Time.length; k++) {
        console.log(`- ${Time[k]}`);
    }
}


// Loop Control
/*
    - break => Stop The Loop With The Condition
    - Continue => Continue With A Condition
    - Label => Identifier Of Loop Can Control Break And Continue
*/
var goals = ["Computer", "Glasses", "Mouse", "Driving", 1, 2, 3, 4, 5, 6, 7];
var mony = [1500, 200, 100, 3000];
var Time = [2023, 2024];
for (var i = 0; i < goals.length; i++) {
    if (goals[i] === "Driving") {
        break;
    }
    console.log(goals[i]);
}
for (var i = 0; i < goals.length; i++) {
    if (goals[i] === Number(goals[i])) {
        continue;
    }
    console.log(goals[i]);
}
var goals = ["Computer", "Glasses", "Mouse", "Driving"];
mainLoop: for (var i = 0; i < goals.length; i++) {
    console.log(goals[i]);
    NestedLoop: for (var j = 0; j < mony.length; j++) {
        console.log(`- ${mony[j]} Dh`);
        if (mony[j] === 3000) {
            break mainLoop;
        }
    }
}


// Loop Advanced Example
var goals = ["Computer", "Glasses", "Mouse", "Driving"];
var i = 0;
for (; ;) {
    console.log(goals[i]);
    if (i === goals.length) break;
    i++;
}



// Goals Practice

var goals = ["Computer", "Glasses", "Mouse", "Driving", "OPP", "Algo", "DS", "DP", "API", "PB"];
var mony = [1500, 200, 100, 3000];
var show = 4;
document.write(`<h1>Show ${show} Goals</h1>`);

for (var i = 0; i < show; i++) {
    document.write(`<div>`);
    document.write(`<h2>[${i + 1}]${goals[i]}</h2>`);
    for (var j = 0; j < mony.length; j++) {
        document.write(`<p>${mony[j]}</p>`);
    }
    document.write(mony.join(" | "));
    document.write(`</div>`);
}



// Loop While 
/*
    initialization
    while (condition) {
        // Blocks
        Update Of The index [Finlay Expression]
    }
    If Condition = true => Infinity Loop [Must A Condition That Break The Loop] 
*/

var Goals = ["Computer", "Glaces", "Desktop", "Wifi", "Mouse", "KeyBoard"];
var index = 0;
while (index < Goals.length) {
    console.log(Goals[index]); // With 4 Undefined [index < 10]
    index++;
}
while (true) {
    console.log(index);
    if (index == 4) {
        break;
    }
    index++;
}


// Loop do While
/*
    do {
        // Block code
    } while (condition);
    Return Block Code And Verifier Condition
*/
var i = 0;

do {
    console.log(i);
    i++;
} while (false);




////////////////////////////////////////////////////////
// Function => Work In DRY(Do Not Repeat Your Self) Principe
/*
    - What Is Function ?
    - User-Defined vs Built In Function
    - Syntax + Basic Usage
    - Example For Real Life
    - Parameter + Argument
    - Practical Example
*/
console.log(typeof console.log); // => Function
function sayHello(userName) { // UserName is Parameter
    console.log(`Hello ${userName}`);
}
sayHello("Abdellah"); // "Abdellah" is Argument



// Function 
/*
    - Return 
    - AutoMatic Semicolon Insertion [No Line Terminator Allowed]
    - Interrupting
*/

function calc(start, end) {
    // return;
    // num1 + num2; => ASI
    for (var i = start; i <= end; i++) {
        if (i === 15) {
            return `Interrupting`;
        }
        console.log(i);
    }
}
calc(10, 20);



// Function Advanced Examples
function sayHello(userName, age) {
    if (age < 20) {
        console.log("The Application Is Not Suitable For You");
    } else {
        console.log(`Hello ${userName} Your Age ${age}`);
    }
}
sayHello("Abdellah", 18);
sayHello("Sayed", 30);
sayHello("Sameh", 23);
function generateYear(start, end, exclude) {
    for (var i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}
generateYear(2005, 2023, 2020);



// Function Default Parameter
/*
    - Function Default Parameter [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES 6 Method
    --- This Method Work If Variable Undefined
*/
function sayHello(userName, age = "Unknown") {
    // With ES6
    // With Condition
    if (age === undefined) {
        age = "Unknown";
    }
    // With Logical Or
    age = age || "Unknown";
    return `Hello ${userName} Your Age Is ${age}`; // Hello Abdellah Your Age Is Unknown
}
console.log(sayHello("Abdellah"));


// Function 
/*
    - Rest Parameter => Return Array
    - Only One Allowed => One Rest Parameter [...VarName]
    - Must be Element => Soon
*/

function calc(...numbers) {
    console.log(Array.isArray(numbers)); // => true
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
    // return numbers; => [10, 20, 30, 40, 50]
}
console.log(calc(10, 20, 30, 40, 50));


// Function Advanced Practice
/*
    - Parameter
    - Default 
    - Reset
    - Loop
    - Condition
*/
function ShowInfo(user = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${user}</h2>`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Hour Rate: $${rate}</p>`);
    if (show == "Yes") {
        if (skills.length != 0)
            document.write(`<p>Skills : ${skills.join(" | ")}</p>`);
        else
            document.write(`Skills : No Skills`);
    }
    else {
        document.write(`Skills Is Heading`);
    }
    document.write(`</div>`);
}
ShowInfo("Abdellah", 20, 20, "Yes", "Html", "Css", "Js");



// Function
/*
    - Anonymous Function
    --- Built When Interpreter Access In Line That Exit The Function

    - Calling Function vs Anonymous Function
    --- Use The Variable And Function Without Name

    - Argument Of Anonymous Function 
    --- Is Not Defined Use For Detected The Error

    - Task Without Name 
    ---- Use Anonymous Function If Function Made For Some Things Specifier

    - Example About Anonymous Function
    - SteTimeout => Anonymous Function
*/
var Calculator = function (num1, num2) {
    return num1 + num2;
}
console.log(Calculator(20, 30));


var Calculator = function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(20, 30)); // calc Is Not Defined => Error


document.getElementById("show").onclick = function () {
    document.write("<p>Hello Abdellah Karani How Are You ? </p>");
    console.log(Calculator(10, 20)); // return 30
}
function ask() {
    document.write("<p>Hello Abdellah Karani How Are You ? </p>");
}
document.getElementById("show").onclick = ask;


setTimeout(function () {
    console.log("Good");
}, 2000); // After Two Second Print "Good"



// Function
/*
    - Function Inside Function
    - Return Function
*/
// Example One
function sayHello(firstName, lastName) {
    let message = `Hello`
    // Nested Function
    function concatMsg() {
        message = `${message} ${firstName} ${lastName}`
    }
    concatMsg();
    return message;
}
console.log(sayHello("Abdellah", "Karani"));

// Example Two
function sayHello(firstName, lastName) {
    let message = `Hello`
    // Nested Function
    function concatMsg() {
        return `${message} ${firstName} ${lastName}`
    }
    return concatMsg();
}
console.log(sayHello("Abdellah", "Karani"));

// Example Three
function sayHello(firstName, lastName) {
    let message = `Hello`;
    // Nested Function
    function fullName() {
        return `${firstName} ${lastName}`;
    }
    function concatMsg() {
        return `${message} ${fullName()}`
    }
    return concatMsg();
}
console.log(sayHello("Abdellah", "Karani"));


// Function 
/*
    - Arrow Function => No Parameters
    -- Regular vs Arrow [Param vs No Param] 
    -- Multiples Lines 
    -- One Can Remove [return, {}, ()]
    -- Have Parameter => () if Not _
*/
// Regular Function
var print = function () {
    return 10;
}
console.log(print()); // 10

//  Arrow Function => Multiples Line
var print = () => {
    var x = 10;
    var y = 20;
    return x + y;
};
console.log(print()); // 30

// Arrow Function => One Line
var print = _ => 10;  // If Hove Not Any Parameter
console.log(print()); // 10

var print = num => num;  // If We Have A Parameter One Parameter
console.log(print(120)); // 120 

var print = (num1, num2) => num1 + num2;  // If We Have A Parameter
console.log(print(-1, 1)); // 0


// Scope
/*
    - Global And Local
    --- function Make A Scope For Local Variable
    --- If Variable Does Not Exit In Function Go To Global And Get It
    --- Scope In Local Can Access To Scope Global But Not Inverse
*/
var a = 1;
var b = 2;

function print() {
    console.log(`Function - From Local ${a} ${b}`); // a And b Undefined => Initialization 
    var a = 10;
    var b = 20;
}
console.log(`Function - From Global ${a} ${b}`);
print();

function print() {
    var a = 10;
    var b = 20;
    console.log(`Function - From Local ${a} ${b}`); // Function - From Local 10 20
}
print();

function print() {
    console.log(`Function - From Local ${a} ${b}`); // Function - From Local 1 2
}
print();


// Scope 
/*
    - Block Scope [If, Switch, For] 
    --- If Want To Do The Scope Of If Use let or const
    --- Global Accessible From Every Where
*/

var x = 10;
if (10 === 10) {
    var x = 50;
    console.log(x); // 50
}
console.log(`From Local Scope ${x}`); // 50

var x = 10;
if (10 === 10) {
    let x = 50;
}
console.log(`From Global Scope ${x}`); // 10

if (10 === 10) {
    console.log(x);  // Cannot access 'x' before initialization
    let x = 10;
}


// Scope
/*
    Scope 
    - Lexical Scope [Function In Function]
    --- Child Function Access To Parent Function
    --- Can Not Access To Local Scope

    Search
    - Execution Context
    - Lexical Environment
*/
var y = 10;
function parent() {
    var x = 1;
    console.log(`Parent Function ${y}`); // 10
    console.log(`Parent Function ${x}`); // 1
    // console.log(`Parent Function ${z}`); // z is not defined
    function child() {
        var z = 100;
        console.log(`Child Function ${x}`); // 1
        // console.log(`Child Function ${w}`); // w is not defined
        function grand() {
            var w = 10;
            console.log(`grand Function ${z}`); // 100
            console.log(`grand Function ${x}`); // 1
            console.log(`grand Function ${y}`); // 10
        }
        grand();
    }
    function grandD() {
        // console.log(`GrandD Function ${z}`); // z is not defined
    }
    child();
    grandD();
}
parent();
/////////////////////// 70 
// Higher Order Functions Map
/*
    ---> Is Function That Accepts Function As A Parameter
    - Map 
    --- Method Create A Now Array
    --- Do An Operation For Each Element 

    - Syntax Map 
    map (CallBackFunction (Element, index, Array) { // block code }, thisArg)
    --- Element => The Current Element Being Processed In The Array
    --- index => The Index Of The Element Being Processed In The Array
    --- Array => The Current Array 

    - Notes
    --- Map Return An Array

    - Examples
    --- Anonymous Function
    --- Named Functions
*/
var array = [1, 2, 3, 4, 5, 6];
var newArray = [];
for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] + array[i]);
}
console.log(newArray);
// With Some Idea Of Function
var addSelf = array.map(function (element, index, array) {
    console.log(`Current Element => ${element}`);
    console.log(`Current Index => ${index}`);
    console.log(`Array => ${array}`);
    return element + element;
}, 10);
console.log(addSelf); // [2, 4, 6, 8, 10, 12]

// With Built Function 
var addSelf = array.map((a) => a + a);
console.log(addSelf);
// With Function 
function Additions(element) {
    return element + element;
}
var Add = array.map(Additions);
console.log(Add); // [2, 4, 6, 8, 10, 12]



// Map Practice
/*
    Map 
    - Swap Cases
    - Inverted Numbers
    - Ignore Numbers Value
*/
// map(CallBackFunction(Element, index, Array) { // block code }, thisArg)
var swappingCases = "elZERO"; // ELzero
var invertedNumber = [1, -10, -10, 15, 100, -30]; // Inverse The Singe
var ignoreNumbers = "Elz123er4o"; // Remove The Number

var swp = swappingCases.split("").map(function (a) {
    return a == a.toLowerCase() ? a.toUpperCase() : a.toLowerCase();
}, 10).join("");
console.log(swp);
// With Arrow Function
var swp = swappingCases.split("").map((a) =>
    a == a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()).join("");
console.log(swp);

var inv = invertedNumber.map(function (a) {
    return -a;
}, 10);
console.log(inv);
// With Arrow Function 
var inv = () => {
    return invertedNumber.map((a) => -a);
}
console.log(inv());

var ign = ignoreNumbers.split("").map(function (a) {
    return isNaN(a) == true ? a : "";
}, 10).join("");
console.log(ign);
// With Arrow Function 
var ign = () => {
    return ignoreNumbers.split("").map((a) => isNaN(a) == true ? a : "").join("");
}
console.log(ign());



// Filter
/*
    - Filter
    --- Method Create A New Array => Work With Condition
    --- Each Element Tested if Win He Passed [If True]

    - Syntax Filter
    filter(CallBackFunction(Element, index, Array) { // block code }, thisArg)
    --- Element => The Current Element Being Processed In The Array
    --- index => The Index Of The Element Being Processed In The Array
    --- Array => The Current Array 
*/

// Get Friends With Name Starts With A 
var friends = ["Ahmed", "Samer", "Sameh", "Abdellah", "Osama"];
var fr = friends.filter(function (a) {
    return a.startsWith("A") ? true : false;
});
console.log(fr); // ['Ahmed', 'Abdellah']

// Get The Even Number
var numbers = [10, 11, 4, 12, 8, 23, 0];
var even = numbers.filter(function (a) {
    return a % 2 == 0 && a != 0; //  [10, 4, 12, 8]
});
console.log(even);



// Filter Practice
/*
    - Filter Longest Word By Number
*/
// Filter Word More Than 4 Character
var sentence = "I Love Foood Code To Playing So Much"
var sen = () => {
    return sentence.split(" ").filter((a) => {
        return a.length <= 4 ? a : "";
    }).join(" ");
};
console.log(sen());  //  ['I', 'Love', 'Code', 'To', 'So', 'Much']

// Filter Strings + Multiply
var mix = "A13BS2ZX";
var mx = () => {
    return mix.split("").filter((a) => isNaN(a) == false).map((ele) => ele * ele).join("");
};
console.log(mx()); // 194



// Reduce
/*
    - Method Execute A Reducer Function On Each Element On The Array 
    - Resulting In A Single Output Value

    - Syntax 
    reduce(callFunction (Accumulator, Current Value, Current Index,Src Array){},initialValue)
    - Accumulator
    - Current Value => The Current Will Being Processed in The Array
    - Index => The Index Of Current Element Being Proceed In The Array
        - Start From 0 If Initial Provided
        - Others Wise Start From Index 1
    - InitialValue => The Value That Accumulator Start With It
*/
var num = [10, 20, 30, 50];

var n = num.reduce(function (acc, value, index, src) {
    console.log(`Accumulator Is ${acc}`); // 10 30 60 
    console.log(`Value Is ${value}`); // 20 30 50 
    console.log(`index Is ${index}`); // 1 2 3 
    console.log(`Source Array Is ${src}`); // [10, 20, 30, 50]
    return acc + value; // 110
}, 5); // With InitialValue Will Given 115
console.log(n);



// Practice Reduce
/*
    - Longest Word
    - Remove Character
 */
var theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
var big = () => {
    return theBiggest.reduce((acc, value) => {
        return acc.length > value.length ? acc : value;
    });
}
console.log(big()); // Propaganda

var removeChar = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
var remove = () => {
    return removeChar.filter((a) => a == "@" ? "" : a).reduce((acc, value) => acc + value);
}
console.log(remove());



// forEach 
/*
    - Method For Execute A Provide Function Once For Each Array Element

    Syntax
    forEach(CallBackFunction (Element, Index, Array) { }, ThisArg)

    Note 
    - Does Not Return Anything
    - Break While Not Break The Loop
*/

var all = document.querySelectorAll("ul li");
var allDivs = document.querySelectorAll(".content div");

all.forEach(function (ele, index, array) {
    ele.onclick = function () {
        all.forEach(function (ele, array, index) {
            // Remove Active CLass From All Element
            ele.classList.remove("active");
        });
        // Add Class Active To This Element
        this.classList.add("active");
        // Hide All Divs
        allDivs.forEach(function (ele, index, array) {
            ele.style.display = "none";
        })
    }
})



// flat() Method
/*
    - Convert n Array Top One Array
*/
var myArr = [[1, 2], [3, 4], [5, 6]];
var newArr = myArr.flat(); // [1, 2, 3, 4, 5, 6]



////////////////////////////////////////////////////////
// Object
/*
    - Intro Whats Is Objects
    --- Object Has A Proprieties And Methods

    - Testing Window Objects
    --- Typeof Window => Object

    - Proprieties && Methods
    --- Proprieties Just For return SomeThings
    --- Methods Do A Task

    - Accessing Objects
*/
console.log(typeof window); // object
console.log(typeof window.location); // object [Location is Nested]
console.log(typeof window.location.href); // string [href is Proprieties]
console.log(typeof window.location.assign("http://google.com")); // string [href is Method]

var user = {
    // Proprieties
    theName: "Abdellah",
    theAge: 19,
    "country": "", // Propriety Is valid
    // Methods
    sayHello: function () {
        return `Hello`;
    }
};
console.log(user.theName); // Abdellah
console.log(user.theAge);   // 19
console.log(user.country);   // 
console.log(user.sayHello()); // Hello



// Object
/*
    - Big Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Propriety Name
*/
var myVar = "country";
var user = {
    theName: "Abdellah",
    "country": "Maroc", // Propriety Is valid
    The, Age: 19,
}
console.log(user["country"]); // Maroc => Dot Notation 
console.log(user["The Age"]); // 19 => Bracket Notation
// console.log(use."country"); // Error => country is not defined

console.log(user.country); // Maroc
console.log(user.myVar); // undefined => Because Of Dot Notation
console.log(user[myVar]); // Maroc



// Nested Object And Trainings
add = {
    one: "Rabat",
    two: "Casablanca",
    three: "Marrakech"
}
addresses = {
    Ksa: "Riyadh",
    maroc: add,
}
var available = true;
user = {
    name: "Abdellah",
    age: 19,
    skills: ["Html", "CSS", "JS"],
    available: false,
    country: addresses,
    checkAva: function () {
        if (user.available == true) { // available == true => Undefined [if var Does not exit]
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    }
}
console.log(user.name); // Abdellah
console.log(user.age); // 19
console.log(user.skills); // ['Html', 'CSS', 'JS']
console.log(user.skills.join(" | ")); // Html | CSS | JS
console.log(user.skills[2]); // JS

console.log(user.country.Ksa); // Riyadh
console.log(user.country.maroc.one); // Rabat
console.log(user.country["maroc"].one); // Rabat
console.log(user["country"]["maroc"].one); // Rabat
console.log(user["country"]["maroc"]["one"]); // Rabat

console.log(user.available); // false
console.log(user.checkAva()); // Not Free



// Create Object With New Keyword
/*
    - Create With New Keyword
    --- new Object()
    - add an element in the object
*/
var user = {
    age: 10,
}
var admin = new Object({
    age: 10,
});
admin.country = "Maroc";
admin.name = "Abdellah"; // Add
admin.sayHello = function () {
    return `Hello Admin`;
}
console.log(admin.age);   // 10
console.log(admin.country);  // Maroc
console.log(admin.name);  // Abdellah



// this KeyWord
/*
    Function This Keyword
    - this Introduction
    - this inside object Inside Method
    ---- When a Function Called as a Method On Objects 
    ---- this set to the Object That Called This Method
    - Global Object 
    - Function Context 

    Search 
    - Strict Mode
*/

console.log(this); // window
console.log(this == window) // true

myVar = 100;
console.log(this.myVar); // 100
console.log(window.myVar); // 100

function sayHello() {
    console.log(this); // window
    return this;
};
sayHello();
console.log(sayHello() == window); // true

document.getElementById("cl").onclick = function () {
    console.log(this); // this For Owner [button]
}

var user = new Object({
    age: 19,
    ageInDays: function () {
        console.log(this); // {age: 19, ageInDays: ƒ}
        return this.age * 365;
    }
});
console.log(user.age); // 19
console.log(user.ageInDays()); // 6935



// Create Object With Create Method
/*
    - Create A Object Like A Prototype Of Another Object
    - Syntax
    --- var Obj = Object.create(ObjectName);
*/
var user = {
    age: 19,
    doubleAge: function () {
        return this.age * 2; // With this => age Search In Object 
    }
}
var copyObj = Object.create(user);
copyObj.age = 20; // No Update For User But If You Write [this.age * 2]
copyObj.nbr = 100; // Create A Propriety in copyObj
console.log(copyObj);
console.log(copyObj.age); // 20
console.log(copyObj.doubleAge()); // 19 * 2 = 38
console.log(copyObj.doubleAge()); // 20 * 2 = 40 [After Writing this.age * 2 in User Object]



// Create Object With Assign Method
/*
    New Method For Create Object
    Syntax
    - Object.assign(target, source)
    --- target => The target object to copy to
    --- source => Can Be An Objects
    --- Two Propriety In The Same Name => Take First Prop
*/
var obj1 = {
    prop1: 1,
    methd1: function () {
        return this.prop1;
    },
}
var obj2 = {
    prop2: 2,
    methd2: function () {
        return this.prop2;
    },
}
var targetObj = {
    prop3: "Hello",
    prop4: "World!",
}
var FinlayObj = Object.assign(targetObj, obj1, obj2);
FinlayObj.prop0 = 0; // Add Propriety
FinlayObj.prop2 = 200; // Update Propriety
console.log(FinlayObj.prop2); // 2
console.log(FinlayObj);

var newObject = Object.assign({}, obj1, { age: 20, name: "Abdellah" });
console.log(newObject);



// Length Of Object
var objectLength = {
    name: "Abdellah",
    age: 18,
    sayHello: function () {
        return "Hello"
    },
}
console.log(Object.keys(myFavGames)); // ['name', 'age', 'satHello']
var objectLength = Object.keys(myFavGames).length; // 3
if (Object.objectLength.hasOwn(), age) {
    console.log(true);
}
// hasOwnProperty == hasOwn() [Recommend]


// Use Function like Object
function Person(fname, lname, age, country, job) {
    var firstName = fname;
    var lastName = lname;
    var country = country;
    var myJob = job;

    this.info = (firstName) => `my Name Is ${firstName} ${lastName}, I from ${country} and I am ${myJob}`;
}
var MyObject = new Person("Abdellah", "karani", 19, "Maroc", "Student");
console.log(MyObject.info("Abdellah"));
console.log(MyObject.info("Ahmed"));





////////////////////////////////////////////////////////
// DOM => Document Object Module
/*
    - What Is Dom
    - Dom Selector
    --- Find Element By Id  => getElementById
    --- Find Element By tag Name  => getElementsByTagName --> Return Array
    --- Find Element By Class Name => getElementsByClassName --> Return Array
    --- Find Element By CSS Selector  => querySelector[All] [Can Class, Id, Selectors ...]
    --- Find Element By Collocation --> Can Access With Index
    ------ Title
    ------ Body
    ------ Images
    ------ forms
    ------ Links

    document.anchors
    document.body
    document.documentElement
    document.embeds
    document.forms
    document.head
    document.images
    document.links
    document.scripts
    document.title
*/
var myIdElement = document.getElementById("MyDiv");
var myTagElement = document.getElementsByTagName("p");
var myClassElement = document.getElementsByClassName("MySpan1");
var myQueryElement = document.querySelector(".special");
var myQueryElement = document.querySelector(".special div");
var myQueryElement = document.querySelector(".MySpan1"); // Get The First Element
var myAllQueryElement = document.querySelectorAll(".MySpan1"); // Get All Element 

console.log(myIdElement);
console.log(myTagElement); // Return Collocation
console.log(myTagElement[0]); // Get First Element
console.log(myClassElement); // Return Collocation
console.log(myClassElement[0]); // Get The First
console.log(myQueryElement);
console.log(myAllQueryElement); // Return A NodeList --> Can Access WithIndex
console.log(myAllQueryElement[0]);

console.log(document.title); // Get The Title Page
console.log(document.body); // Get The body
console.log(document.forms[0].one.value); // Get The forms => Hello
console.log(document.links[1].href); /// https://facebook.com/
console.log(document.images); // Get The Images



// Dom
/*
    - [Get / Set Elements And Attributes]
    - innerHtml
    - textContent --> Return Text Pure
    - Change Attributes Directly
    - Change Attributes With Methods
    --- getAttribute
    --- setAttribute --> If Does Not Exit Will Be Create

    Search 
        - innerText --> return the text content of an element
*/
var myElement = document.querySelector(".js");
console.log(myElement.innerText); // Get The Content

var myElement = document.querySelector(".js");
console.log(myElement.innerHTML); // Javascript <span>Div</span>
console.log(myElement.textContent); // Javascript Div
myElement.innerHTML = "Text Form <span>Main.Js</span> File" // Set The Html
myElement.textContent = "Text Form <span>Main.Js</span> File" // Set The Content

// Directly Change
var MyEle = document.querySelector("a");
MyEle.href = "https://google.com";
MyEle.className = "main-link";

document.images[0].src = "Avatar.png";
document.images[0].alt = "Alternate";
document.images[0].title = "Image"; // Add This Attribute
document.images[0].id = "pictures";
document.images[0].className = "pic";
document.links[0].className = "link";

// With Methods
var myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("href")); // #

myLink.setAttribute("href", "https://elzero.org");
myLink.setAttribute("title", "elzero");



// Dom
/*
    Dom [Check Attributes]
    - Element.attributes
    - Element.hasAttribute("AttrName") --> Return True or False
    - Element.hasAttributes
    - Element.removeAttributes("AttrName")
*/

console.log(document.getElementsByTagName("div")[0].attributes);
var myDiv = document.getElementsByTagName("div")[0];

if (myDiv.hasAttribute("data-src")) {
    myDiv.removeAttribute("data-src");
    console.log("Remove It");
} else {
    console.log("Not Found");
}

if (myDiv.hasAttribute("data-src")) {
    if (myDiv.getAttribute("data-src") === "") {
        myDiv.removeAttribute("data-src");
    } else {
        myDiv.setAttribute("data-src", "New Value");
    }
} else {
    console.log("Not Found");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("Has Attributes"); // Has Attributes
}



// Dom --> Create && Append Element
/*
    - createElement
    - createComment
    - createTextNode
    - createAttribute
    - appendChild
    - setAttributeNode
*/
var MyEle = document.createElement("h1");
var myAttr = document.createAttribute("data-custom"); // create An Attributes
var myText = document.createTextNode("Product One");
var myComment = document.createComment("This Section For Products");
MyEle.className = "product";

MyEle.setAttribute("price", "200"); // Create price Attribute
MyEle.setAttributeNode(myAttr); // set Empty Attr to MyEle
MyEle.setAttribute("test", "done"); // test = "done"
console.log(myAttr);
console.log(MyEle);

// Append Text To Element [MyEle Exit In Console]
MyEle.appendChild(myText);
// Append Comment
document.body.appendChild(myComment);
// Append Element To Body
document.body.appendChild(MyEle);



// Dom --> Example
var products = document.createElement("div");
products.className = "products";
document.body.appendChild(products);
for (var i = 0; i < 4; i++) {
    var myComment = document.createComment("This For Testing");
    var myProduct = document.createElement("div");
    var myHeadingAttr = document.createAttribute("class");
    myProduct.className = "product";
    var myHeading = document.createElement("h1");
    var myTitle = document.createTextNode("Product " + Number(i + 1) + "");
    var myPar = document.createElement("p");
    var myDesc = document.createTextNode("This Product For Testing");

    document.body.appendChild(myProduct);
    myProduct.appendChild(myHeading);
    myProduct.appendChild(myPar);
    myHeading.appendChild(myTitle);
    myPar.appendChild(myDesc);
    myHeading.setAttributeNode(myHeadingAttr);
    myHeading.setAttribute("class", "main");
    products.appendChild(myProduct);
    // Styling
    myHeading.style.fontFamily = "sans-serif";
    myPar.style.fontWeight = "600";
    myPar.cssText = "font-weight: bold;"
}



// DOM [Deal With Children]
/*
    - children --> return Childrens That Exit In Parent
    - childrenNodes --> Get All Nodes [text, comment, span, p, ...] {space == text}
    - firstChild --> First Child [text, element, comment]
    - lastChild --> Last Child [text, element, comment]
    - firstElementChild --< First Element
    - lastElementChild --> Last Element
*/
var myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.children); // HTMLCollection(2) [p, span]
console.log(myElement.children[0]); // <p>Hello Paragraph</p>

console.log(myElement.childNodes); // Get All Nodes
console.log(myElement.childNodes[0]); // " Hello Div "

console.log(myElement.firstChild);// " Hello Div "
console.log(myElement.lastChild); // " Hello "

console.log(myElement.firstElementChild); // <p>Hello Paragraph</p>
console.log(myElement.lastElementChild); // <span>Hello Span</span>



// Dom Events
/*
    - Use Events In HTML
    - Use Events In JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    -- For Forms
    --- onfocus
    --- onblur
    --- onsubmit
    --- oninput --> when an element gets input.
        The oninput event does NOT occur when a <select> element changes

    --- onkeydown --> When You Click IN Button But With Key in Board
    --- onkeyup --> When You Up
*/
var myBtn = document.getElementById("btn");
myBtn.onclick = function () {
    console.log("Clicked"); // When I Clicked
}
myBtn.oncontextmenu = function () {
    console.log("On Content Menu"); // Right Click
}
myBtn.onmouseenter = function () {
    console.log("On Mouse Enter"); // On I Touch The Button
}

window.onload = function () {
    console.log("Onload"); // Reload The Page
}
window.onscroll = function () {
    console.log("onScroll"); // Scroll
}
window.onresize = function () {
    console.log("Resize"); // Resize The Page [Desktop --> Phone]
}

var myInput = document.querySelector(".text");
myInput.onfocus = function () {
    console.log("Onfocus on Input Text");
}
myInput.onblur = function () {
    console.log("Not Focus Now --> On Blur");
}
var myForm = document.forms[0];
myForm.onsubmit = function () {
    window.alert("Done!");
}
myInput.oninput = function () {
    if (myInput.value.length > 10) console.log("Hello");
}
myBtn.onkeydown = function () {
    console.log("Hello KeyDown");
}
myBtn.onkeyup = function () {
    console.log("hello KeyUp");
}
// Dom [Events]
/*
    - Validate From Practice
    - Prevent Default --> preventDefault() --> Stop The Event
        The preventDefault() method cancels the event if it is cancelable,
        meaning that the default action that belongs to the event will not occur.
*/

var inputUser = document.querySelector("[name='username']");
var inputAge = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (e) {
    var userValid = false;
    var ageValid = false;
    if (inputUser.value !== "" && inputUser.value.length <= 10) {
        console.log("Valid Username");
        userValid = true;
    }
    if (inputAge.value !== "") {
        console.log("Valid Age");
        ageValid = true;
    }
    if (userValid == false || ageValid == false) {
        e.preventDefault();
    }
}
document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
}
var myCheckBox = document.querySelector("[name='check']");
myCheckBox.onclick = function (event) {
    event.preventDefault();
}



// DOM [Events Simulation]
/*
    - click 
    - focus 
    - blur
*/
myInput1 = document.querySelector("[name='username'");
myInput2 = document.querySelector("[name='age'");

window.onload = function () {
    myInput1.focus();  // When I Reload The Page --> Focus in myInput
}
myInput2.onblur = function () {
    document.querySelector(".click").click(); // Click To Link When I Blur From myInput2
}
myInput1.oninput = function () {
    if (myInput1.value.length > 3) {
        myInput1.blur();
        myInput2.focus();
    }
}


// DOM --> Class List
/*
    element.classlist.
    - length
    - contains --> For Search The Class
    - item(index) --> Get The Class by Index
    - add --> Add Classes
    - remove --> Remove Classes --> if doesn't exit --> no error
    - toggle --> Add and Remove --> if exit[Add] else [Remove]
*/
var myElement = document.getElementById("my-div");
console.log(typeof myElement.classList); // object
console.log(myElement.classList);
console.log(myElement.classList.length);
console.log(myElement.classList.contains("className")); // false
console.log(myElement.classList.contains("one")); // true
console.log(myElement.classList.item(2)); // show

myElement.onclick = function () {
    myElement.classList.add("class1", "class2"); // Add Two Classes
    myElement.classList.remove("show", "one"); // remove Two Classes
    myElement.classList.toggle("Add-remove"); // Add and Remove class --> Depend Existence
}



// DOM Styling
/*
    - style
    - cssText
    - removePropriety(proprietyName) [inline, Stylesheet]
    - setPropriety(proprietyName, value, priority)

    - all form file
        document.styleSheets[0].rules[0].style.removeProperty("color")

    - rules
        p { color: red; }
*/
var myElement = document.querySelector(".btn");
myElement.style.color = "red";
myElement.style.backgroundColor = "yellow";

myElement.style.cssText = "background-color: red; color: white; opacity: 0.8;";
myElement.style.removeProperty("color");
myElement.style.setProperty("color", "white", "important")

document.styleSheets[0].rules[0].style.removeProperty("color") // remove color from file
document.styleSheets[0].rules[0].style.setProperty("background-color", "green", "important")


// Tutorial --> From My Teacher
for (var i = 0; i < document.childNodes.length; i++) {
    console.log(document.childNodes[i]);
}
console.log(document.childNodes[1].parentNode);

var myList = document.createElement("ul");
myList.getAttribute("class"); // Get The value Of The Attribute
myList.setAttribute("class", "btn"); // Set The Value Of Class Attribute
var myText = document.createTextNode("Function Describe The World");
var myComment = document.createComment("This For Try!!!");
var myLi = document.createElement("li");
var myParagraph = document.createElement("p");
myParagraph.textContent = "Make Tea Not Love";
myList.appendChild(myLi);
myLi.appendChild(myText);
document.body.appendChild(myList);
myList.insertBefore(myParagraph, myLi);
myList.replaceChild(myComment, myLi);
myList.removeChild(myComment);
myParagraph.style.color = "red";
console.log(myParagraph.style.color, "Nothing Display"); // red, Nothing Display
// console.log(getComputedStyle(myParagraph));
// console.log(getComputedStyle(myParagraph).color); // rgb(255, 0, 0)

var myBtn = document.getElementById("btn");
var sayHello = function () {
    console.log("Hello World");
}
myBtn.onclick = function () {
    sayHello();
}
myBtn.addEventListener("click", sayHello());
myBtn.addEventListener("DOMContentLoaded", sayHello()); // When I Loaded The Page
myBtn.removeEventListener("click", null);
myBtn.addEventListener("click", function (event) {
    alert(event.type);
});
myBtn.addEventListener("click", function (e) {
    console.log("Event is : " + e.type + ", name Button is : " + e.target.textContent);
});


// DOM [Deal With Element]
/*
    - before [Element || String]
    - after [Element || String]
    - append [Element || String] --> Append In Last
    - prepend [Element || String] --> Append In First
    - remove --> remove The Node
*/
var myDiv = document.querySelector(".myDiv");
var createdParagraph = document.createElement("p");
myDiv.before("Hello Before My Div") // add THis Text Before Div Element
myDiv.after("Hello After My Div") // add THis Text After Div Element
myDiv.after(createdParagraph);
myDiv.append(createdParagraph);
myDiv.prepend(createdParagraph);
myDiv.remove();




// DOM [ Traversing ]
/*
    element.
    - nextSibling [Ele, String, Comment]
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/

var mySpan = document.querySelector(".two");
console.log(mySpan);
console.log(mySpan.nextSibling);
console.log(mySpan.nextElementSibling);
console.log(mySpan.previousSibling);
console.log(mySpan.previousElementSibling);
console.log(mySpan.parentElement);
mySpan.onclick = function (event) {
    mySpan.parentElement.remove();
    // mySpan.parentElement.style.opacity = "0.1";
}




// DOM Cloning
/*
    - cloneNode(Deep)
    Deep Can Be:
        True : Take All Children And Attributes
        False [Default] : Take Attributes But Not The Children [Text, Comment, Elements...]
*/
var mySpan = document.querySelector(".two");
var myDiv = document.querySelector(".myDiv");
myDiv.prepend(mySpan); // But I Want To Copy The Element To Another Parent

var mySpan = document.querySelector(".two").cloneNode(true);
var myDiv = document.querySelector(".myDiv");
mySpan.id = "btn";
mySpan.setAttribute("class", `${mySpan.getAttribute("class")}-clone`) // Change The Class For No Problems
myDiv.append(mySpan);




// DOM [ Add Event Listener ]
/*
    onclick --> Just One Event The Last
    addEventListener --> Execute More Then One Event
    Use Without On
    Attach Multiple Event
    Error Test
    Can Do An Event Of An Event That Does Not Exit In The Page
    Search
    - Capture & Bubbling Javascript
    - removeEventListener

    Bubbling --> Event Will Be Overwrite To Another Parents Element
    capture --> Parameter In addEventListener --> Default In False
    once --> Default false
        once: true --> Just One Event Will Do

    With stopPropagation()
        Capture = true --> Stop The Propagation
        Capture = false --> Stop The Bubbling
    Without stopPropagation()
        Capture = false || true --> Bubbling
*/

// Add More Then Event
var myPar = document.querySelector(".paragraph");
myPar.addEventListener("click", function () {
    console.log("From Event 1");
});
myPar.addEventListener("click", function () {
    console.log("From Event 2");
});
window.onload = "Hello From Onload";
// myPar.addEventListener("click", "String"); // Error

myPar.addEventListener("click", function (event) {
    var myCopy = myPar.cloneNode(true);
    // myCopy.setAttribute("class", "copy");
    myCopy.className = "copy";
    myPar.after(myCopy);
});

// Element Does Not Create Yet
document.addEventListener("click", function (event) {
    if (event.target) console.log(event.target);
    if (event.target.className == "copy")
        console.log("This Just Cloned But Another Element");
});
// document.querySelector(".copy").onclick = function () {
//     console.log("Hello World");
// } // Error The Element is Not In The HTML Page

// Searches
/// removeEventListener
function addBox() {
    console.log("I add it");
}
var myBox = document.getElementById("btn");
myBox.addEventListener("click", addBox);
myBox.removeEventListener("click", addBox); // If There is No Function Pass null


/// Propagation and Bubbling
var divs = document.querySelectorAll("div");
/*
<div class="one">One
    <div class="Two">Two
        <div class="Three">Three</div>
    </div>
</div>
*/
divs.forEach(function (ele) {
    ele.addEventListener("click", function (event) {
        // event.stopPropagation();
        console.log(`Hello ${ele.className}`); // Without stop...() --> Bubbling
    }, { capture: false, once: true }); // Capture --> Stop Propagation --> "one"
});



// Assignment 
/*
    - nodeValue --> Value Of Any Node [text ...]
    - nodeName --> Get The Name For Any Node
    - Use ForEach For Any Loop With Nodes
    - Use For Array --> [...Sequence]
*/
var div = document.querySelector(".getElzero");
console.log(div.lastChild.nodeValue.trim());

var elements = document.querySelector(".search");
for (var i = 0; i < elements.children.length; i++) {
    console.log(`This is ${elements.children[i].nodeName}`);
}


// Challenge 
/*
    Use A Function --> DRY
    Search About Universal Selector[*] With Js  
*/
const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
    element.style.boxSizing = 'border-box';
});




////////////////////////////////////////////////////////
// BOM [Browser Object Model] 
/*
    See The Image Of BOM First
    - Introduction
    --- Window Object is Browser Window [Website Page]
    --- Window Contain The Document Object
    --- All Variables, Functions, Objects, Console ... Members of Window Object
    - What Can We Do With Window Object
    --- Open Window
    --- Close Window
    --- Move Window
    --- Resize Window
    --- Print Document
    --- Run Code After Period Of Time Once Or More
    --- Fully Control The URL
    --- Save The Data Inside Browser To Use Later
*/
window.console.log("good");
window.document.title = "Learn Js";
console.log(window.document.body.style);



// BOM [alert, confirm, prompt]
/*
    - SweetAlert2 --> For Idea Alert
    - alert(Message) --> Need To Response Only Ok Available
    - conform (Message) --> Need Response And Return A Boolean
    - prompt(Message, Default Message) --> Collect Data
*/

alert("Hello");
window.alert("Hello");
this.alert("Hello");

var x = confirm("Are You Sure");
console.log(x);
if (x == true) console.log("Item Deleted");
else console.log("Item Not Deleted");

var y = prompt("Good day For You : ", "Write Day For All Character");
console.log(y.valueOf());




// setTimeout && clearTimeout
/*
    - siteTimeout(Function, Timeout, Additional Params)
    - clearTimeout(Identifier)
    - One Execution
*/
setTimeout(function(user) {
    console.log("Hello From SetTimeout", user);
}, 3000, "Abdellah");

function message(user, age) {
    console.log(`Hello ${user} You Are Age is ${age}`)
};
var handler = setTimeout(message, 3000, "Abdellah", 20);
console.log(handler); // id --> 3

document.querySelector(".clearTime").addEventListener("click", function() {
    clearTimeout(handler); // 3
});




// setInterval && clearTimeout
/*
    - setInterval(Function, MillSecond, Additional Params)
    - clearInterval(Identifier)
    - Will Be Execute The Function Again
*/
setInterval(function(user) {
    console.log("Hello World", user);
}, 1000, "user");

var div = document.querySelector(".setInterval");
var counter = setInterval(AddOne, 1000);
function AddOne() {
    div.textContent = parseInt(div.textContent) -1;
    if (div.textContent <= 0) clearInterval(counter);
}




// Window Location Object
/*
    - location Object
    -- href Get / Set / [URL || Hash || File || Mail]
        Without Delete History
    -- host
    -- hash ??
    -- protocol
    -- reload()
    -- replace() // replaces the current resource with the one at the provided URL
        Delete History
        it is not possible to use "back" to navigate back to the original document.
    -- assign() /// method loads a new document
        Assign To Another URL And Save The History
*/
console.log(window.location);
console.log(location.href);
location.href = "/learn core/index.html/#sec1";
location.href = "https://www.google.com"; // Does'nt Remove The History
console.log(location.host); // 127.0.0.1:5501
console.log(location.hostname); // 127.0.0.1
console.log(location.protocol); // http:
location.protocol = "https";
console.log(location.hash); // #sec0
location.hash = "sec1"; 

window.location.reload();
location.replace("https://www.google.com"); // Remove The History
location.assign("https://google.com");



// Window Open Adn Close
/*
    - close() : Close A Window
    - open(URL [opt], Window Name or Target Attr[opt], Window Features [Opt], History Replace)
        URl --> can be Image, Website
        Name or target -->
            _blank : New tab [Default]
            _self : in Same tab
            Name : No Relation With Title Page
        Features Window --> 
            width [Num]
            height [Num]
            left [Num]
            top [Num]
        History Replace
            True : Replace [Default]
            False : Do not
    Search
    - Window.open + Features
*/

var openedWindow;
function openWindow() {
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    openedWindow = window.open("https://facebook.com", "_blank", "width="+screenWidth+",height="+screenHeight+"");
}
function closeWindow() {
    if (openedWindow & openedWindow.closed)
        openedWindow.close();
}
openWindow();
setTimeout(function() {
    closeWindow();
}, 2000);





// Window History Object
/*
    - History API
    -- Proprieties
        length
    -- Methods
        back() --> Back The before page
        forward() --> Go The Next Page
        go(Delta) ==> Position In History [... -1, 0, 1, 2, 3 ...]

    Search [Advanced Knowledge]
        pushState() + replaceState()

    pushState() --> adds an entry to the browser's session history stack.
        pushState(state, unused, url)
    replaceState() --> modifies the current history entry
        replaceState(state, title_page, url)

    -- title was ignore by most browser
*/
history.back();
history.forward();
history.go(-1);
console.log(history.length);
console.log(window.history);

document.querySelector("#btn").addEventListener("click", function() {
    history.replaceState(null, "replace", "http://127.0.0.1:5501/learn%20core/hello.html");
    history.pushState({id: 1234}, "replace", "http://127.0.0.1:5501/learn%20core/index.html");
    console.log(history.state); // id: 1234
});




// BOM --> Scroll, Focus, Print, Stop
/*
    - stop() --> stop Downloading
    - print()
    - focus()
    - scrollTo(x, y || Options) --> Supported In Safari 
    - scroll(x, y || Options) --> Does Not Supported In Safari
    - scrollBy(x, y || Options)

    scrollTo() --> will scroll to coordinate given
        We start from (0, 0) to (x, y)
    scrollBy() --> will scroll by coordinate given
        We start from where we are and add (x, y)
*/
// var new_window = open("https://google.com", "_blank", "width=500,height=200");
document.querySelector("#btn").addEventListener("click", function() {
    // window.print();
    window.stop();
    new_window.focus();
    new_window.close();
    window.scroll(0, -300);
    window.scrollTo(0, 300);
    window.scrollBy(0, 300);
    window.scrollBy({
        left: window.screen.width, // X
        top: window.screen.height, // Y
        behavior: "smooth",
    })
});
console.log(window.screen.width);
console.log(window.screen.height);

// Scroll To Top Using Practice
/*
    ScrollX [Alias -> PageXOffset]
    ScrollY [Alias -> PageYOffset]
*/

console.log(window.scrollX == window.pageXOffset) // true
var up = document.querySelector("#up");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 200) {
        up.style.display = "block";
    }
    else up.style.display = "none";
});
up.addEventListener("click", function() {
    window.scrollTo({
        top:0, left:0, behavior: "smooth",
    });
});






////////////////////////////////////////////////////////
// Destructuring 
/*
    "is javascript expression that allows us to extract data from array, object,
    and maps and set them into new, distinct variables"
    - Destructuring Array
    [a, b, c, d] = arrayName;
*/  

var MyFriends = ["Abdellah", "Omaima", "Ali", "Maysa"];

var [a, b, c, d] = MyFriends;
console.log(a, b, c, d);
[x, y, z] = MyFriends;
console.log(x, y, z);
[o="World", , , w, e="Hello"] = MyFriends;
console.log(o, w, e); // Abdellah Maysa Hello 



// Destructuring Array Advanced Example
/*
    - [a, b, c, [, e, r ,[, , e]], d] = arrayName;
*/
var myFriends = ["Abdellah", "Omar", ["Ahmed", "Omaima", ["Fatima", "Maysa"]]];
var [a, b, [c, d, [e, f]]] = myFriends;
console.log(a, b, c, d, e, f);

var [, , [, a, [, b]]] = myFriends;
console.log(a, b); // Omaima Maysa



// Destructuring Array ==> Swapping Varibales 
/*
    - [a, b] = [b, a]
*/
var book = "Video";
var video = "Book";

// Old Method
var temp = video;
video = book;
book = temp;

// New Method
[book, video] = [video, book];
console.log(book, video); // Video Book



// Destructuring Objects
/*
    - letters is object with keys [a, b , c]
    - let a, b, c;
    - ({a, b, c} = letters);
*/
var user = {
    theName: "Abdellah",
    theAge: 20,
    theTitle: "Developer",
    theCountry: "Morocco",
};
var letters = {
    a: "a",
    b: "b",
    c: "c",
};

console.log(user.theName);
console.log(user["theName"]);

var {theName, theAge, theTitle, theCountry} = user; // Declare
console.log(theName, theAge, theTitle, theCountry);
({theName, theAge, theTitle, theCountry} = user); // Has Benn Decalre

var {a, c} = letters;
console.log(a, c); // a c --> Without USe Common



// Destructuring Fucntions Parameters
/*
    const obj = {
        key1: { v1: "", v2: "" }
    }
    
    function({a, b, c:{d, e: {f}}} = obj) --> Use The Keys Name
    
    If There is a Nested Object --> key1: {v1, v2}
*/

// function showDetails(obj) {
//     console.log(`Name: ${obj.theName}, Age: ${obj.theAge}, Skill: ${obj.theSkill.html}`);
// }

function show_details({theName, theAge, isManager, theCountry, skills: {html, js: {next}}}) {
    console.log(`Name: ${theName}, Age: ${theAge}, IsManager: ${isManager}, Country: ${theCountry}`);
    console.log("The Skills : ", html, next);
}

const user = {
    theName: "Abdellah",
    theAge: 20,
    isManger: true,
    theCountry: "Morocco",
    skills: {
        html: 30,
        css: 40,
        js: {
            react: 10000,
            next: 3000,
        },
    },
}
// show_details(user);
show_details(user);




// Destructuring Mixed Content
function printInfo({theName: name, theAge: age, skills: [a, , c], adr: {morocco: m}}) {
    console.log(`${name} + ${age} + ${c} + ${m}`);
}
const user = {
    theName: "Abdellah",
    theAge:  20,
    skills: ["HTML", "CSS", "JS "],
    adr: {
        morocco: "Rabat",
        ksa: "Riyadh",
    },
}
printInfo(user);






////////////////////////////////////////////////////////
// Set Data Type
/*
    * Syntax: new Set(Iterable)
    -- Object To Store Unique Values
    -- Can Not To Element By Index
    * Proprietes 
        - size
    * Methodss: 
    - add
    - delete
    - clear
    - has
*/
var myData = [1, 2, 2, 4, 5, "A"];
// var myNewData = new Set(myData);
var myNewData = new Set().add(1).add(2).add(2).add(4).add(5).add("A");
console.log(myNewData); // [1, 2, 4, 5]
console.log(myData); // [1, 2, 3, 4, 5]

console.log(myNewData.size);

console.log(myData[0]); // 1
console.log(myNewData[0]); // undefined

myNewData.add(1).add(2).add(20);
console.log(myNewData); // [1, 2, 4, 5, 20]
console.log(myNewData.delete(1));
console.log(myNewData); // [2, 3, 5, 20]

// myNewData.clear();
console.log(myNewData); // Nothing

console.log(myNewData.has("a".toUpperCase())); // true

 


// Set vs WeakSet And Garbage Collector
    
/*
    WeakSet is Weak,
    meaning refrence to object in weakset that help weakly.
    if no other refrences to a object store, these object can be garbage collected.

    Different Between Set And WeakSet

    ==> Set
        Can Store Any Data Values
        Have Size Proprety
        Have [Keys, Values, Enteries]
        Can Use foreach
    ==> WeakSet
        Collection Of Object Only
        Does Have A Size Proprety
        Does Not Have [clear, values, keys, enteries]
        Can Not Use foreach
    Search
        WeakSet Use Cases
*/
var mySet = new Set([1, 2, 3, 3, "A"]);
console.log(mySet);
// size
console.log(mySet.size);
// itarator
var iterator = mySet.values();
console.log(iterator.next()); // {value: 1, done: false} --> Deos Not Done
console.log(iterator.next().value); // 2
// foreach
mySet.forEach( ele => console.log(ele));

// WeakSet
var myWs = new WeakSet([{A: 1, B: 2}]);
console.log(myWs);
var iter = myWs.values();
console.log(iter); // myWs.values is not a function
myWs.forEach(ele => console.log(ele)); // myWs.forEach is not a function



// Map Data Type Vs Object
/*
    - Map Data Type
    Syntax: new Map(Iterable With Key/ Value)
    
    - Map
        Does Not Contain Key By Default
        Key Can Be Anything [function, object, any primitive data type]
        Ordered by Insertion
        Get Item By Size
        Can Be Directly Iterated
        Better Performance when add or remove
    - Object
        Has Default Key
        String Or Symbol --> Key
        Not 100% Till Now --> Ordered
        Need To Do Manually --> size
        Low Performance When Compare With Map
*/


var myObject = {};
var myEmptyObject = Object.create(null);
var myMap = new Map();

console.log(myObject); // [[Prototype]]: Object
console.log(myEmptyObject); // No properties --> No Prototype
console.log(myMap); // No properties


var myNewObject = {
    10: "Number",
    "10": "String", // like 10: "String"
};
console.log(myNewObject);
console.log(myNewObject[10]); // String


var myNewMap = new Map();
var newMap = new Map();
newMap.set("10", "String");
newMap.set(10, "Number");
newMap.set("Object", {1: 10, 20: 30});
newMap.set("Function", function sayHello() {return "Hello World"});


console.log(new_object[10]);
console.log(newMap.get(10));
console.log(newMap.get("Object"));
console.log(newMap.get("Function"));



// Map Data Types
/*
    Methods
    -- Set
    -- get
    -- delete
    -- clear
    -- has
    Proprioties
        -- size
    --> Map Is Sensible To The Key Letters
*/
var myMap = new Map([
    [10, "Number"],
    ["name", "String"],
    [false, "Boolean"],
]);
myMap.set("10", "Number");
console.log(myMap.get(10));
console.log(myMap.get(false));

console.log(myMap.size);
console.log(myMap.delete("10")); // true --> Succeffuly Deleted
console.log(myMap.size);
console.log(myMap.clear());
console.log(myMap.size);

if (myMap.has("Name")) console.log(`There is 10 key`);
else console.log("There Is No 10 Key");




// Map Vs WeakMap

/*
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
    Map     ==> Key Can Be Anything
    WeakMap ==> Key Can Be Object Only
*/

// Map And WeakMap

var muser = {theName: "Abdellah"};
var myMap = new Map();
myMap.set("10", "string");
console.log(myMap);
console.log(myMap.get("10")); // string

myMap.set(muser, "Value Of Object");
console.log(myMap);
console.log(myMap.get(muser)); // Value Of Object

muser = null;
console.log(myMap.get(muser)) // undefined

var wuser = {theAge: 19};
var myWeakMap = new WeakMap();
myWeakMap.set(wuser, "Abdellah");
console.log(myWeakMap.get(wuser)); // Abdellah
wuser = null;
console.log(myWeakMap.get(wuser)); // undefined



// Bref In Set WeakSet Map And WeakMap
console.log("Start Set WeakSet and Map And WeakMap");

var mySet = new Set([1, 2, 1, "A", true, {theName: "Abdellah"}]).add("Hello");
var myWeakSet = new WeakSet([{a: "a", b: "b"}]);
var myMap = new Map();
var myWeakMap = new WeakMap();

// Set
var iterator = mySet.values(); // Accessing To Elements
console.log(iterator.next()); console.log(iterator.next());
console.log(iterator.next()); console.log(iterator.next());
console.log(iterator.next().value); console.log(iterator.next());
console.log(mySet.size);
console.log(mySet);

// WeakSet
// console.log(myWeakSet);
// Set.prototype.forEach.call(myWeakSet, function(value) {
//     console.log(value);
// });


// Map
var mMap = new Map([
    [10, "number"],
    ["10", "string"],
])
myMap.set("10", "string");
myMap.set(10, "number");
console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(mMap.get(10));


// WeakMap --> Key is Object
var user = {
    theName: "Abdellah",
    theAge: "20",
}
myWeakMap.set(user, "Obeject Value");
console.log(myWeakMap.get(user));


////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Arrays Methods
/*
    - Array.from(Iterable, MapFunc, This)
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Function
    --- Shorten The Method + USe Arguements
*/

console.log(Array.from("Abdellah"));
console.log(
    Array.from("12345", function(number) {
        return +number + +number;
}));
console.log(Array.from("12345", (n) => +n + +n)); // [2, 4, 6, 8, 10]

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


/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Does Not Write Start = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Does Not Write End = Reach The End
*/
var myArray = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D"];
// myArray.copyWithin(3); // [1, 2, 3, 1, 2, 3, 4, 5, 6, 'A']
// myArray.copyWithin(5, 7, 8); // [1, 2, 3, 4, 5, 'B', 'A', 'B', 'C', 'D']
// myArray.copyWithin(0, 6); // ['A', 'B', 'C', 'D', 5, 6, 'A', 'B', 'C', 'D']
// myArray.copyWithin(2, 6, 8); // [1, 2, 'A', 'B', 5, 6, 'A', 'B', 'C', 'D']
myArray.copyWithin(-8, -4, -2); // [1, 2, 'A', 'B', 5, 6, 'A', 'B', 'C', 'D']
console.log(myArray);




/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
        Tell You If Condition True Or No
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  Using
  - Check if Element Exists In Array Using Function
  - Check If Number In Range Using Object
*/
var nums = [1, 2, 3, 4, 5, 6, 7];
var myNumber = 5;
var check = nums.some(function(ele) {
    console.log(this); // this for owner of the function
    return ele > this;
}, myNumber);
var check_nums = nums.some( ele => ele > 78);
// With Using Function
function checkNumber(arr, value) {
    return arr.some(ele => ele === value);
}
console.log(checkNumber(nums, 20)); // false
// With Using Object
var range = {
    min: 5,
    max: 10,
}
var checkRange = nums.some(function(ele) {
    return this.min < ele && this.max > ele;
}, range);
console.log(checkRange); // true




/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  -- For Return True Should All Element Satisfier The Condition
*/
const locations = {
    20: "place1",
    30: "place2",
    10: "place3",
    40: "place4",
};
var mainLocation = 15;
var nbr_locations = Object.keys(locations);
console.log(nbr_locations);
nbr_locations = Array.from(nbr_locations, ele => +ele);
nbr_locations = nbr_locations.map(n => +n);
console.log(nbr_locations);
var check = nbr_locations.every(function(ele) {
    return +ele > this;
}, mainLocation);
console.log(check); // false 10 is not greater 15




/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/
// Spread With String => Expand String
// With Strings
var word = "Hello World";
console.log(word);
console.log(...word); // H e l l o   W o r l d

// With Array 
var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];
var nums = nums1.concat(nums2);
console.log(nums); // [1, 2, 3, 4, 5, 6]
console.log([...nums1, ...nums2]); // [1, 2, 3, 4, 5, 6]

// Copy The Array
var copiedArray = [...nums1];
nums[1] = 10;
console.log(copiedArray); // [1, 2, 3]

// Push Inside
var myFriends = ["John", "Doe"];
var MyNewFriends = ["Sara", "Sameh"];
myFriends.push(...MyNewFriends);
console.log(myFriends); // ['John', 'Doe', 'Sara', 'Sameh']

// Using Math Object
var nums = [1, 2, 3, 4, 5, 6, 10];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 10

// With Object
var objOne = {
    a: 1,
    b: 2,
};
var objTow = {
    c: 3,
    d: 4,
};
console.log({...objOne, ...objTow, e: 4}); // {a: 1, b: 2, c: 3, d: 4, e: 4}






////////////////////////////////////////////////////////
// Regular Expression
/*
    for matches something with A certain way
    - Email
    - IP
    - Phone
    - URL
*/
var str1 = "10 20 100 1000 10000";
var str2 = "os12 os12 os145 os23os os123Os2133osOs";
var InvalidEmail = "Abdellah@@@gmail...com";
var validEmail = "o@nn.sa";
var myIp = "192.168.111.100"; // IPv4
var url = "abdellah.com";
    
    
    
    
// Regular Expression - Modifiers
/*
  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => All case insensitive [ for /this string/ ]
    /abcd/ = /ABCD/ --> the same
  g => global --> global match finds all matches (not only the first)
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




// Regular Expression --> Ranges
/*
  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/
var tld = "Com Net Org Info Code Io";
var regex_tld = /(org|info|Io)/ig; // without g he return just "org" 
console.log(tld.match(regex_tld));

var nums = "1234579jk";
var regex_nums = /[0-9]/gi;
var regex_not_nums = /[^0-5]/gi;
console.log(nums.match(regex_nums)); // ['1', '2', '3', '4', '5', '7', '9']
console.log(nums.match(regex_not_nums)); // ['7', '9', 'j', 'k']

var special_nums = "1@23)34_90~4#";
var regex_special_nums = /[^0-9]/gi;
console.log(special_nums.match(regex_special_nums)); // ['@', ')', '_', '~', '#']

var practice = "Os1 Os1 Os2 Os8 Os8Os";
var regex_practice = /os[5-9]os/gi;
console.log(practice.match(regex_practice)); // ['Os8Os']


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




// Regular Expressions - Character Classes Part 1
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




//  Regular Expressions - Quantifiers Part 2
/*
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x

    x and y are numbers
*/
var serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Fout Or Five]S
console.log(serials.match(/\s\d{4, }s/gi)); // S[At Least Four]S



// Regular Expression Quantifiers Part 3
/*
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/
var myString = "We Love Programming";
var personnes = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/^\d/gi.test(personnes)); // start with digit
console.log(/^\s/gi.test(personnes)); // start with space

console.log(personnes.match(/\d\w{5}(?=z)/gi)); // finich with z
console.log(personnes.match(/\d\w{8}(?!Z)/gi)); // Not finich with z




// Regular Expression – Replace With Pattern
/*
  - replace --> replace first search value 
  - replaceAll
*/
var txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "Js"));
console.log(txt.replaceAll(/@/gi, "Js"));



// Practice Form Validation
var form = document.getElementById("register");
form.addEventListener("submit", function(event) {
    var phone_input = document.getElementById("phone").value;
    var phone_regex = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    if (phone_regex.test(phone_input)) {
        return true;
    }
    event.preventDefault();
    return false;
});




// another Informations
var RegexUsername1 = /^[a-zA-Z0-9]+$/;
/**
 * This For Inputs
 * ^ : at The First
 * $ : at The End
 */




////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// OOP Introduction
/*
    OOP stand of Object Oriented Programming
    OOP is Paradigm or style of code
    OOP use the concept of object to design a computer programm
    it is not new --> siince 1960
    some language support this style and some not

    Object : package contain proprerties and fucntions work together
        to produce something in your application. function called methods
    
    Example
        Car : [Properties : color, price || Methods : walk, stop]
    
    Why We Use OOP ? 
    You Will be Able to Create a Large and Complex Software Architecture in Organized Ways.
    You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent 
        Mess With The Code.
    You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.
*/




// Constructor Function
function User(id, username, salary) {
    this.id = id; // propreties
    this.username = username;
    this.salary = salary + 1000;
}
var user1 = new User(10, "abdellah", 2000);
var user2 = new User(100, "mohamed", 6000);
var user3 = new User(140, "omaima", 5000);
console.log(user1.salary, user3.salary, user2.salary);




//  Deal With Properties And Methods + Some Test Cases
class User {
    constructor(id, username, salary) {
        this.u = username;
        this.id = id;
        this.s = salary;
        this.msg = function() {
            return "Hello A New User"
        }      
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
    updateName(newName) {
        this.u = newName;
    }
}
var userOne = new User(10393, "abdelllah", 29023);

console.log(userOne.u, userOne.id, userOne.s);
console.log(userOne.sayHello());
userOne.updateName("Mohamed");
console.log(userOne.sayHello());

console.log(userOne.sayHello); // native code
console.log(userOne.msg); // native code
console.log(userOne.msg()); // Hello Ne User

var str1 = "Hello World";
var str2 = new String("Hello World");
console.log(typeof str1, typeof str2); // string object
console.log(str1 instanceof String, str2 instanceof String); // false true
console.log(str1.constructor == String, str2.constructor == String); // true true
// because we used constractor to create string




// Class Static Properties And Methods
/**
 * class static properties is just for class not object
 */
class User {
    n = 0;
    static count = 0;
    constructor(id, username, salary) {
        this.u = username;
        this.id = id;
        this.s = salary;
        User.count += 1;
    }
    static nbrOfUsers() {
        return `The Number Of Users is ${this.count}`;
    }
}
var userOne = new User(10393, "abdelllah", 29023);

console.log(userOne.n); // 0
console.log(userOne.nbrOfUsers()); // nbrOfUsers is not a function
console.log(User.n); // undefined
console.log(User.nbrOfUsers()); // The Number Of Users is 1

console.log(userOne.count); // undefined
console.log(User.count); // 1



// Class Inheritance
/*
    -- We Inhert Instance And Also Methods and Also Function By Using :
    -- extends PrentClassName & super(instances...);
    -- JavaScript doesn't check if you use all the parameters when calling a parent class constructor.
*/
// Parent Class
class User {
    constructor(id, username, salary, email) {
        this.u = username;
        this.id = id;
        this.s = salary;
        this.e = email;
    }
    sayHello() {
        return `Hello ${this.u}, Your Email is ${this.e}`;
    }
}
// Derived Class or Inhert Class
class Admin extends User {
    constructor(id, username, salary, permissions) {
        super(id, username, salary, null); // null --> for email
        this.s = permissions;
    }
}

var userOne = new User(10393, "Mohamed", 29023, "x.rt@gmail.com");
var adminOne = new Admin(23444, "Amine", 203803, true);
console.log(adminOne.s); // true

// Director
class Director extends Admin {
    constructor (id, username, email, happy) {
        super(id, username, email);
        this.h = happy;
    }
}
var Ms_Director = new Director(213434, "Abdellah", "Hell@gmail.com", false);
console.log(Ms_Director.h);
console.log(Ms_Director.e);
console.log(Ms_Director.sayHello()); // Hello Abdellah, Your Email is null



// Encapsulation
/*
    - Class fields are open to everyone unless specified otherwise.
    - Ensures data is accessed properly.
    - Allows you to use the app without needing to understand the complex parts.
    - Helps avoid human errors.
    - Makes the app more adaptable and easier to manage.
    - Simplifies the overall app.
*/
class User {
    // Private Proprety
    #is
    #sayHello
    constructor(name, id, isManager) {
        this.i = id;
        this.n = name;
        this.#is = isManager; // private proprety
        this.#sayHello = this.#createHelloMessage();
    }
    // Private Method
    #createHelloMessage() {
        return `Hello, ${this.n}! Manager status: ${this.#is}`;
    }
    // Public Method
    greet() {
        return this.#sayHello;
    }
}
var userOne = new User("Abdellah", 2321, true);
console.log(typeof User); // function
// consolee.log(userOne.#is); // is not accessible outside class 'User'
console.log(userOne.greet());



// Private Method
class User {
    // private property
    #e
    #msg
    constructor(name, id, email) {
        this.n = name;
        this.i = id;
        this.#e = email;
        this.#msg = this.#showEmail(); 
    }
    #showEmail() {
        return `Your Email Is ${this.#e}`;
    }
    message() {
        // return `message : ${this.#showEmail()}`;
        return `message : ${this.#msg}`;
    }
}

var userOne = new User("abdellah", 29394, "abdellah@gmail.com");
console.log(userOne.message());

class Admin extends User {
    constructor(name, id, email, salary) {
        super(name, id, email);
        this.s = salary;
    }
}

var adminOne = new Admin("Mohamed", 19293, "x.admin@gmail.com");
console.log(adminOne.i); // 19293
console.log(adminOne.n); // Mohamed
console.log(adminOne.email); // undefined --> this private proprety
console.log(adminOne.message()); // message : Your Email Is x.admin@gmail.com



// Prototype Introduction
/*
    Prototypes are the mechanism by which JavaScript objects
        inherit features from one another.
    Every object in JavaScript has a built-in property
        which is called its prototype
    
*/
class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
}
var userOne = new User(100, "Elzero");
console.log(User.prototype);

var str = "Abdellah";
console.log(String.prototype);






// Add To Prototype Chain And Extend Constructors Features

/*
    --- Classes are used to define the structure and 
        behavior of objects, while objects are used to 
        represent specific entities in a program

   --- prototype is used for objects
   --- Object.love = "Hello World";
        all object inhert from each other
*/

class User {
    constructor(name, email, id) {
        this.n = name;
        this.e = email;
        this.i = id;
        this.msg = function() {
            return 'THis.Email Value Is ', this.e;
        }
    }
}

var userOne = new User("Abdellah", "Karani", 34949);
console.log(userOne.msg()); // Karani

console.log(User.prototype);

User.prototype.sayWelcom = function() { // add method to the prototype
    return `Welcome ${this.n}`;
}
console.log(userOne.sayWelcom());
// console.log(User.sayWelcom()); // User.sayWelcom is not a function

Object.prototype.love = "Abdelah Karani";
console.log(User.love); // Abdellah Karani
console.log(userOne.love); // Abdellah Karani

String.prototype.addDotBeforeAndAfter = function(value) {
    return `.${this}.`;
}
var str = "Hello";
console.log(str.addDotBeforeAndAfter()); // .Hello.




/*
    Object Meta Data And Descriptor
        - we can a proprety to the object
        - writable
            you can change the value of any proprety
        - enumerable
            in loop you can access to this proprety
        - configurable 
            Cannot Delete Or Redifine
        - delete myObject.prop
            delete a proprety
        [ writable, enumerable, configurable ] --> Descriptors Of An Proprety
*/

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    // default is false
    writable: false, 
    enumerable: false,
    configurable: false,
    value: 3,
});

myObject.c = 100;
for (var prop in myObject) {
    console.log(prop, myObject[prop]);
}
console.log(delete myObject.c); // false --> delete Unsuccefully
console.log(myObject); // {a: 1, b: 2, c: 3}


// Cannot redefine property
Object.defineProperty(myObject, "c", {
    // default is false
    writable: false, 
    enumerable: false,
    configurable: false,
    value: 300,
});
console.log(myObject.c); // 300 if [ configurable: true, ]




// Object Meta Data And Descriptor
/*
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
    h: 0,
    a: 1,
    b: 2,
};

console.log("Hello World");

Object.defineProperties(myObject, {
    c: {
        configurable: true, value: 3,
    },
    d: {
        configurable: false, value: 4,
    },
    e: {
        configurable: false, value: 5,
    },
    g: {
        configurable: false, value: 6,
    },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));








////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Date And Time
/*
    Date And Time
    - Date Constructor

    Static Methods
    - Date.now()

    - To Track Time You Need Starting Point
    - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
    - Why 1970 [829 Days To 136 Years]

    Search For
    - Year 2038 Problem in Computer Science.

    UTC : Coordinated Universal Time
        Depend Your Distance Between Grinitch Line
*/
var dateNow = new Date();
console.log(dateNow);

console.log(Date.now()); // time in millesecond 1722632673112 from 1 January 1, 1970

var seconds = Date.now() / 1000;
console.log(seconds); // time in seconds

var minutes = seconds / 60;
console.log(minutes); // 28710548.98345

var hours = minutes / 60;
console.log(hours); // 478509.1472497222

var days = hours / 24;
console.log(days); // 19937.881531921295

var years = days / 365;
console.log(years); // 54.62433412620497




// Date and Time
/*
Date And Time
    - getTime() => Number Of Milliseconds
    - getDate() => Day Of The Month
    - getFullYear()
    - getMonth() => Zero Based [ start with zero ]
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/
var dateNow = new Date();
var birthday = new Date("Jan 18, 2005");
var dateDiff = dateNow - birthday;

console.log(dateDiff); // in Milliseconds
console.log(dateDiff / 1000 / 60 / 60/ 24 / 365); // in year

console.log(dateNow.getTime()); // 1722687498143 from 1970
console.log(dateNow.getDate()); // 3
console.log(dateNow.getFullYear()); // 2024
console.log(dateNow.getMonth()); // 7 becuase is month start with 0 --> 11
console.log(dateNow.getDate()); // 3
console.log(dateNow.getHours()); // 13 -->  13:20:10
console.log(dateNow.getMinutes()); // 20 minute
console.log(dateNow.getSeconds()); // 10 second




// Set Date And Time
/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/
var dateNow = new Date();
console.log(dateNow);

// dateNow.setTime(1000);
console.log(dateNow); // Thu Jan 01 1970 00:00:01

// dateNow.setDate(10);
console.log(dateNow); // Sat Aug 10 2024 18:18:15

// dateNow.setFullYear(2020, 11, 7);
console.log(dateNow); // Mon Dec 07 2020 18:21:17

// dateNow.setMonth(11, 3);
console.log(dateNow); // Tue Dec 03 2024 18:25:32

// dateNow.setHours(10, 9, 34);
console.log(dateNow); // Sun Aug 04 2024 10:09:34

// dateNow.setMinutes(23, 60);
console.log(dateNow); // Sun Aug 04 2024 18:24:00

dateNow.setSeconds(8, 100);
console.log(dateNow); // Sun Aug 04 2024 18:29:08





// Formatting Date And Time
/*
    new Date(timestamp)
    new Date(Date String)
    new Date(Numeric Values)

    Format
    - "Jan 18 2005"
    - "01/18/2005"
    - "2005-01-18" => ISO International Standard
    - "2005 01"
    - "2005"
    - "82" --> 1982
    - 2005, 9, 18, 2, 1, 0
    - 2005, 9, 18
    - "2005-01-25T06:01:00Z" --> Z [ Time Zone ]

    Date.parse("String") // Read Date From A String And Return Date In MillSecond
*/
var myBrithday = Date.parse("Jan 18 2005");
console.log(myBrithday); // 1106006400000

var date1 = new Date(myBrithday);
console.log(date1);

var date2 = new Date(2005, 1, 18, 14, 90, 90);
console.log(date2); // Fri Feb 18 2005 15:31:30

var date3 = new Date("2005-01-25T06:01:00Z");
console.log(date3);




// Tracking Operations Time
/*
    Search
        performance.now()
        performance.mark()
*/
// Start Time
var start = new Date();
// Operations
for (var i = 0; i < 10000; i++) {
    // document.write(`<div>${i}</div>`); // 1196
    var div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div); // 109
}
// End Time
var end = new Date();
// Duration
var duration = end - start;
console.log(duration);




// Search
/*  
    performance.now() 
        - check the performance of your code.
        - It returns value of time in milliseconds.

    performance.mark() 
        - allows you to create custom timestamps (called "marks")

    perfomance.measure()
        - calculates the time between 'startLoop' and 'endLoop',
            and stores it with the name 'loopDuration'.

    performance.getEntriesByName('loopDuration')[0] // RETURN ARRAY CONTAIN OBJECT
        - shows the time taken in milliseconds
*/
// Perfomance.now()
var t0 = performance.now();
for(let i = 0; i < 10000; i++);
var t1 = performance.now();
console.log(`Loop Take ${t1 - t0} Millseconds`); // Loop Take 0.4 Millseconds

// perfomance.mark()
// Create a start mark 
performance.mark("startLoop");
for(let i = 0; i < 10000; i++);
// Create an end mark
performance.mark("endLoop");
// Measure the duration
performance.measure("LoopTime", "startLoop", "endLoop");
// Get the measurement result
var measure = performance.getEntriesByName("LoopTime")[0];
console.log(`Loop Take ${measure.duration} Millseconds`); // Loop Take 0.2 Millseconds






// Generator Function Introduction
/*
  Generators
    - Generator Function Run Its Code When Required.
    - Generator Function Return Special Object [Generator Object]
    - Generators Are Iterable
    // Example
        show more  in some website when you click i generate another data
    // generator
        generator.next() --> return object with two property
            value : yield value
            done : false --> there is other yields, true --> no yield still
        alert("Hello") --> Come When We Start Second yield
*/

function *generateNumber() {
    yield 1;
    console.log("Hello After Yield 1");
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
// Generator
var generator = generateNumber();
console.log(typeof generator); // object
console.log(generator);

var first_yield = generator.next();
console.log(first_yield); // {value: 1, done: false}
console.log(first_yield.value); // 1
console.log(first_yield.done); // false

console.log(generator.next()); // Hello && // {value: 2, done: false}
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); // {value: undefined, done: true}

// Generator With Loop
for (let value of generateNumber()) {
    console.log(value); // 1 "Hello After Yield 1" 2 3 4 5
}

// Tell Me What is The Result
for (let value of generator) {
    console.log(value);
}





// Delegate Generator
/*
    Using Generators instead of generator
    function *name() {
        yiled *gen1;
        yiled *gen2;
    }
    let n = name();
    n.next;
    n.return(); --> stop generating
    n.next(); --> undifined
*/
function *generateLetters() {
    yield "A";
    yield "C";
}
function *generateNumbers() {
    yield 1;
    yield 3;
}
function *generateAll() {
    yield *generateLetters();
    yield *generateNumbers();
    yield [0, 0];
    yield *[100, 200];
}

let generator = generateAll();
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("STOP")); // {value: 'STOP', done: true}
// without using return() we found this
console.log(generator.next()); // {value: Array(2), done: false}
console.log(generator.next().value); // 100
console.log(generator.next()); // {value: 200, done: false}
console.log(generator.next()); // {value: undefined, done: true}



// Generate Infinite Numbers && Return Instead Genrators
function* generateNumbers() {
    // yield 1;
    // yield 2;
    // return "STOP GENERATING";
    // yield 3;
    // yield 4;
    let index = 0;
    while (true) {
        yield index++;
    }
}
let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // {value: 3, done: false}





// Module Import And Export
/*
    - add type module in html
        <script src="/learn core/app.js"  type="module"></script>
*/

// in main.js --> file contain functions and variables
export let a = 10;
export let arr = [1, 2, 3, 4];
export function saySomething() {
    return `Something`;
}
// another method for exporintg
export {
    a, arr, saySomething
}
// in app.js --> file specific for project
import {a, arr, saySomething as s} from "./main.js"

console.log(a); // 10
console.log(arr); // [1, 2, 3 4]
console.log(s()); // Something



// Named vs Default Export And Import All
/* in app.js */
// import module
import sayHello, {myNumber, T} from "./main.js"
console.log(myNumber); // 10
console.log(T); // [1, 2, 3 4]
console.log(sayHello()); // Hello World

import * as all from "./main.js";
console.log(all); // Module {Symbol(Symbol.toStringTag): 'Module'}
console.log(all.T); // [1, 2, 3, 4]
/* in main.js */
/*
    Named Export
        export { a as myNumber } should be import with 'myNumber' not 'a'

    Default Export
        export default function sayHello() {
            return `Hello World`;
        }
        do not import like { sayHello } --> Error
        sayHello { others } || abdellah { others } because it default
    
    Import All
*/

var a = 10;
var T = [1, 2, 3, 4];
export { a as myNumber, T } // export named 'a'
export default function sayHello() { // can you use anonymose fucntion --> does not has a name
    return `Hello World`;
}






