// challenge 1
console.group("challenge 1");
var a = 10;
var b = "20";
var c = 80;

console.log(++a + +b++ + +c++ - +a++);
// 11 20 80 11   increment[Pre Post Post Post]  [Add Operator] 

console.log(++a + -b + +c++ - -a++ + +a);
// 13 -21 81 -13 14  increment[Pre Post Post]  [Add Operator] 

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // Multiplication Is First
//  81 21 13 * 21 22 * 13 12 1  decrement[Pre Pre Pre] increment[Post] [All Is Add Operator]
console.groupEnd();

/*
// [a++] [+]
-- [a++]
---- Value 
---- Explain
-- [+]
---- Explain
*/



// challenge 2 
console.group("challenge 2");
var d = "-100";
var e = "20";
var f = 30;
var g = true;

// Only Use Variable Value
// Do Not Use Variable Twice[Do Not Repeat Variable]  

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 173
console.groupEnd();




// Challenge 3
console.group();
var a = 21;
var b = 20;
var c = "_";
console.log(c + a + c + b + a + c + b + a + c + b + a + c + b + c); // _21_2021_2021_2021_20_
console.groupEnd();




// Challenge 4
//  Number Challenge
console.group("challenge 3");
var a = 1_00;
var b = 2_00.5;
var c = 1e2;
var d = 2.4;

// Find Smallest Number In All Variables And Return Integer Number
console.log(Math.trunc(d));
console.log(Math.floor(d));

// Use Variables a + d On One Time To Get The Needed Output && Do Not Use Any Number
console.log(Math.pow(100, Math.trunc(d)));

// Get Integer "2" From d Variables From 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(Number(d.toFixed()));
console.log(Math.round(d));


// Use Variables b + d To Get The Needed In One Time

console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String

console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 => Number
console.groupEnd();




// Challenge 4
console.group("Challenge 4");

/*
String Challenge
All Solution Must Be In One Chain
You Can Use Concatenate
*/
var a = "Elzero Web School";

// Includes This Methods In Your Solution [Slice, CharAt]
console.log(a.slice(2, 3).toUpperCase() + a.slice(3, 6)); // Zero
console.log(a[2].toUpperCase() + a.slice(3, 6)); // Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(13, 14).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 7)}${a.substr(-6, 6)}`); // Elzero School 
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); // Elzero School 

// Return Array Elzero
console.log(a.split(" ", 1)); // Elzero

// Solution Must Be Dynamic And String May Change
console.log(a.substring(0, 1).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.substring(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOLl

console.log(a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.slice(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl
console.groupEnd();




// Challenge 5
console.group("Challenge 5");

// Write With The Ternary Condition
var a = 10;
// If Condition
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Ternary Condition
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 To 40")
        : a > 40
            ? console.log("> 40")
            : console.log("Unknown");

// Get The Good
var st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
    console.log("Good");
} else {
    console.log("Bad");
}

st.includes("W") === true ? "w" : "";
// W position May Change && Get Good
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
} else {
    console.log("Bad");
}

// Get Good
if (st.length !== "string") {
    console.log("Good");
} else {
    console.log("Bad");
}

// Get Good
if (typeof (st.length) === "number") {
    console.log("Good");
} else {
    console.log("Bad");
}

// Get Good
if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
} else {
    console.log("Bad");
}
console.groupEnd();




// Challenge 6 
console.group("Challenge 6");
// Transfer To Switch Case

var job = "Support";
var salary = 0;

// If Condition
if (job === "manager") {
    salary = 8000;
}
else if (job == "IT" || job == "Support") {
    salary = 6000;
}
else if (job == "Developer" || job == "Designer") {
    salary = 7000;
}
else {
    salary = 4000;
}

// Switch Case
switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log(salary);
}

var holidays = 0;
var money = 0;

// If Condition
if (holidays === 0) {
    money = 5000;
    console.log(`Your Money Is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money Is ${money}`);
}
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money Is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money Is ${money}`);
}
else if (holidays == 5) {
    money = 0;
    console.log(`My Money Is ${money}`);
}
else {
    money = 0;
    console.log(`My Money Is ${money}`);
}
console.groupEnd();




// Challenge 7
console.group("Challenge 7");

// Get The Needed
var zero = 0;
var counter = 3;
var my = ["Ahmed", "Mazero", "Elham", "Osama", "gamal", "Ameer"]
my = my.reverse();
console.log(my);

console.log(my.slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"]  counter = 2


console.log(my.slice((++counter), (++counter + ++zero))); // ["Elham", "Mazero"]  
// counter = 4, zero = 1

console.log(my[--counter].slice((--counter - ++zero), zero)
    + my[zero + counter].slice(zero)); // "Elzero"
// zero = 2 counter = 2

console.log(my[zero - counter].slice(zero + counter)
    + my[zero].slice(zero - counter, counter - --zero)); // "rO"
console.groupEnd();



// Challenge 8
console.group("Challenge 8");

var myAdmins = ["Ahmed", "Osama", "Sayed", "Abdellah", "Stop", "Samar"];
var myEmploys = ["Amjad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
console.log(myAdmins);
console.log(myEmploys);
var x = 0;

for (var i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] !== "Stop") {
        x += 1;
    } else {
        break;
    }
}
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${x} Admins</div>`);
document.write(`<hr>`);

