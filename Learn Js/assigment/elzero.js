console.log("hello world \n");
// assignment 1 To 9
// styling With Into Js File
console.group("1 to 9");
var title = `
<h1 style="color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial">Elzero</h1>
`;
document.write(title);

console.log("%cElzero %cWeb %cSchool",
    "color: red; font-size: 40px;",
    "color: green; font-size: 40px; font-weight: bold;",
    "background-color: blue; color: white; font-size: 40px;");


// console.group [New Term]
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.groupCollapsed("group_child");
console.log("Message One");
console.log("Message Two");
console.groupCollapsed("Grand_child_group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2")
console.log("Message One");
console.log("Message Two");
console.groupEnd();


// Console table
console.table(["ahmed", "Aya", "Ahmed", "mohamed", "Jamal"]);
// Stop Code Js
// I Think By Comment
console.log("Iam In Console");
document.write("Iam In Page \n");
console.log("-------------------");


// Console repeat 
var message = "Hello, world! \n";
var repeatedMessage = message.repeat(3); // Repeats the message 3 times
document.write(repeatedMessage);
console.groupEnd();



// assignment 9 To 17
// Variables
console.group("9 to 17");
var Number_one = 10;
var Number_two = 20;
console.log(Number_one + "" + Number_two);
console.log(typeof (Number_one + "" + Number_two));
console.log(`${Number_one}${Number_two}`);
console.log(typeof `${Number_one}${Number_two}`);
console.log(Number_one
    + "\n" + Number_two);
console.log(`${Number_one}
${Number_two}`);
console.log("-------------------");


// Output The Result Without modifier the Js File
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


// Without Template Literals
console.log("\`I\' In"
    + "\n" + "\\\\"
    + "\n" + "Love \\\\ \"\"\" \'\'\'"
    + "\n" + "++ With ++"
    + "\n" + "\"\" Javascript \"\" \`\`"
);
console.log(`
\`I\' In 
\\\\
Love \\\\ \"\"\" \'\'\'
\"\" Javascript \"\" \`\`
\"\" Javascript \"\" \`\`
`); // With The Template Literals
console.groupEnd();
////////////////////////////////////////



// assignment 18 to 22
console.group("18 To 22");
// Replace ? With Arithmetic Operators

console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0
console.log(((10 + 20 + 15) % 3) * 190 * 10 * 400); // 0


// Return Number 6 With The Six Methods
var num = 3;
console.log(num + num); // 6
console.log(num * --num); // 6
console.log(num * ++num); // 6
console.log(num * num - num); // 6
console.log(num ** --num - ++num); // 6
console.log(num * ++num - --num * --num); // 6
console.log(++num ** num / num - num); // 6
// With The Math Object
// console.log(Math.pow(num,--num) - ++num); // 6
// console.log(Math.sqrt((num * --num) * (num * ++num))); // 6
// console.log(Math.sqrt(Math.pow(num, --num) * num + Math.pow(++num, --num) * num)); // 6

// Return Number 20 With The Five Methods
var num = "10";
console.log(+num + +num); // 20 => First In Modulo
console.log(++num * --num - num * --num); // 20
console.log(++num * num - --num * num + num % --num); // 20
console.log(++num + num % num * num + num + --num % --num + num % --num); // 20
console.log(num + num + ++num + num % --num); // 20
console.log(num + --num + num + --num); // 20
console.log(num * num + num); // 20
console.log("-------------------");

// Points
var points = 10;
points += 3;
console.log(points); // 13 
points -= 5;
console.log(points); // 8
console.groupEnd();



// assignment 23 to 26
console.group("23 To 26");

// Print 100000 In 13 Method
console.log(100_000);
console.log(1e5);
console.log(10 ** 5);
console.log(Math.pow(10, 5));
// console.log(10 * 10000);
// console.log(1e10 / 1e5);
// console.log(100 * 100 + 100000 - 10000);
// console.log(Math.sqrt(10**10));
// console.log(Math.pow(10,2) * 1000);
// console.log(1e10 / 1e5);
// console.log(1e3 * 1e2);
// console.log(Math.pow(10, 10-5));
// console.log(Math.pow(10,6) - 9e5);
// console.log(parseInt("100000 Abdellah"));
// console.log(Math.min(1e5, 1e10,1e6));
// console.log(Math.max(1e5, 1e4,1e3));
// console.log(Math.trunc(1e5,431));
// console.log(Math.floor(100_000.01));
// console.log(Math.ceil(1_00_000.1) - true);
console.log(Math.round(1_00_000.4));
console.log(Math.ceil(99999.01));
console.log(Math.trunc(parseFloat("100000,3 abdellah")));
console.log("-------------------");