var nbr = 1;
var numbers = 1;
var y = 0;
do {
    document.write(`<div>`);

    document.write(`The Admin For Team ${nbr} Is ${myAdmins[y]}`);
    document.write(`<h2>Team Members</h2>`);
    for (var j = 0; j < myEmploys.length; j++) {
        if (myAdmins[y][0] === myEmploys[j][0]) {
            document.write(`<p>- ${numbers} ${myEmploys[j]}</p>`);
            numbers += 1;
        }
    }
    numbers = 1;
    document.write(`</div>`);
    document.write(`<hr>`);
    nbr++;
    y++;
} while (nbr <= x);
console.groupEnd();


// Challenge 9
console.group("Challenge 9");

function showDetails(...details) {
    for (var i = 0; i < details.length; i++) {
        // if (typeof details[i] == "boolean") {
        //     var Status = details[i];
        // }
        // if (typeof details[i] == "string") {
        //     var Name = details[i];
        // }
        // if (typeof details[i] == "number") {
        //     var Age = details[i];
        // }
        typeof details[i] == "boolean" ? Status = details[i] : x = 0;
        typeof details[i] == "string" ? Name = details[i] : x = 0;
        typeof details[i] == "number" ? Age = details[i] : x = 0;
    }
    Status == true
        ? console.log(`Hello ${Name}, Your Age Is ${Age}, Your Are Available For Hire`)
        : console.log(`Hello ${Name}, Your Age Is ${Age}, Your Are Not Available For Hire`)
}
showDetails(true, 20, "abdellah");
showDetails(20, true, "abdellah");
showDetails(20, "abdellah", true);
showDetails("abdellah", 20, false);
console.groupEnd();



// Challenge 10
console.group("Challenge 10");
/*
    - One Statement 
    - Convert To Arrow Function
    - Print The Output Argument Can Be Change
*/

var names = function (...names) {
    // Parameter ?
    return `String [${names.join("], [")}] => Done !`;
}
var names = (...names) => `String [${names.join("], [")}] => Done !`;
console.log(names("Abdellah", "Mohamed", "Ali", "Fatima", "Ibrahim"));
// String [Abdellah], [Mohamed], [Ali], [Ibrahim] => Done !


/*
    - Replace ??? In return Statement To Get The Output
    - Create Same Function With Regular Function
    - Use The Array Inside The Argument To Get The Output
*/
var MyNumbers = [20, 50, 10, 60];
var calc = (one, tow, ...nums) => one + tow + nums[Number(Array.isArray(MyNumbers))];
console.log(calc(20, 20, 10, 40)); // 80

var calc = function (one, tow, ...nums) {
    return one + tow + nums[Number(Array.isArray(MyNumbers))];
}
console.log(calc(20, 20, 10, 40));
console.groupEnd();



// Challenge 11
console.group("Challenge 11");
/*
    You Can Use => , _ space True[One Time In The Code]
    You Can Not Use => Numbers And Letters
    You Must Use => Filter + Map + Reduce + Your Knowledge
                    Order Is Not Important + All In One Chain
*/


var myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// var a = true;
var Solution = myString.split("").filter(function (ele) {
    return ele != "," && isNaN(ele);
}).map(function (e) {
    return e == "_" ? " " : e;
}).slice(true, -isNaN(myString)).reduce(function (acc, value) {
    return acc + value;
});
console.log(Solution); // Elzero Web School
console.groupEnd();



// Challenge 12
console.group("Challenge 12");

// The Object To Work With
var myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};
// Code One => How To Get Object Length ?
var objectLength = Object.keys(myFavGames).length; // 3
console.log(objectLength);
var prop = Object.keys(myFavGames); // ['Trinity Universe', 'Titan Quest', 'YS']
console.log(prop);
for (var i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${prop[i]}`);
    console.log(`The Publisher Is ${myFavGames[prop[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[prop[i]]["price"]}`);
    // Check If Nested Object Has Property (bestThree)
    if (Object.hasOwn(myFavGames[prop[i]], "bestThree") == true) {
        console.log("- Game Has Releases");
        console.log(`First => ${myFavGames[prop[i]].bestThree.one}`);
        console.log(`Second => ${myFavGames[prop[i]]["bestThree"].two}`);
        console.log(`Third => ${myFavGames[prop[i]]["bestThree"].three}`);
    }
    console.log("#".repeat(20));
}
console.groupEnd();



// Challenge 12 --> In Another File
console.group("Challenge 12");
console.groupEnd();


// Challenge 13 --> In Another File
console.group("Challenge 13");

var chosen = 3;
var myFriends = [
    {title: "Abdellah", age: 20, avialable: true, skills: ["HTMLL", "CSS", "JS"]},
    {title: "Omaima", age: 30, avialable: false, skills: ["C", "JAVA", "VS"]},
    {title: "Ahmed", age: 40, avialable: true, skills: ["Laravl", "PHP", "COBOL"]},
];

var {title: t, age: a, avialable: ava, skills: [, , last_skill]} = myFriends[chosen - 1];
console.log(t);
console.log(a);
if (ava == true) console.log("Available");
else console.log("Not Available");
console.log(last_skill);
console.groupEnd();


// Challenge 14
console.group("Challenge 14");
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only One Time
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/
var n1 = [10, 30, 10, 20];
var n2 = [30, 20, 10];
console.log([...n1, ...n2].length * Math.max(...n1)); // 210


console.groupEnd();