// Use MIN_SAFE_INTEGER
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Use MAX_SAFE_INTEGER To Get 16
/* Methods By Me:
console.log(Math.pow(true + true, Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER));

console.log(Math.pow(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER, true + true) * 
Math.pow(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER, true + true));

console.log(Math.pow(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER, true + true + true + true) );

var number = Number.MAX_SAFE_INTEGER;
var x = 0;
do {
    var number = Math.trunc( number / 10);
    var x = x + 1;
}while(number !=0);
console.log(x); 16
*/
console.log(`${Number.MAX_SAFE_INTEGER}`.length);
console.log("-------------------");

// Get 100 & 100,57
var MyVar = "100.56789 views";
console.log(parseInt(MyVar));
console.log(Number((parseFloat(MyVar)).toFixed(2)));
console.log("-------------------");

// Use isInteger & Write Any Number & Use Last Propriety
var num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// console.log(parseInt(MyVar) / ((`${num}`.length + `${num}`.length + +true) * num) );
// console.log(`${num}`.length);
// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
console.log("-------------------");

// Get The Needed With The Five Methods
var flt = 10.4;
console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(Math.round(flt));
console.log(Number(flt.toFixed(0)));
console.log(parseInt(flt))
console.log(Math.trunc(--flt) + true);
console.log("-------------------");

// Get The Number Between 1 To 4
console.log(Math.floor(Math.random() * 4) + 1); //  1 || 2 || 3 || 4
console.groupEnd();



// assignment 27 To 30 
console.group("27 To 30 ");

// Get e With 6 Method
var a = "Elzero";
console.log(a[0].toLowerCase()); // e
console.log(a.charAt(0).toLowerCase()); // e
console.log(a.slice(-6, -5).toLowerCase()); // e
console.log(a.substring(0, 1).toLowerCase()); // e
console.log(a.substr(0, 1).toLowerCase()); // e
console.log(a.slice(0, 1).toLowerCase().repeat(3)); // eee
console.log("-------------------");

// Get The Needed
var word = "Elzero";
var letterZ = "z";
var letterE = "e";
var letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
console.groupEnd();



// assignment 31 To 32
console.group("31 To 32");

// Get The Needed
console.log(100 == "100"); // True
console.log(100 < 1000); // True
console.log(110 > 100 > 10 < 20); // True
console.log(-10 !== "-10"); // True
console.log(!(-50 >= +"-40")); // True
console.log(!(10 === -"-40")); // True
console.log(!(10 < "10")); // True
console.log(!(20 < false)); // True
console.log("-------------------");

// console.log( typeof -50 ==  typeof +"-40"); // True
// console.log(!(-50 ===  !+"-40")); // True

// Get The Needed By Using Only variables && Operators One Time In Six Solutions
var a = 10;
var b = 20;
console.log(a != b); // True
console.log(a < b); // True
console.log(a !== b); // True
console.log(typeof a == typeof b); // True
console.log(a <= b); // True
console.log(b > a); // True

console.log(a[1] === b[1]); // True
// console.log(a <= b); // True
// console.log(typeof a == typeof b); // True
// console.log(!(a === b)); // True
// console.log(!(b <= a)); // True
console.log("-------------------");

// Get The Needed By Using The Operators
var a = 20;
var b = 30;
var c = 10;

console.log(a < b && a > c || a < b); // True
console.log(a < b != a < c); // True
console.log(!(a == b) && !(a > b) && !(a < c) && !(a < c)); // True

console.log(a != b && a > c || a > b); // True
console.log(a == b && a < c || a < b); // True
console.groupEnd();



// assignment 33 To 37
console.group("33 To 37");
// Get The Needed

var num = 9;

if (num < 10) {
    console.log(`00${num}`);
}
else if (num > 10 && num < 100) {
    console.log(`0${num}`);
}
else {
    console.log(num);
}

// Get The Needed
var num1 = 9;
var str = "9";
var str2 = "20";

if (num == str) {
    console.log(" ${num1} Is The Same Value As ${str} ");
}
if (num1 !== str) {
    console.log(" ${num1} Is The Same Value As ${str} But Not The Same Type ");
}
if (num1 !== str2) {
    console.log(" ${num1} Is Not The Same Value OR The Same Type ${str} ");
}
if (str != str2) {
    console.log(" ${str} Is The Same Type As ${str2} But Is Not The Same Value ");
}
console.log("-------------");

// Get The Needed 

var num1 = 10;
var num2 = 30;
var num3 = "30";

if ((num3 > num1 && num3 !== num2) &&
    (num3 > num1 && num2 !== num3) &&
    (num1 !== num3 && num3 !== num2)) {
    console.log(`"${num3} Is Large Then ${num1} And Value Is The Same As ${num3} And Type String Not The Same Type As Number "
"${num3} Is Large Then ${num1} And Type String Not The Same Type As Number"
"${num3} value And Type Not The Same As ${num1} And Type Not The Same Type As ${num2}" `);
}
else {
    console.log("No Condition Here");
}

// Get Seven True

var number1 = 11;
var number2 = 0;
var number3 = 11;
var number4 = 43;

// Condition One
if (number1 > number2) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Two
if (number1 > number2 && number1 < number4) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Three
if (number1 > number2 && number1 === number3) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Four
if ((number1 + number2) < number4) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Five
if ((number1 + number3) < number4) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Six
if ((number1 + number2 + number3) < number4) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Seven
if (number4 - (number1 + number3) + number2 === 21) {
    console.log("true");
} else {
    console.log("false");
}

// Condition Seven => I Make A Mistake 
if (number4 - (number1 + number2) + number3 === 21) {
    console.log("true");
} else {
    console.log("false");
}
console.groupEnd();



// assignment 38 To 39
console.group("38 To 39");
// Get The Needed

var day = "  friday  ";

switch (day) {
    case "  friday  ":
        day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
        console.log(day);
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Tuesday":
        console.log("Available 10:00 AM To 5:00 PM");
        break;
    case "Thursday":
        console.log("Available 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("Available 10:00 AM To 7:00 PM");
        break;
    default: console.log("Unknown Day");
}
console.groupEnd();


// assignment 39 To 47
console.group("39 To 47");

// Get  ["Ahmed", "Elham", "Osama"]
var myFriend = ["Ahmed", "Elham", "Osama", "Gamal"];
var num = 3;

myFriend.pop();
console.log(myFriend); // ["Ahmed", "Elham", "Osama"]
myFriend.length = num;
console.log(myFriend); // ["Ahmed", "Elham", "Osama"]

// Do Not Touch The Slice Method && Get ["Eman", "Osama"]
var friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
// friends.length = friends.length - friends.includes("Gamal");
console.log(friends);

// Write A Signal Code
var arrOne = ["C", "D", "X"];
var arrTwo = ["A", "B", "Z"];
var finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Write A Signal Code && Can Write 0
var website = "Go";
var words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// Tap "Found" If needle Exist
var needle = "JS";
var haystack = ["PHP", "JS", "Python"];

if (haystack[1] == needle) {
    console.log("Found");
}

if (haystack.includes(needle) === true) {
    console.log("Found");
}

if (haystack.indexOf(needle)) {
    console.log("Found");
}

haystack.shift();
haystack.pop();
if (haystack == needle) {
    console.log("Found");
}

// Do Not keyNumber && Get The Needed
var arr1 = ["A", "C", "X"];
var arr2 = ["D", "E", "F", "Y"];
var allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(-(arr1.length)).join("").toLowerCase();

console.log(allArrs); // fxy
console.groupEnd();

// assignment 48 To 53
console.group("48 To 53");

var start = 10;
var end = 100;
var exclude = 40;
for (var i = start; i <= 100; i += start) {
    if (i == exclude) {
        continue;
    } else {
        console.log(i);
    }
}

// Stop In 3 
var start = 10;
var end = 0;
var stop = 3;
for (var i = start; i >= end; i--) {
    if (i < start) {
        console.log(`0${i}`);
    } else {
        console.log(`${i}`);
    }
    if (i == stop) {
        break;
    }
}

// Get The Needed Do Not Touch Number Keyboard

var startTwo = 1;
var endTwo = 6;
var breaker = 2;
for (var i = startTwo; i <= endTwo; i++) {
    console.log(`${i}`);
    for (var j = breaker; j < endTwo; j += breaker) {
        console.log(`-- ${j}`);
    }
}
//  Get The Needed

var index = 10;
var jump = 2;
var end = 0;

for (var i = end; i < index - jump; i += jump) {
    console.log(index - i);
}
var i = index;
for (; ;) {
    if (i >= end + jump + jump) {
        console.log(i);
    }
    if (i === end + jump + jump) {
        break;
    }
    i -= jump;
}

//  Get The Needed Without Using Numbers Or letters

var friend = ["Ahmed", "Sayed", "Eman", "Mohamed", "Ameer", "Osama", "Sameh"];
var letter = "a";
var x = letter.length - letter.length;
for (var i = letter.length - letter.length; i < friend.length; i++) {
    if (friend[i].startsWith(letter.toUpperCase())) {
        continue;
    }
    ++x;
    console.log(`"${x} => ${friend[i]}"`);
}

// Get The "ELzERo"
var start = 0;
var SwapNumber = "elZerO"; // split
console.log(SwapNumber);
var result = "";

for (var i = start; i < SwapNumber.length; i++) {
    if (SwapNumber[i].toLowerCase() === SwapNumber[i]) {
        result += SwapNumber[i].toUpperCase();
    } else {
        result += SwapNumber[i].toLowerCase();
    }
}
console.log(result); // join

// Get The Needed =>  2 3 4

var start = 0;
var mix = [1, 2, 3, "A", "B", "C", 4];

for (var i = start.toString().length; i < mix.length; i++) {
    if (mix[i] = Number(mix[i])) {
        console.log(mix[i]);
    }
}
// Methods => isNaN(start) | start.toString.length
console.groupEnd();


// assignment 54 To 56
console.group("54 To 56");

// Get The Needed Without Numbers And Words That begin With "A"

var friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany", "Sameh"];
var index = 0;
var counter = 0;

while (index < friends.length) {
    if (typeof friends[index] !== "number" && friends[index].startsWith("A") === false) {
        console.log(`"${++counter} => ${friends[index]}`);
    }
    index++;
}

index = 0;
counter = 0;
while (index < friends.length) {
    if (typeof friends[index] === "number" || friends[index].startsWith("A") === true) {
        index++;
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}`);
    index++;
}

index = 0;
counter = 0;
do {
    if (typeof friends[index] === "number" || friends[index].startsWith("A") === true) {
        index++;
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}`);
    index++;
} while (index < friends.length);
console.groupEnd();


// assignment 57 To 63
console.group("57 To 63");

// Get The Needed By Function 
function sayHello(theName, theGender) {
    if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

sayHello("Ahmed");

// Get The Needed => Calculate Function

function calculate(firstNum = 0, secondNum = 0, operation = "add") {
    if (operation === "subtract") {
        return firstNum - secondNum;
    } else if (operation === "multiply") {
        return firstNum * secondNum;
    } else {
        return firstNum + secondNum;
    }
}
console.log(calculate(20, 30, "subtract"));
console.log(calculate(20, 30, "add"));
console.log(calculate(20, 30));
console.log(calculate(20, 30, "multiply"));

// Get The Needed => AgeInTime Function

function AgeInTime(age) {
    if (age > 10 && age < 100) {
        console.log(`${age} Years`);
        console.log(`${age * 12} Months`);
        console.log(`${age * 12 * 4} Weeks`);
        console.log(`${age * 365} Days`);
        console.log(` ${age * 365 * 24} Hours`);
        console.log(`${age * 365 * 24 * 60} Minutes`);
        console.log(`${age * 365 * 24 * 3600} Seconds`);
    }
    else {
        console.log("Age Out Of Range");
    }
}
AgeInTime(31);

// Get The Needed In Html Page => Select
function CreateSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (var i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}{">${i}</option>`);
        if (i == 2005) {
            document.write(`<option selected value="${i}{">${i}</option>`);
        }
    }
    document.write(`</select>`);
}
CreateSelectBox(1900, 2023);

// Get The Needed

function multiply(...numbers) {
    var multiple = 1;
    for (var i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "string") {
            multiple *= Math.trunc(numbers[i]);
        }
    }
    return multiple;
}
console.log(multiply(100, 10, "B"));
console.groupEnd();


// assignment 63 To 70
console.group("63 To 70");
// Get The Needed
function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        zName = zName.split(" ");
        return `Hello ${zName[0] + " " + zName[1][0]}.`;
    }
    function ageWithMessage() {
        // var zAge = "38 Is My Age".split(" ");
        // return `Your Age Is ${zAge[0]}`;
        return `Your Age ${parseInt(zAge)}`;
    }
    function countTwoLetter() {
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    }
    function fullDetails() {
        return `${namePattern()}, ${ageWithMessage()}, ${countTwoLetter()}`;
    }
    return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Abdellah Karani", "19 Is My Age", "Maroc"));

// Translate To Arrow Function
function itsMe() {
    return `I am A Normal function`;
}
// With Regular Function
var itsMe = function () {
    return `I am A Regular function`;
}
// With Arrow Function
var itsMe = _ => `I am A Arrow function`;
console.log(itsMe());

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
// With Regular Function
var urlCreate = function (protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
// With Arrow Function
var urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "nts", "org"));

// With Regular Function
var checker = function (name) {
    return function (status) {
        return function (salary) {
            return status = "Available" ? `${name} My Salary Is ${salary}` : `I Am Not Available`;
        };
    };
}
// With Arrow Function
var checker = (name) => (status) => (salary) =>
    status === "Available" ? `${name} My Salary Is ${salary}` : `I Am Not Available`;
console.log(checker("Abdellah")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());

// Get The Needed
function specialMix(...data) {
    var sum = "";
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        sum = parseInt(data[i]);
        if (+sum * 0 == 0) {
            result += +sum;
        }
    }
    if (result == 0) {
        return `All Is Strings`;
    } else {
        return result;
    }
}
console.log(specialMix(10, 20, 10));
console.log(specialMix("10Testing", "20Test", "10"));
console.log(specialMix("10Testing", "Test", "10"));
console.log(specialMix("Testing", "Test", "ee"));
console.groupEnd();


// assignment 71 To 78
// Get The Needed
console.group("71 To 78");
var mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
mix = mix.map(function (ele) {
    return typeof ele == "number" ? "" : ele;
}).reduce(function (acc, value) {
    return acc + value;
});
console.log(mix); // Elzero


// Delete The Duplicated Letters
var myString = "EElllzzzzzzzeroo";
var newArr = myString.split("").filter(function (ele, index) {
    return myString.indexOf(ele) == index;
}).reduce(function (acc, value) {
    return acc + value;
});
console.log(newArr); // Elzero


// Get The Elzero Do Not Use Flat()
var myArray = ["E", "l", "z", ["e", "r"], "o"];
var newArr = myArray.reduce(function (acc, value) {
    return acc + value;
}).split("").filter(function (ele) {
    return ele == "," ? "" : ele;
}).reduce(function (acc, value) {
    return acc + value;
});
console.log(newArr); // Elzero




// Get / [-1, -10, 10, 20, -5, -3]
var numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

var numsRev = numsAndStrings.map(function (ele) {
    return -ele;
}).filter(function (a) {
    return isNaN(a) == false;
});
console.log(numsRev);



// Getting By Reduce
var nums = [2, 12, 11, 5, 10, 1, 99]; // 500

var sum = nums.reduce(function (acc, CurrentValue) {
    return CurrentValue % 2 != 0 ? acc + CurrentValue : acc * CurrentValue;
});
console.log(sum);
console.groupEnd();


// assignment 78 To 85
console.group("78 To 85");
// Get The Needed

// Create Your Object Here

var member = {
    member: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name ${this.member}, My Age Is ${member.age}, I Line In ${this.country}`;
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Method One
var objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"
// Method Two
var objMethodTwo = new Object({
    property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"
// Method Three
var objMethodThree = Object.create({
    property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"
// Method Four
var objMethodFour = Object.assign({}, {
    property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"


// Use Assign Method
var a = 1;
var threeNums = {
    b: 2,
    c: 3,
    d: 4,
};
var twoNums = {
    e: 5,
    f: 6,
};
// Create Your Object Here in One Line
var finalObject = Object.assign({ a }, threeNums, twoNums);
console.log(finalObject);
/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/
console.groupEnd();

// assignment 85 To 93
console.group("85 To 93");
// Get The Needed In 15 Way Possible
var myElement;
myElement = document.querySelector("#elzero");
myElement = document.querySelector(".element");
myElement = document.querySelector("[name='js']");
myElement = document.querySelector("div");
myElement = document.querySelectorAll("div")[0];
myElement = document.querySelectorAll("#elzero")[0];
myElement = document.querySelectorAll(".element")[0];
myElement = document.querySelectorAll("[name='js']")[0];
console.log(myElement);
myElement = document.getElementsByClassName("element")[0];
myElement = document.getElementById("elzero");
myElement = document.getElementsByTagName("div")[0];
myElement = document.getElementsByName("js");
myElement = document.body.children[0];
myElement = document.body.firstElementChild;
myElement = document.body.lastElementChild;
myElement = document.body.childNodes[1];
console.log(myElement);

// Change The Source And Alt For The Three Image Using Loop
for (var i = 0; i < 2; i++) {
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    document.images[i].alt = "Elzero Org";
}

// Repeat Div Element 10 Times
console.log("-------------");
var myDivRepeat = document.getElementsByName("repeat");
document.write("<div style='display: flex;'>");
for (var i = 0; i < 10; i++) {
    var myDivRepeat = document.createElement("div");
    var myImage = document.createElement("img");
    var myText = document.createTextNode("Hello From Js");
    myImage.alt = "Elzero Org";
    myImage.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImage.style.background = "blue";
    myImage.setAttribute("decoding", "async")
    myDivRepeat.appendChild(myImage);
    myDivRepeat.appendChild(myText);
    document.body.appendChild(myDivRepeat);
}
document.write("</div>");


// Get The Dollar In Egypt Currency
console.log("-------------");
var myInput = document.querySelector("[name='dollar']");
var myDivCurr = document.getElementsByClassName("result")[0];
myInput.oninput = function () {
    var curr = myInput.value;
    if (myInput.value >= 0) {
        myDivCurr.textContent = "{" + curr + "} USD Dollar = {" + (curr * 15.6).toFixed(2) + "} Egyptian Pound";
    } else {
        myDivCurr.innerHTML = "<p style='color: red;'>Error Value</p>";
    }
}


// No Using The Values or True or False
console.log("-------------");
var FirstDiv = document.querySelector("[title='one']");
var SecondDiv = document.querySelector("[title='two']");

var tmp = FirstDiv.title;
FirstDiv.title = SecondDiv.title;
SecondDiv.title = tmp;

tmp = SecondDiv.textContent;
SecondDiv.textContent = FirstDiv.textContent;
FirstDiv.textContent = tmp + " 2";


// Set The Attribute If Exit If Not Add Him
console.log("-------------");
var divImages = document.querySelector(".images");
var len = divImages.children.length;
for (var i = 0; i < len; i++) {
    var myImage = divImages.children[i];
    if (myImage.hasAttribute("alt")) {
        myImage.alt = "Old";
    } else {
        myImage.setAttribute("alt", "Elzero New");
    }
    console.log(myImage);
}
console.log("-------------");


// Challenge For Create Elements 

var myFormCha = document.getElementById("cha");
var myNumberInput = document.getElementsByClassName("input")[0];
var WordContent = document.querySelector("[name='texts']");
var myElement = document.createElement("results");
myElement.className = "challenge";
myElement.style.display = "flex";
myElement.style.justifyContent = "space-between";
myElement.style.flexWrap = "wrap";
myFormCha.onsubmit = function (ele) {
    ele.preventDefault();
    document.querySelectorAll(".box").forEach(ele => ele.remove());
    if (myNumberInput.value > 0) {
        for (var i = 0; i < myNumberInput.value; i++) {
            var myParagraph = document.createElement("p");
            myParagraph.style.fontSize = "20px";
            myParagraph.style.background = "orange";
            myParagraph.style.padding = "10px 50px";
            myParagraph.textContent = WordContent.value;
            myParagraph.className = "box";
            myElement.appendChild(myParagraph);
        }
    } else {
        alert("Error");
    }
    document.body.appendChild(myElement);
}


// assignment 93 To 101
console.group("93 To 101");
// Open The Link That Contain "open" Class And Content "Elzero"
var items = document.querySelectorAll(".openLink");
items.forEach(function (ele) {
    if (ele.classList.contains("open") && ele.textContent == "Elzero") {
        ele.click();
    }
});


// Challenge
var myContent = document.querySelector(".classes-list div");
var currentEle = document.querySelector("[title='Current']");
var addInput = document.querySelector(".classes-to-add");
var removeInput = document.querySelector(".classes-to-remove");

function AddRemEle() {
    // Remove All Element When Reload The Page
    document.querySelectorAll(".classes-list div span").forEach(ele => ele.remove());

    // Add Classes or Remove Classes
    this.value.trim().split(" ").forEach(function (ele) {
        if (addInput.value)
            currentEle.classList.add(ele.toLowerCase().trim());
        if (removeInput.value)
            currentEle.classList.remove(ele.toLowerCase().trim());
    });
    this.value = "";

    // Add Spans or Remove Spans
    if (currentEle.classList.length) {
        [...currentEle.classList].sort().forEach(function (ele) {
            var span = document.createElement("span");
            span.textContent = ele;
            myContent.append(span);
        });
    } else myContent.textContent = "No Classes To Show";
}
addInput.onblur = AddRemEle;
removeInput.onblur = AddRemEle;


// Delete Nodes And Add Nodes
function AddDiv(word, ele) {
    ele.textContent = word;
    ele.setAttribute("data-value", word);
    ele.title = `${word} Element`;
    ele.className = word.toLowerCase();
}
var node = document.querySelector(".our-element");
node.nextElementSibling.remove();
var afterDiv = node.cloneNode();
var beforeDiv = node.cloneNode();
AddDiv("End", afterDiv);
AddDiv("Start", beforeDiv);
node.after(afterDiv);
node.before(beforeDiv);


// Get Word "Elzero" 
console.log(document.querySelector(".getElzero").lastChild.nodeValue.trim());


// Get The Type Of All Element
var items = document.querySelector(".search").children;
for (var i = 0; i < items.length; i++) {
    console.log(`This Is ${items[i].nodeName}`);
}
console.groupEnd();


// assignment 101 To 110
console.group("101 To 110");

// Use Prompt And Print The Numbers
// var nbr = prompt("Print Number From - To");
nbr = "12-10"
nbr = nbr.split("-");
var min = nbr[0] > nbr[1] ? nbr[1] : nbr[0];
var max = nbr[0] > nbr[1] ? nbr[0] : nbr[1];
for (var i = min; i <= max; i++) console.log(Number(i));

// Create A popup

function create_popup() {
    var myDiv = document.createElement("div");
    var myTitle = document.createElement("h3");
    var myP = document.createElement("p");
    var myPopup = document.createElement("p");
    // Start Styling The Element
    myTitle.textContent = "Welcome";
    myP.textContent = "Welcome To Our Translation Project";
    myPopup.textContent = "X";
    myDiv.style.cssText = "position: relative; padding: 30px; background-color: #eee;\
    text-align: center; margin: 50px;";
    myTitle.style.cssText = "font-size: 20px; margin-bottom: 20px;";
    myPopup.style.cssText = "position: absolute; right: 0; top: -25px;\
    color: white; padding: 10px; background-color: red; border-radius: 100%;\
    cursor: pointer;";
    myPopup.className = "popup-closer";
    myDiv.className = "popup";
    // Append The Element
    myDiv.appendChild(myTitle);
    myDiv.appendChild(myP);
    myDiv.appendChild(myPopup);
    document.body.appendChild(myDiv);
}
// var handler = setTimeout(function() {
    create_popup();
    var popup_closer = document.querySelector(".popup-closer");
    var popup = document.querySelector(".popup");
    popup_closer.addEventListener("click", function() {
        console.log("Hello World");
        popup.remove();
    });
// }, 5000);


// MAke A Counter
var counter = document.querySelector(".counter");
var handler = setInterval(function() {
    counter.textContent -= 1;
    if (counter.textContent == 5) {
        clearInterval(handler);
        // window.open("https://elzero.org", "_blank");
        // window.open("https://elzero.org", "_blank", "width=500,height=500");
    }
} ,1000);
clearInterval(handler);
console.groupEnd();

console.group("110 To 115");
console.log("Show The Chanlages"); // chalange12.html
console.groupEnd();



// assignment 115 To 115
console.group("115 To 122");
// Get The Nedded
var myNumbers = [1, 2, 3, 4, 5];
var [a, , , , e] = myNumbers;
console.log(a * e); // 5

// Get The Needded
var mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
var [a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// Get The Needded
var arr1 = ["Ahmed", "Sameh", "Sayed"];
var arr2 = ["Mohamed", "Gamal", "Amir"];
var arr3 = ["Haytham", "Shady", "Mahmoud"];
// var [, a, b]= arr3;
// var [c, , ] = arr1;
// var [[, a, b], [c, , ]] = [arr3, arr1];
var [c, , , , a, b] = arr1.concat(arr3);
console.log(`My Best Friends: ${a}, ${b}, ${c}`); // My Best Friends: Shady, Mahmoud, Ahmed

// Get The Needded
var member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

var {age: a, working: w, country: c, hobbies: [h1, , h3]} = member;
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`);
// I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// Get The Nedded
var game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
};

console.log(Object.keys(game.releases)); // ['Oath In Felghana', 'Ark Of Napishtim', 'Origin']
console.log(Object.values(game.releases)); //  ["USA", "Japan"] 20USD 10USD 30USD

var {title: t, developer: d} = game;
var [[u, j], {US: u_price, JAP: j_price}, or] = Object.values(game.releases);
var [o, a] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// Get The Nedded
var chosen = 0;

var myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

var {title: t, age: a, available: av, skills: [ , c]} = myFriends[chosen];
av = av ? "Available" : "Not Available";
console.log(t);
console.log(a);
console.log(av);
console.log(c);
console.groupEnd();




// Map And Set
console.group("123 To 133");

// Get The Nedded for Set
var setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
var iterator = setOfNumbers.values();
iterator.next(); iterator.next();
console.log(iterator.next().value); // 2

// Another Solution For Set
var setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers, ele => ele)[2]);


// Get The Nedded for Sorting The Array
var myFriend = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriend)].sort()); // ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// Get The Nedded For Convert Object To Map
let myInfo = {
    username: "Abdellah",
    role: "Admin",
    country: "Morocco",
};
var newMap = new Map();
var myInfo_values = Object.values(myInfo);
var myInfo_keys = Object.keys(myInfo);
for (var i = 0; i < myInfo_values.length; i++) {
    newMap.set(myInfo_keys[i], myInfo_values[i]);
}
console.log(newMap.size); // 3
console.log(newMap.has("role")); // true

// Another Solution For Convert Object To Map
console.log(Object.entries(myInfo)); // 3 Arrays Each One With Key And Value
console.log(new Map(Object.entries(myInfo))); // This Another Method For set Information In The map


// Get The Nedded --> is Print 123 Using Set and Spread Operator
var theNumber = 100020003000;
console.log(Number(Array.from([...new Set([...`${theNumber}`])], ele => ele != 0 ? ele: "").join(""))); // 123
console.log(+(Array.from([...new Set([...`${theNumber}`])], ele => ele != 0 ? ele: "").join(""))); // 123
console.log(+[...new Set(`${theNumber}`)].sort().slice(true).join("")); // true --> 1


// Convert String To Array With 5 Methods --->  ['E', 'l', 'z', 'e', 'r', 'o']
var theName = "Elzero";
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(new Array(...theName));
console.log(Array.from(theName, ele => ele));
console.log(theName.split(""));
console.log(Object.assign([], theName));


// Get The Nedded
var chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Steps 
/**
 * Get The Numbers in Array and String in Array
 * Make Another Array That Contain Previous Two Arrays
 * Set The Numbers In Begin And Charcter In The Last
 * Use The copyWithin To Replace Numbers In Charcters
 */
var str = chars.filter(ele => !Number(ele));
var nums = chars.filter(ele => Number(ele));
chars = [];
chars.push(...nums, ...str);
chars.copyWithin(0, nums.length,  nums.length * 2); 
console.log(chars);


// Get The Nedded
var numsOne = [1, 2, 3];
var numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]); // [1, 2, 3, 4, 5, 6]
console.log([...new Set(numsOne), ...new Set(numsTwo)]); // [1, 2, 3, 4, 5, 6]
console.log(numsOne.concat(numsTwo)); // [1, 2, 3, 4, 5, 6]
numsOne.push(...numsTwo);
console.log(numsOne);



