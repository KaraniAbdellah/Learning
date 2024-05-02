/* 
- console.log("hello world");
- document.write("hello World");
- window.alert("hello World");
- alert("hello World");
- confirm("hello World");
- prompt("enter Your name");
- Number(prompt("Entre The a Of Equation"));
var cars = ["mercedes", "Volvo", "Honda"];
console.log(cars[0]); // mercedes
*/


/*
// Loop For 
for(var i=0; i<5; i++) {
    var x= prompt("Enter Note Number");
    var m= +x + +m;
}
    condition => i < 5
// Loop Do While
    var i;
    do {
        instruction
        i++;
    }
    while(Condition); 
    condition => i < 10
    // YES => Enter
    // NO  => Go Out

// Loop While
    var i = 0;
    while(condition) { // i < 10
        instruction
        i++;
    }
    condition => i < 10
*/



/* 
// Condition In Js
condition = (Month == "january" || "march");
if(condition) {
    Syntax Code
}
else if(first_number == 0 && second_number == 0) {
    Syntax Code
}
else {
    Syntax Code
}
// Condition In ES6
var x= (condition) ? "true":"false";
var x= (condition && condition) ? "true":"false";

// Function
/*
function greet(person) {
    var cars = "Hello" + " " + person; 
    console.log(cars); // Hello Max
} 
greet("Max");
*/

// Switch
/*
var category = prompt("Enter Please The Category");
switch (category) {
    case First_Value: 
        instruction
    break;
    case Second_Value: 
        instruction
    break;
    case Thirty_Value: 
        instruction
    break;
    default:
        window.alert("This Category Does Not Exist");  
    break;
}
*/

// Array
/*
    var array = ["Abdellah", 20, "Aya", 19, "Ahmed", 12]
    window.alert(array);
    window.alert(array[2]); // Aya
    let emptyArray = [];
    let emptyArray = new Array(4);

    array_one.push("abdellah"); // In Last Array
    array_one.unshift("abdellah"); // In First Array

    array_one.shift(); // Delete First Element In Array
    array_one.pop(); // Delete Last Element
*/

// Array With Two Dimension
/*
var array = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
var i,j;
for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        array[i][j] = 0;
        console.log(i,j,array[i][j]);
    }
}
*/

/*
**    => Exponentiation 
==    => For Comparison value
===   => For Comparison value & Type
=     => For Affectation
!=    => For Different Comparison Value
!==   => For Different Comparison Value & Type
&&    => And
||    => Or 
Math.pow(b,3)    => Exponentiation
[Math.sqrt(d)]   => Racine
*/


/*
// console.time
console.time();
var i;
for(var i = 0; i < 1000; i++) {
    let double = i * 2444;
}
console.timeEnd(); // default: 0.19580078125 ms
*/
function hello() {
    window.alert("hello World \u{1F600}");
}

function ageAndName() {
    var a = prompt("Enter Your Name");
    var b = prompt("Enter Your Age");
    window.alert("Hello" + " " + a + " " + "Your Age Is" + " " + b + " " + "years old.");
}

function Surface_and_Perimeter() {
    var l = prompt("Enter The Length");
    var w = prompt("Enter The Width");
    var p = (+l + +w) * 2;
    var s = (l * w);
    window.alert("The Perimeter Is" + " " + p);
    window.alert("The Surface Is" + " " + s);
}

function Puissance() {
    var x = prompt("Enter X Number");
    var y = prompt("Enter Y Number");
    var p = x ** y;
    window.alert(p);
}

function m_d_s_a() {
    var x = prompt("Enter X Number");
    var y = prompt("Enter Y Number");
    s = x - y;
    a = +x + +y;
    m = x * y;
    d = x / y;
    window.alert("Addition Of The" + " " + x + " " + "And" + " " + y + " " + "Is" + " " + a
        + "\n" + "Subtraction Of The" + " " + x + " " + "And" + " " + y + " " + "Is" + " " + s
        + "\n" + "Multiplication Of The" + " " + x + " " + "And" + " " + y + " " + "Is" + " " + m
        + "\n" + "Division Of The" + " " + x + " " + "And" + " " + y + " " + "Is" + " " + a);
    window.alert(`
    Addition Of The ${x} And ${y} Is ${a}
    Subtraction Of The ${x} And ${y} Is  ${s}
    Multiplication Of The ${x} And ${y} Is  ${m}
    Division Of The ${x} And ${y} Is  ${d}
    `);
}

function Total_Average() {
    var i;
    var m = 0;
    for (var i = 0; i < 5; i++) {
        var x = prompt("Enter Note Number");
        var m = +x + +m;
    }
    window.alert(`Your Total Is ${m} And Your Average Is ${m / 5}`);
}

function Volume_sphere() {
    var rayon = prompt("Enter The Rayon Of The Sphere");
    var volume = (4 * 3.14 * [Math.pow(rayon, 3)]) / 3;
    window.alert("the Volume If rayon = " + rayon + " " + "Is" + " " + volume); // Js
    window.alert(`The Volume If Rayon= ${rayon} Is ${volume}`) // ES6
}

function change_Two_value() {
    var x = prompt("Enter A X Value");
    var y = prompt("Enter A Y Value");
    var x = +x - +y;
    var y = +x + +y;
    var x = +y - +x;
    window.alert(`The New Value Of X Is ${x} And The New Value Of Y Is ${y}`);
}

function Hour_Minutes_Second() {
    var t = prompt("Enter The Value That You Want To Transfer");
    var h = +t / 3600;
    var t = +t % 3600;
    var m = +t / 60;
    var s = +m % 60;
    window.alert(`Number Of Hours Is: ${h}
    Number Of Minutes Is: ${m}
    NUmber Of Seconds Is: ${s}`);
}

function singe() {
    var first_number = prompt("Enter First Number");
    var second_number = prompt("Enter Second Number");
    if ((first_number * second_number) > 0) {
        window.alert("Two Number Have A Same Singe");
    }
    else if (first_number == 0 || second_number == 0) {
        window.alert("Can Not Compare This Two Number")
    }
    else {
        window.alert("Two Have Not Same Singe");
    }
}

function Change_Content() {
    var first_number = prompt("Enter First Number");
    var second_number = prompt("Enter Second Number");

    if ((first_number * second_number) > 0) {
        var New_var = first_number;
        var first_number = second_number;
        var second_number = New_var;
        window.alert(`First Number Is ${first_number} & Second Number Is ${second_number}`);
    }
    else {
        Somme = +second_number + +first_number;
        Multi = first_number * second_number;
        window.alert(`Somme Is ${Somme} & Multi Is ${Multi} `)
    }
}

function calculate_copy() {
    var copy_number = prompt("Enter The Copy That You Take:");
    if (copy_number <= 10) {
        var copy_number = copy_number * 0.30;
    }
    else if (copy_number > 10 & copy_number <= 30) {
        var copy_number = ((copy_number - 10) * 0.25) + 10 * 0.30;
    }
    else if (copy_number > 30) {
        var copy_number = ((copy_number - 30) * 0.2) + 10 * 0.3 + 20 * 0.25;
    }
    window.alert(`Price Is: ${copy_number}`);
}

function category_child() {
    var age = prompt("Enter Your Age Please:");
    if (age < 6) {
        window.alert("Petite In French");
    }
    else if (age >= 6 & age <= 7) {
        window.alert("Poussin In French");
    }
    else if (age >= 8 & age <= 9) {
        window.alert("Pupille In French");
    }
    else if (age >= 10 & age <= 11) {
        window.alert("Minime In French");
    }
    else {
        window.alert("Cadet In French");
    }
}

function category_Note() {
    var i;
    var s = 0;
    for (var i = 0; i < 20; i++) {
        var note = prompt("Enter The Note Number" + " " + i);
        var s = note + s;
    }
    var m = s / 20;
    if (m >= 16) {
        window.alert("Tres Bien In French");
    }
    else if (m < 16 & m >= 14) {
        window.alert("Bien In French");
    }
    else if (m < 14 & m >= 12) {
        window.alert("Assey Bien In French");
    }
    else if (m < 12 & m >= 10) {
        window.alert("Passable In French");
    }
    else if (m < 10) {
        window.alert("Insuffisant In French");
    }
    else {
        window.alert("Error");
    }
    window.alert(`Somme OF Notes Is ${s} & Moyen Is ${m}`);
}

function Second_Degree() {
    var a = Number(prompt("Entre The a Of Equation:"));
    var b = prompt("Entre The b Of Equation:");
    var c = prompt("Entre The c Of Equation:");
    var d = (Math.pow(b, 2) - 4 * a * c);
    if (a == 0 && b == 0 && c == 0) {
        window.alert("No Solution");
    }
    else if (a == 0 && b == 0) {
        window.alert("Error");
    }
    else if (a == 0 && c == 0 || b == 0 && c == 0) {
        window.alert("The Solution Is: 0");
    }
    else if (d == 0) {
        var r = (-b / (2 * a));
        window.alert(`The Result If d = ${d} Is: ${r}`);
    }
    else if (d > 0) {
        var x = (- b - [Math.sqrt(d)]) / (2 * a);
        var y = (- b + [Math.sqrt(d)]) / (2 * a);
        window.alert(`The Result Of  ${a}X^2+${b}X+${c}  Is:  ${x} and ${y} `);
    }
    else if (d < 0) {
        var x = -b / 2 * a;
        var xc = -[Math.sqrt(-d)] / (2 * a);
        var y = -b / 2 * a;
        var yc = +[Math.sqrt(-d)] / (2 * a);
        window.alert(`The Result Of  ${a}X^2+${b}X+${c}  Is:  ${x} + (${xc})i and ${y} + (${yc})i `);
    }
    else {
        window.alert("NaN");
    }
}

function PTTC_if() {
    var category = String(prompt("Enter The Category Please:"));
    var PHT = String(prompt("Enter The Price Please:"));
    // Can Use That
    // var a = "a";
    // var b = "b";
    // var c = "c";
    if (category == "a") {
        var PTTC = PHT + (PHT * 0.07);
    }
    else if (category == "b") {
        var PTTC = PHT + (PHT * 0.2);
    }
    else if (category == "c") {
        var PTTC = PHT + (PHT * 0.25);
    }
    else {
        window.alert("This Category Does Not Exist");
    }
    window.alert("The Price Is" + "  " + PTTC);
}

function PTTC_Switch() {
    var category = String(prompt("Enter The Category Please:"));
    var PHT = String(prompt("Enter The Price Please:"));
    switch (category) {
        case "a":
            var PTTC = PHT + (PHT * 0.07);
            window.alert("The Price Is" + "  " + PTTC);
            break;
        case "b":
            var PTTC = PHT + (PHT * 0.2);
            window.alert("The Price Is" + "  " + PTTC);
            break;
        case "c":
            var PTTC = PHT + (PHT * 0.25);
            window.alert("The Price Is" + "  " + PTTC);
            break;
        default:
            window.alert("This Category Does Not Exist");
            break;
    }
}


function Day_Nbr_switch() {
    var Month = String(prompt("Enter The Month, Please In English:"));
    switch (Month) {
        // Start Month That Is 31 Day
        case "january":
            window.alert("This Is A Month In 31 Day");
            break;
        case "march":
            window.alert("This Is A Month In 31 Day");
            break;
        case "may":
            window.alert("This Is A Month In 31 Day");
            break;
        case "july":
            window.alert("This Is A Month In 31 Day");
            break;
        case "august":
            window.alert("This Is A Month In 31 Day");
            break;
        case "october":
            window.alert("This Is A Month In 31 Day");
            break;
        case "december":
            window.alert("This Is A Month In 31 Day");
            break;
        // Start Month That Is 30 Day
        case "april":
            window.alert("This Is A Month In 30 Day");
            break;
        case "june":
            window.alert("This Is A Month In 30 Day");
            break;
        case "september":
            window.alert("This Is A Month In 30 Day");
            break;
        case "november":
            window.alert("This Is A Month In 30 Day");
            break;
        // Start Month That Is 28 Day
        case "february":
            window.alert("This Has 28 Day");
            break;
        // Specific Case
        default:
            window.alert("Error");
            break;
    }
}

function Day_Nbr_Condition() {
    var Month = String(prompt("Enter The Month, Please In English:"));
    if (Month == "january" || "march" || "may" || "july" || "august" || "october" || "december") {
        window.alert("This Is A Month In 31 Day");
    }
    else if (Month = "april" || "june" || "september" || "november") {
        window.alert("This Is A Month In 30 Day");
    }
    else if (Month = "february") {
        window.alert("This Is A Month In 28 Day ");
    }
    else {
        window.alert("Error");
    }
}

function add_div_multi_Sub() {
    var x = Number(prompt("Enter The First Number"));
    var y = Number(prompt("Enter The Second Number"));
    var operator = prompt("Enter The Operator Please:");
    // Start Operator Calculation
    switch (operator) {
        case "+":
            window.alert(`The Results Is: ${x + y}`);
            break;
        case "-":
            window.alert(`The Results Is: ${x - y}`);
            break;
        case "*":
            window.alert(`The Results Is: ${x * y}`);
            break;
        case "/":
            window.alert(`The Results Is: ${x / y}`);
            break;
        default:
            window.alert("This Operator Does Not Exist");
            break;
    }
}

function Next_Ten_Number_For() {
    var Begin_Number = Number(prompt("Enter The Number That You Want To Begin With That:"));
    var i;
    for (var i = 0; i <= 9; i++) {
        var Begin_Number = Begin_Number + 1;
        window.alert(Begin_Number);
    }
}

function Next_Ten_Number_Do_While() {
    var Begin_Number = Number(prompt("Enter The Begin That You To Begin With You:"));
    var i = 0;
    do {
        var Begin_Number = Begin_Number + 1;
        window.alert(Begin_Number);
        var i = i + 1;
    }
    while (i < 10);
}

function Next_Ten_Number_While() {
    var Begin_Number = Number(prompt("Enter The Begin That You To Begin With You:"));
    var i = 0;
    while (i < 10) {
        var Begin_Number = Begin_Number + 1;
        window.alert(Begin_Number);
        i++;
    }
}
function Somme_div() {
    var n = Number(prompt("Enter The Last Somme Number"));
    var i;
    var somme = 0;
    for (var i = 1; i <= n; i++) {
        somme = (1 / i) + somme;
        window.alert(`${somme}`);
    }
    window.alert("The Result Finally Is" + " " + somme);
}

function Somme_Exp() {
    var n = Number(prompt("Enter The Last Somme Number"));
    var i;
    var somme = 0;
    for (var i = 0; i < n; i++) {
        somme = (10 ** i);
        window.alert(`${somme}`);
    }
    window.alert("The Result Finally Is" + " " + somme);
}

function Factorial() {
    var n = Number(prompt("Enter The Factorial Number"));
    var i;
    var factorial = 1;
    for (var i = 0; i < n; i++) {
        var factorial = factorial * i + factorial;
    }
    window.alert(`The Factorial OF ${n} is: ${factorial}`);
}

function N_Premier_Impair() {
    var w;
    do {
        var n = Number(prompt("Enter N Integer Positive:"));
        w++;
    }
    while (n < 0);
    var j = 1;
    var s = 0;
    var i;
    for (var i = 1; i <= n; i++) {
        var s = s + (j ** 2);
        var j = j + 2;
    }
    window.alert(`The Finally result Is: ${s}`);
}

function N_Devise_Impair() {
    var w;
    do {
        var n = Number(prompt("Enter N Integer Positive:"));
        w++;
    }
    while (n < 0);
    var i;
    var s = 0;
    var j;
    for (var i = 1; i <= n; i++) {
        if ((n % i == 0) && (i % 2 != 0)) {
            window.alert(`${i}`);
            var s = s + 1;
        }
    }
    window.alert(`Number Of Deviser Impair Is: ${s} `);
}

function birthday_amal() {
    var age = Number(prompt("Enter The Age Of Amal"));
    var i;
    var s = 500;
    var m = 0;
    for (var i = 1; i <= age; i++) {
        var m = s + m + 3 * i;
        // window.alert(`${m}`);
        // 503 + 506 + 509 + 512 = 2030
    }
    window.alert(`The Somme Of Mony That Has Amal Is: ${m}`);
}

function Marrakech_Agadir() {
    var marrakech = 1000000;
    var agadir = 500000;
    var i = 0;
    var number_year = 0;
    while (marrakech > agadir) {
        var agadir = agadir + ((agadir * 8) / 100);
        var marrakech = marrakech + 50000;
        var number_year = number_year + 1;
        i++;
    }
    window.alert(`The Number That Society Of Agadir Depasser Marrakech Is: ${number_year}`)
}

function Suite() {
    var n = Number(prompt("Enter The Argument Of The Suite:"));
    var p = 6;
    var i;
    var u;
    if (n == 0) {
        window.alert(`The Result If n= ${n} Is: ${p}`);
    }
    else {
        for (var i = 1; i <= n; i++) {
            var u = 10 + (p * 4);
            var p = u;
            // window.alert(`The Result If n= ${i} Is: ${u}`);
        }
        window.alert(`The Result If n= ${n} Is: ${u}`);
    }
}

function people_City() {
    var age = Number(prompt("Enter Your Age Please:"));
    var sexy = String(prompt("Are You \"man\" or \"woman\":"));
    var man = age >= 20 && sexy == "man";
    var woman = (age >= 18 && age <= 35) && sexy == "woman";

    if (man == true || woman == true) {
        window.alert("Yes, You Have To Pay");
    }
    else {
        window.alert("No, You Have Not Pay");
    }
}

function Fibonacci() {
    do {
        var n = Number(prompt("Enter The Argument n Superior Of 2:"));
    }
    while (n < 2);
    var Ui = 0;
    var Uj = 1;
    var i;
    for (var i = 2; i <= n; i++) {
        var Un = Uj + Ui;
        window.alert(`The Result If n = ${i} Is: ${Un}`);
        Ui = Uj;
        Uj = Un;
    }
    // window.alert(`The Result If n = ${n} Is: ${Un}`);
}

function Array_zero() {
    var array_zero = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i;
    for (var i = 0; i < 10; i++) {
        window.alert(array_zero[i]);
    }
}

function alphabet_French() {
    var array = ["a", "e", "o", "u", "i", "y"];
    var i;
    window.alert("Alphabet French Is:")
    for (var i = 0; i < 6; i++) {
        window.alert(array[i]);
    }
}

function array_Moy_somme() {
    var array = [10, -1, 83, 83, 183, 2, -4, 10, 20, 17];
    var i;
    var somme = 0;
    var multi = 1;
    for (var i = 0; i < 10; i++) {
        var somme = array[i] + somme;
        var multi = array[i] * multi;
    }
    var moyen = somme / 10;
    window.alert("The Somme Is:" + " " + somme
        + "\n" + "And The Moyen Is:" + " " + moyen
        + "\n" + "And The Multiplication Is:" + " " + multi);
}

function mult_array() {
    var array_one = [10, 20, 30];
    var array_two = [10, 20, 30];
    var i;
    var somme = 0;
    for (var i = 0; i < 3; i++) {
        var somme = (array_one[i] * array_two[i]) + somme;
    }
    window.alert(`The Somme Is: ${somme}`); // 1400
}

function min_array() {
    var min_array = [10, 102, -2, 201, 0, -3, 92, 29];
    var i;
    var min = min_array[0];
    for (var i = 0; i <= 7; i++) {
        if (min >= min_array[i]) {
            var min = min_array[i];
        }
    }
    window.alert(`The Min Of This Table Is: ${min}`);
}

function max_array() {
    var max_array = [10, 102, -2, 201, 0, -3, 92, 29];
    var i;
    var max = max_array[0];
    for (var i = 0; i <= 7; i++) {
        if (max <= max_array[i]) {
            var max = max_array[i];
        }
    }
    window.alert(`The MAx Of This Table Is: ${max}`);
}

function n_Exist_Array() {
    var array = [10, -2, 1092, 192, 282, 202, 2, 10, -1, 14];
    var n = Number(prompt("Enter Number n"));
    var i;
    var x = 0;
    for (var i = 0; i <= 9; i++) {
        if (array[i] == n) {
            var x = x + 1;
        }
    }
    if (x == 0) {
        window.alert(`This ${n} Number Does Not exist In The Table`);
    }
    else {
        window.alert(`This ${n} Number exist In The Table`);
    }
    window.alert(`Number Of Time ${n}  repeat Is ${x}`);
}

function array_sup_moyen() {
    var array = [10, 100, 92, 163, -34, 293, 109];
    var i;
    var somme = 0;
    for (var i = 0; i <= 6; i++) {
        var somme = array[i] + somme;
    }

    var moyen = somme / 7;

    var x = 0;
    for (var i = 0; i <= 6; i++) {
        if (moyen < array[i]) {
            var x = x + 1;
        }
    }
    window.alert(`Number Of Note That Sup Of ${moyen} Is ${x}`);
}

function Array_Mohamed() {
    var i;
    var somme = 1000;
    for (var i = 1; i <= 20; i++) {
        var somme = somme + ((2 * somme) / 100);
        window.alert(`Year Number ${i} Compte was ${somme}`);
    }
    window.alert(`The somme After 20 Years` + " " + Math.ceil(somme));
}


function Inverse_array() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var i;
    for (var i = 0; i < 10; i++) {
        // var array[9-i] = array[i];
        window.alert(array[9 - i]);
    }
}


function premier_pas_treatment_pro(n) {
    // var n = Number(prompt(`Enter n Number`));
    var i;
    var x = true;
    for (var i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            var x = false;
        }
    }
    if (x == true) {
        window.alert(`${n}  Is Premier`);
    }
    else {
        window.alert(`${n} Is Not Premier`);
    }
}
function premier_pas_pro() {
    do {
        var n = Number(prompt(`Enter n Number Positive And Integer`));
    }
    while (n <= 0);
    premier_pas_treatment_pro(n);
}


function premier_pas_treatment_function(number) {
    // var n = Number(prompt(`Enter n Number`));
    var i;
    var x = true;
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            var x = false;
        }
    }
    return x;
}
function premier_pas_function() {
    var x;
    do {
        var number = Number(prompt(`Enter n Number Positive And Integer`));
    }
    while (number <= 0);
    premier_pas_treatment_function();
    if (x == true) {
        window.alert(`${number}  Is Premier`);
    }
    else {
        window.alert(`${number} Is Not Premier`);
    }
}

function Number_Chiffre(number) {
    var number = Number(prompt("Enter A n Number"));
    var Number_Chiffre = 0;
    do {
        var number = Math.trunc(number / 10);
        var Number_Chiffre = Number_Chiffre + 1;
    } while (number != 0);

    console.log(`Number Of Chiffre Is: ${Number_Chiffre}`);
}


function Multi_array_Number_treatment(x) {
    // var x = Number(prompt(`Enter A Number:`));
    var i;
    for (var i = 1; i <= 10; i++) {
        var multi = i * x;
        window.alert(`${x} * ${i} = ${multi}`)
    }
}
function Multi_array_Number() {
    var x = Number(prompt(`Enter A Number:`));
    Multi_array_Number_treatment(x);
}

// function Bissextile_Year_Method_one() {
//     var year = Number(prompt(`Enter The Year:`));
//     if (year % 4 == 0 && year % 100 != 0) {
//         window.alert(`${year} Is A Bissextile Year`);
//     }
//     else {
//         window.alert(`${year} Is Not A Bissextile Year`);
//     }
// }

function Bissextile_Year() {
    var year = Number(prompt(`Enter The Year:`));
    if (year % 400 == 0) {
        window.alert(`${year} Is A Bissextile Year`);
    }
    else {
        window.alert(`${year} Is Not A Bissextile Year`);
    }
}


function surface(rayon) {
    var surface = (rayon ** 2 * 3.14).toFixed(1);
    return surface;
}
function perimeter(rayon) {
    var perimeter = (rayon * 2 * 3.14).toFixed(2);
    return perimeter;
}
function diameter(rayon) {
    var diameter = rayon * 2;
    return diameter;
}
function circle() {
    var rayon = Number(prompt("Enter The Rayon:"));
    window.alert(`The Surface Is : ` + surface(rayon));
    window.alert(`The Perimeter Is : ` + perimeter(rayon));
    window.alert(`The Diameter Is : ` + diameter(rayon));
}


function Equation_second_degree_treatment(d, a, b, c) {
    if (a == 0 && b == 0 && c == 0) {
        window.alert("This Ensemble Is Empty (No Solution)");
    }
    else if (a == 0 && b == 0) {
        window.alert(`Contradiction Because: ${c} =! 0`);
    }
    else if ((a == 0 && c == 0 && b != 0) || (b == 0 && c == 0 && a > 0 && a < 0)) {
        window.alert("The Solution Is: 0");
    }
    else if (d == 0) {
        var r = (-b / (2 * a));
        window.alert(`The Result If d = ${d} Is: ${r}`);
    }
    else if (d > 0) {
        var x = (- b - [Math.sqrt(d)]) / (2 * a);
        var y = (- b + [Math.sqrt(d)]) / (2 * a);
        window.alert(`The Result Of  ${a}X^2+${b}X+${c}  Is:  ${x} and ${y} `);
    }
    else if (d < 0) {
        var x = -b / 2 * a;
        var xc = -[Math.sqrt(-d)] / (2 * a);
        var y = -b / 2 * a;
        var yc = +[Math.sqrt(-d)] / (2 * a);
        window.alert(`The Result Of  ${a}X^2+${b}X+${c}  Is:  ${x} + (${xc})i and ${y} + (${yc})i `);
    }
    else {
        window.alert("NaN");
    }
}
function delta(a, b, c) {
    var d = (Math.pow(b, 2) - 4 * a * c);
    return d;
}
function Equation_second_degree() {
    var a = Number(prompt("Entre The a Of Equation:"));
    var b = Number(prompt("Entre The b Of Equation:"));
    var c = Number(prompt("Entre The c Of Equation:"));
    var d = Number(delta(a, b, c));
    Equation_second_degree_treatment(d, a, b, c);
}


function som(array) {
    var i;
    var somme = 0;
    for (var i = 0; i < 10; i++) {
        var somme = array[i] + somme;
    }
    return somme;
}
function moy(array) {
    var i;
    var somme = 0;
    for (var i = 0; i < 10; i++) {
        var somme = array[i] + somme;
    }
    var moyen = somme / 10;
    return moyen;
}
function multi(array) {
    var i;
    var multi = 1;
    for (var i = 0; i < 10; i++) {
        var multiplication = array[i] * multi;
    }
    return multiplication;
}
function pos_neg(array) {
    var i;
    document.write(`Element Positive Is: \u03A3`);
    for (var i = 0; i <= 9; i++) {
        if (array[i] > 0) {
            document.write(array[i] + "\n");
        }
    }
    document.write(`Element Negative Is: \u03A3`);
    for (var i = 0; i <= 9; i++) {
        if (array[i] < 0) {
            document.write(array[i] + "\n");
        }
    }
    document.write(`Elements Null Is: \u03A3`);
    for (var i = 0; i <= 9; i++) {
        if (array[i] == 0) {
            document.write(array[i] + "\n");
        }
    }
}
function array_som_multi_moy() {
    var array = [10, 0, 192, 12, 3, -12, 10, -22, 92, -12];
    window.alert(`Somme Is : ` + som(array)
        + "\n" + `Moyen Is : ` + moy(array)
        + "\n" + `Multiplication Is : ` + multi(array));
    pos_neg(array);
}


function array_min(array) {
    var i;
    var min = array[0];
    for (var i = 0; i <= 9; i++) {
        if (min > array[i]) {
            var min = array[i];
        }
    }
    return min;
}
function array_max(array) {
    var i;
    var max = array[0];
    for (var i = 0; i <= 9; i++) {
        if (max < array[i]) {
            var max = array[i];
        }
    }
    return max;
}
function array_inverse(array) {
    var i;
    for (var i = 0; i <= 9; i++) {
        var array = array[9 - i];
    }
    return array;
}
function array_min_max_inverse() {
    var array = [1, 12, -12, 23, 48, 93, 74, 27, 93, 29];
    window.alert(`Min In This Array Is:  ${array_min(array)} \nMax In This Array Is:  ${array_max(array)}`);
    window.alert(array_inverse(array));
}


function array_two_dimension() {
    var array = [
        [10, 20, 30, -10, -20, -30],
        [40, 50, 60, -40, -50, -60],
        [70, 80, 90, -70, -80, -90]
    ];
    var i, j;
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 5; j++) {
            array[i][j] = 0;
            window.alert(array[i][j]);
        }
    }
}


function matrix_transpose() {
    var array = [
        [10, 20, 30, -10, -20, -30],
        [40, 50, 60, -40, -50, -60],
        [70, 80, 90, -70, -80, -90],
        [70, 80, 90, -70, -80, -90]
    ];
    // var array_tran = [
    //     [10,40, 70, 70],
    //     [20,50,80 , 80],
    //     [30,60, 90, 90],
    //     [-10,-40, -70, -70],
    //     [-20,-50, -80, -80],
    //     [-30,-60,-90 , -90]
    // ];
    var array_tran = [
        [1, 4, 7, 7],
        [2, 5, 8, 8],
        [3, 6, 9, 9],
        [-1, -4, -7, -7],
        [-2, -5, -8, -8],
        [-3, -6, -9, -9]
    ];
    var i, j;
    for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 5; j++) {
            array_tran[j][i] = array[i][j];
        }
    }
    for (var i = 0; i <= 5; i++) {
        for (var j = 0; j <= 3; j++) {
            console.log(array_tran[i][j]);
        }
    }

}


function matrix_somme() {
    var array_one = [
        [10, 20, 30, -10, -20, -30],
        [40, 50, 60, -40, -50, -60],
        [70, 80, 90, -70, -80, -90],
        [70, 80, 90, -70, -80, -90]
    ];
    var array_two = [
        [10, 20, 30, -10, -20, -30],
        [40, 50, 60, -40, -50, -60],
        [70, 80, 90, -70, -80, -90],
        [70, 80, 90, -70, -80, -90]
    ];
    var empty_array = [];
    var i, j;
    for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 5; j++) {
            var empty_array = array_one[i][j] + array_two[i][j];
            console.log(empty_array);
        }
    }

}


function matrix_multiplication() {
    var array_one = [
        [1, 2],
        [4, 5],
    ];
    var array_two = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    var i, j, k;
    var empty_array = [];
    for (var i = 0; i <= 1; i++) {
        for (var j = 0; j <= 2; j++) {
            var p = 0;
            for (var k = 0; k <= 1; k++) {
                var p = Number(p + (array_one[i][k] * array_two[k][j]));
            }
            // Statement p  With Array_three[4,4]
            var empty_array = p;
            window.alert(empty_array);
        }
    }
}


function matrix_diagonal() {
    var array = [
        [1, 2, 3],
        [4, 5, 4],
        [4, 5, 8]
    ];
    var i, j;
    var p = 0;
    for (var i = 0; i <= 2; i++) {
        for (var j = i; j <= i; j++) {
            var p = p + array[i][j];
        }
    }
    window.alert(`The Diagonal Of This Matrix Is: ${p}`);
}


function matrix_triangle_change() {
    var array = [
        [1, 2, 9],
        [5, 6, 10],
        [-3, 7, 11]
    ];
    var i, j;

    for (var i = 0; i <= 1; i++) {
        for (var j = i + 1; j <= 2; j++) {
            var t = array[i][j];
            var p = array[j][i];
            array[i][j] = p;
            array[j][i] = t;
        }
    }
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            window.alert(array[i][j]);
        }
    }
}

function min_max_line_col() {
    var array = [
        [1, 2, 9, -10, 10, 100, 0],
        [5, 6, 10, -10, 84, -100, -1],
        [-3, 7, 11, -10, 653, 28, 1]
    ];
    var i, j;
    var mil, mal;
    // Start Min & Max Line
    for (var i = 0; i <= 2; i++) {
        var mil = array[i][0];
        var mal = array[i][0];
        for (var j = 1; j <= 6; j++) {
            if (mil > array[i][j]) {
                var mil = array[i][j];
            }
            if (mal < array[i][j]) {
                var mal = array[i][j];
            }
        }
        window.alert(`Min Of Line Number ${i + 1} Is: ${mil}\nMax Of This Line Number ${i + 1} Is: ${mal}`);
    }
    // Start Min & Max Colone
    for (var j = 0; j <= 6; j++) {
        var mic = array[0][j];
        var mac = array[0][j];
        for (var i = 1; i <= 2; i++) {
            if (mic > array[i][j]) {
                var mic = array[i][j];
            }
            if (mac < array[i][j]) {
                var mac = array[i][j];
            }
        }
        window.alert(`Min Of colone Number ${j + 1} Is: ${mic}\nMax Of This colone Number ${j + 1} Is: ${mac}`);
    }
}


function Existence_Occurrence() {
    var array = [
        [1, 2, 9, -10, 10, 100, 0],
        [5, 6, 10, -10, 84, -100, -1],
        [-3, 7, 11, -10, 653, 28, -1]
    ];
    var n = Number(prompt(`Enter A n Number`));
    var i, j;
    var x = 0;
    var exist = true;
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 6; j++) {
            if (array[i][j] == n) {
                var exit = false;
                var x = x + 1;
            }
        }
    }
    if (exist == true) {
        window.alert(`${n} Exist & Number Os Occurrence Is ${x}`);
    }
    else {
        window.alert(`${n} Does Not Exist In This Matrix`);
    }
}


function determinant() {
    var array = [
        [1, 3],
        [4, 6]
    ];
    var det = (array[0][0] * array[1][1]) - (array[1][0] * array[0][1]);
    window.alert(`The Det Os This Matrix Is: ${det}`);
}


function Triangle_Pascal_m1() {
    var n = Number(prompt("Enter A n Number"));
    var array = [
        [1],
        [4, 4],
        [12, 34, 4],
        [12, 3, 4, 1],
        [12, 43, 42, 4, 0]
    ];
    var i, j;
    array[0][0] = 1;
    for (var i = 1; i <= n; i++) {
        array[i][0] = 1;
        for (var j = 1; j <= i; j++) {
            if (i != j) {
                array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
            }
            if (i == j) {
                array[i][j] = 1;
            }
        }
    }
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= i; j++) {
            console.log(array[i][j]);
        }
    }
}


function Triangle_Pascal_m2() {
    var n = Number(prompt("Enter A n Number"));
    var array = [
        [1],
        [4, 4],
        [12, 34, 4],
        [12, 3, 4, 1],
        [12, 43, 42, 4, 0]
    ];
    var i, j; bn
    for (var i = 0; i <= n; i++) {
        array[i][0] = 1;
        array[i][i] = 1;
        for (var j = 1; j <= i - 1; j++) {
            array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
        }
    }
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= i; j++) {
            console.log(array[i][j]);
        }
    }
}


function recursion_somme_treatment(n) {
    var n;
    if (n == 0) {
        return 0;
    }
    else {
        return n + recursion_somme_treatment(n - 1);
    }
}
function recursion_somme() {
    var n = Number(prompt(`Enter A n Number`));
    window.alert(`The Somme If n = ${n} Is:` + " " + recursion_somme_treatment(n));
}


function puissance(n, x) {
    if (n == 0) {
        return 1;
    }
    else {
        return puissance(n - 1, x) * x;
    }
}
function recursion_puissance() {
    var x = Number(prompt(`Enter A x Number`));
    var n = Number(prompt(`Enter A n Number For X^n`));
    window.alert(`Puissance Is:` + " " + puissance(n, x));
}


function combination(n, p) {
    if (n == p) {
        return 1;
    }
    else if (p == 1) {
        return n;
    }
    else {
        return combination(n - 1, p - 1)
            + combination(n - 1, p);
    }
}
function recursion_combination() {
    var n = Number(prompt(`Enter n`));
    var p = Number(prompt(`Enter p`));
    window.alert(`The Result Is:` + " " + combination(n, p))
}


function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return (factorial(n - 1) * n);
    }
}
function factorial_recursion() {
    var n = Number(prompt(`Enter n`));
    window.alert(`The result Final Is:` + " " + factorial(n));
}


function PGCD(x, y) {
    if (y == 0) {
        return x;
    }
    else {
        return PGCD(y, x % y);
    }
}
function PGCD_recursion() {
    var x = Number(prompt(`Enter First Number X`));
    var y = Number(prompt(`Enter Second Number Y`));
    window.alert(`pgcd(${x}, ${y}) Is:` + " " + PGCD(x, y));
}


function pgcd() {
    var x = Number(prompt(`Enter First Number X`));
    var y = Number(prompt(`Enter Second Number Y`));
    var i;
    for (var i = 0; i <= (x + y) / 2; i++) {
        if ((x % i == 0) && (y % i == 0)) {
            var a = i;
        }
    }
    window.alert(`pgcd(${x}, ${y}) Is:` + " " + a);
}


function pgcd_do_while() {
    do {
        var x = Number(prompt(`Enter First Number X`));
        var y = Number(prompt(`Enter Second Number Y`));
    }
    while (x < y);
    var r = x % y;
    while (r != 0) {
        var r = x % y;
        var x = y;
        var y = r;
        if (r != 0) {
            var last = r;
        }
    }
    window.alert(`${last}`);
    // do{
    //     var r = x % y;
    //     var x = y;
    //     var y = r;
    //     if (r != 0) {
    //     var last = r;
    //     }
    // } while(r != 0);
    // window.alert(`${last}`);
}



function croi(n) {
    if (n != 0) {
        croi(n - 1);
        window.alert(n);
    }
}
function decroi(n) {
    if (n != 0) {
        window.alert(n);
        decroi(n - 1);
    }
}
function Order_croi_decroi() {
    var n = Number(prompt(`Enter A n Number`));
    window.alert(`Order Croissant Is:`);
    croi(n);
    window.alert(`Order Decroissant Is:`);
    decroi(n);
}


function Decimal_Binary() {
    var x = Number(prompt(`Enter X Number:`));
    // Starting A Loop
    var nbr = 0;
    var q = Math.trunc(x / 2);
    while (q != 0) {
        var q = Math.trunc(x / 2);
        var r = x % 2;
        var x = q;
        document.write(r);
        var nbr = nbr + 1;
    }
    // var r ="1111000"; // 120
    // for(var i = 1; i <= nbr; i++) {
    //     document.write(r[nbr - i]);
    // }
}


function binary(x) {
    if (x != 0) {
        binary(Math.trunc(x / 2));
        document.write(x % 2);
    }
}
function Decimal_Binary_recursion() {
    var x = Number(prompt(`Enter X Number:`));
    binary(x);
}


function array(table, x) {
    if (x > 0) {
        array(table, x - 1);
        window.alert(table[x - 1]);
    }

}
function Array_recursion() {
    var table = [10, 20, 30, 40, 50];
    var x = 5;
    array(table, x);
}


function somme_array(p, x) {
    if (x == 0) {
        return 0;
    }
    else {
        return somme_array(p, x - 1) + p[x - 1]; // Replacer p[x - 1]
    }
}
function Array_somme_recursion() {
    var p = [1, 2, 3, 4, 5];
    var x = 5;
    window.alert(somme_array(p, x));
}




function sum_positive_treatment(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
function sum_positive() {
    var array = [10, -12, 10, 10, -13]; // sum = 30
    window.alert(sum_positive_treatment(array));
}



function sum_without_hights_lowest_number_treatment(array) {
    var min = array[0];
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if ((max != array[i]) && (min != array[i])) {
            sum += array[i];
        }
    }
    return sum;
}
function sum_without_hights_lowest_number_treatment_testCaseSolve(array) {
    // Arranged The Array From Lowest To Hightest
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                var t = array[i];
                var p = array[i + 1];
                array[i] = p;
                array[i + 1] = t;
            }
        }
    }
    window.alert(`Array Arranged: ${array}`);
    // Start Sum 
    var sum = 0;
    for (var i = 1; i < array.length - 1; i++) {
        sum += array[i];
    }
    window.alert(`The Sum Of The Array Is: ${sum}`);
}
function sum_without_hights_lowest_number() {
    var array = [10, 6, 8, 1, 2, 23, 1];
    // For Example We Have Three Hightest Number => Function Remover them
    window.alert(`The Sum Of The Array Is: ` + sum_without_hights_lowest_number_treatment(array));
    // Solve This Problem
    sum_without_hights_lowest_number_treatment_testCaseSolve(array);
    // But This Is Not The Best Practice Must Found Another Code
}


function repeat_str(nbr, str) {
    // With Built Function
    window.alert(str.repeat(nbr));
    // Without Built Function
    var result = "";  // Empty String
    for (var i = 0; i < nbr; i++) {
        result = str + result;
    }
    window.alert(result);
}
function repeat_string() {
    var nbr = Number(prompt("Enter A Number:"));
    var str = String(prompt("Enter A String:"));
    repeat_str(nbr, str);
}


// Switch Number To String
// Switch String To Array 
// reverse The Array
// Switch String To Number
function digit_number(number) {
    var x = 0;
    do {
        var number = Math.trunc(number / 10);
        var x = x + 1;
    } while (number != 0);
    return x;
}
function convert_number(number) {
    // with Built Function
    // return console.log(number.toString().split("").reverse());

    // Without Built Function + One Built Function
    var x = digit_number(number);
    var str = "222"; // 222
    var number = number.toString();
    var emptyArray = new Array();
    for (var i = 1; i <= x; i++) {
        emptyArray[i - 1] = number[x - i];
    }
    for (var i = 0; i < x; i++) {
        var convert_number = emptyArray[i] * 2;
        emptyArray[i] = convert_number / 2;
    }
    console.log(emptyArray);
}
function convert_number_reversed_digit() {
    var number = Number(prompt("Enter A Number"));
    convert_number(number);
}



function string_number() {
    var str = String(prompt("Enter A Number Like String:"));
    console.log(str);
    var number = str / 2;
    var number = number * 2;
    console.log(number);
}




function counting_sheep() {
    var array = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true];
    var x = 0;
    for (var i = 0; i <= 23; i++) {
        if (array[i] == true) {
            x = x + 1;
        }
    }
    window.alert(x);
}


function Get_opposite() {
    var number = Number(prompt("Enter A Number"));
    window.alert(`The opposite Of ${number} Is ${-number}`);
}



function return_negative() {
    var number = Number(prompt("Enter A Number"));
    window.alert(number > 0 ? -number : number == 0 ? "No Mathematical Sense" : number);
}


function jennifer_secret_message() {
    var name = String(prompt("Enter Your Name Please:"));
    return name === "Jennifer" ? window.alert("Hello, My love") : window.alert("Hello");
}


function Needle_haystack() {
    var array = ["Jack", "Junk", "Hay", "jenny", "needle", "range"];
    // With built Function
    window.alert("Found At needle At position" + " " + array.indexOf("needle"));
    for (var i = 0; i <= array.length; i++) {
        if (array[i] === "needle") {
            return window.alert("Found At needle At position" + " " + i);
        }
    }
}



function CountPositive_SumNegative() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var Pos_num = 0;
    var Neg_sum = 0;
    var new_array = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            Pos_num += 1;
        }
        else {
            Neg_sum = Neg_sum + array[i];
        }
    }
    new_array[0] = Pos_num;
    new_array[1] = Neg_sum;
    return console.log(new_array);
}


function Double_Char() {
    var str = String(prompt("Enter A String"));
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var result = result + str[i] + str[i];
        // var result = result + str.charAt(i) + str.charAt(i);
    }
    return console.log(result);
}




function basic_Math_operations() {
    var value_one = Number(prompt("Enter A Value One:"));
    var value_two = Number(prompt("Enter A Value Two:"));
    var operator = String(prompt("Choose Your Operator:"));

    // return operator === "+" 
    // ? window.alert(value_one + value_two):  
    // operator === "-" 
    // ? window.alert(value_one - value_two):
    // operator === "*"
    // ? window.alert(value_one * value_two):
    // operator === "/"
    // ? window.alert(value_one / value_two):
    // window.alert("Unknown");

    // if (operator === "+") return window.alert(value_one + value_two);
    // if (operator === "-") return window.alert(value_one - value_two);
    // if (operator === "*") return window.alert(value_one * value_two);
    // if (operator === "/") return window.alert(value_one / value_two);
    // else return window.alert("Unknown");

    return window.alert(eval(value_one + operator + value_two));
}




function Square_or_Not() {
    var array = [4, 3, 9, 7, 2, 1];
    var new_array = new Array();
    for (var i = 0; i < array.length; i++) {
        var result = Math.sqrt(array[i]);
        if (result == Math.trunc(Math.sqrt(array[i]))) {
            new_array[i] = result;
        }
        else {
            new_array[i] = array[i] * array[i];
        }
    }
    console.log(new_array);
}



function premier_or_not() {
    var number = Number(prompt("Enter A Number"));
    var x = true;
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            x = false;
        }
    }
    if (x == false) {
        console.log("Not Premier");
    }
    else if (number == 0) {
        console.log("NaN");
    } else {
        console.log("Premier")
    }
}



// If Number premier Return Multi Of Self If Not Return Deviser
function array_premier() {
    var array = [1, 5, 7, 9, 12, 10, 3, 2, 0];
    console.log(array);
    var new_array = new Array();
    var x = true;
    var p;
    for (var i = 0; i < array.length; i++) {
        for (var j = 2; j < array[i] - 1; j++) {
            if (array[i] % j == 0) {
                x = false;
                p = j;
            }
        }
        if (x == false) {
            console.log(array[i] + " " + "Not Premier");
            new_array[i] = p;
        } else {
            console.log(array[i] + " " + "Premier");
            new_array[i] = array[i] * array[i];
        }
        x = true;
    }
    console.log(new_array);
}




//  (2,5) => [2, 4, 6, 8 , 10] => Five Time
function Count(x, n) {
    // var count_array = new Array();
    // var p = 0;
    // for(var i = 0; i < n; i++) {
    //     count_array[i] = x + p;
    //     p = count_array[i];
    // }
    // return count_array;

    // With Another Method
    var arr = new Array();
    for (var i = 0; i < n; i++) { // Always Array Start With 0
        arr[i] = x * (i + 1);
    }
    return arr;
}
function CountBy_X() {
    var x = Number(prompt("Enter A Add Number:"));
    var n = Number(prompt("Enter A Time length:"));
    console.log(Count(x, n));
}


function Remove_String_Spaces() {
    var str = "h e l l o";
    // var p = [""]; 
    // var str_array = str.split(" ");
    // var text = " ";
    // for (var i = 0; i < str_array.length; i++) {
    //     if (str_array[i] !== p[0]) {
    //         // console.log(x[i]);
    //         var text = text + str_array[i];
    //     }
    // }
    // console.log(text);

    // With Built Function
    console.log(str.split(" ").join("")); // join("-") => h-e-l-l-o
}



function Invert_Values() {
    var array = [1, -2, 3, 4, -5];
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 || array[i] < 0) {
            array[i] = array[i] * (-1);
        }
    }
    console.log(array); // 727ms

    // With Built Function
    return console.log(array.map((x) => x * (-1))); // 759ms
}




function Convert_bool_toString_Yes_No() {
    var bool = String(prompt("Enter A True Or False Please:"));
    return bool === "true"
        ? console.log("Yes")
        : bool === "false"
            ? console.log("No")
            : console.log("Unknown");
}




function Reversing_word_String() {
    var str = String(prompt("Enter A String Please:"));
    console.log(str);
    var array = str.split(" "); // Converting
    var add_value = ""; // Add Variables
    for (var i = 1; i <= array.length; i++) {
        add_value = add_value + array[array.length - i] + " ";
    }
    console.log(add_value);

    // With Another Function
    return console.log(str.split(" ").reverse().join(" "));
}



function Keep_Hydrated() {
    var nbr = (prompt("Enter The the Hour That Spent:"));
    var litter = nbr * 0.5;
    var reset = litter % 1;
    var result = litter - reset;
    console.log(result);

    // With Built Function
    return console.log(Math.floor(nbr * 0.5));
}



function Convert_String_number() {
    var nbr = Number(prompt("Enter A Number:"));
    console.log(nbr);
    console.log(`${nbr}`); // With  ES6

    // With Built Function
    return console.log(nbr.toString());
}


function Add_Element_In_first() {
    var array = ["Ahmed", "Omar", "Abdellah", "Ali", "Anoir", "Mahmoud"];
    console.log(array);
    var new_array = [];
    new_array[0] = "Adil";
    var i = 0;
    while (new_array.length !== array.length + 1) {
        new_array[i + 1] = array[i];
        i++;
    }
    console.log(new_array);
}


function Add_Element_In_last() {
    var array = ["Ahmed", "Omar", "Abdellah", "Ali", "Anoir", "Mahmoud"];
    console.log(array);
    array[array.length] = "Adil";
    console.log(array);
}


function Remove_Element_In_first() {
    var array = ["Ahmed", "Omar", "Abdellah", "Ali", "Anoir", "Mahmoud"];
    console.log(array);
    var new_array = [];
    for (var i = 0; i < array.length - 1; i++) {
        new_array[i] = array[i + 1];
    }
    console.log(new_array);
}


function Remove_Element_In_last() {
    var array = ["Ahmed", "Omar", "Abdellah", "Ali", "Anoir", "Mahmoud"];
    console.log(array);
    // array.length = array.length - 1;

    var new_array = [];
    for (var i = 0; i < array.length - 1; i++) {
        new_array[i] = array[i];
    }
    console.log(new_array);
}



function cadre_Etoile() {
    var array = [[], [], [], [], [], []];
    // Start Know Number Of Columns And Rows With Initials Values
    var x = 0, y = 0;
    for (var i = 0; i < 6; i++) {
        var y = y + 1;
        for (var j = 0; j < 12; j++) {
            var x = x + 1;
        }
    }
    var y = x / y;
    var x = x / y;
    console.log(`Number Of Column Is ${y}\nNumber Of Rows Is ${x}`);
    // Start Filling Out The Array With The Conditions
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            if (i == 0 || i == x - 1 || j == 0 || j == y - 1) {
                array[i][j] = 1
            } else {
                array[i][j] = 0;
            }
        }
    }
    // 1 For The Cadre && 0 For Empty Indexes
    console.log(array);
}


function Count_Monkeys() {
    var nbr = Number(prompt("Enter The Number Of MonyKeys"));
    var arr = [];
    for (var i = 0; i < nbr; i++) {
        // arr[i] = i + 1;
        arr.push(i + 1);
    }
    console.log(arr);
}


function Welcome() {
    var str = String(prompt(`Enter The Language Please:`));
    // var array_language = ["english", "czech", "danish", "estonia", "french"];
    // var array_welcome = ["Welcome", "Vitejte", "Velkomst", "Tere tulmast", "Bienvenue"];
    // for (var i = 0; i < array_language.length; i++) {
    //     if (array_language[i] === str) {
    //         console.log(`${array_welcome[i]}`);
    //     }
    // } 
    // return console.log(`${array_welcome[0]}`);

    //  With Built Function && Object
    var language = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        estonia: "Tere tulmast",
        french: "Bienvenue",
        arabic: "مرحبا"
    };
    if (language.hasOwnProperty(str)) {
        return console.log(language[str]);
    } else {
        console.log(language["english"]);
    }
}



function sentence_Smash() {
    var arr = ["hello", "World", "this", "is", "great"];
    var sentence = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var sentence = sentence + " " + arr[i];
    }
    console.log(sentence);

    // With Built Function
    return console.log(arr.join(" "));
}



function Switch_itUp() {
    do {
        var nbr = Number(prompt("Enter The Number Between 0 & And 9"));
    } while (nbr <= 0 || nbr >= 9);

    var str_nbr = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    };
    if (str_nbr.hasOwnProperty(nbr)) {
        return console.log(str_nbr[nbr]);
    }
}



function BonusTime() {
    var salary = Number(prompt("Enter A Salary"));
    var bonus = Boolean(prompt("Your Bonus True Or False?"));
    return bonus === true ? console.log(`£${salary * 10}`) : console.log(`£${salary}`)
}



function remove_exclamation() {
    var str = String(prompt("Enter A Word With The Exclamation:"));
    var new_array = [];
    for (var i = 0; i < str.length; i++) {
        new_array[i] = str[i];
    }
    if (new_array[new_array.length - 1] === "!") {
        new_array[new_array.length - 1] = "";
    }
    var result = "";
    for (var i = 0; i < new_array.length; i++) {
        result = result + new_array[i];
    }
    console.log(result);

    // // With Built Function     
    var arr = str.split("");
    if (arr[arr.length - 1] === "!") {
        arr.pop();
    }
    console.log(arr.join(""));

    // With Another Built Function
    return console.log(str.replace("!", "")); // Search => Regular Expressions
}



function Banjo_Game() {
    var name = String(prompt("Enter Your Name"));
    if (name[0] === "r" || name[0] === "R") {
        console.log(`${name} plays banjo`);
    } else {
        console.log(`${name} does not plays banjo`);
    }

    // With Built Function 
    return /^r/i.test(name)
        ? console.log(`${name} plays banjo`)
        : console.log(`${name} does not plays banjo`);
}



function Removing_second_Letter() {
    var array = ["Ali", "Sameh", "Mohamed", "Aya"];
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].slice(0, 1) + array[i].slice(2, array[i].length);
        // array[i] = array[i][1];
    }
    console.log(array);
}

function Removing_second_Element() {
    var array = ["Keep", "remove", "Keep", "remove", "Keep", "remove", "Keep", "remove",];
    var new_array = [];
    // var x = 1;  
    var y = 0;
    for (var i = 0; i < array.length; i++) {
        // if (i = x) {
        //     new_array[i - y] = array[i - 1];
        // }
        // x += 2;
        if (i % 2 === 0) {
            new_array[i - y] = array[i];
            // new_array.push(array[i]);
            y += 1;
        }
        // var y += 2;
    }
    console.log(new_array);
}



// Every Day 40$
// If You Use Car 7 Day => Mince 50$
// If Use Cars 3 Day Or ++ => Mince 20$
function Transportation_Vocation() {
    var day = Number(prompt("Enter The Day That Using The Cars:"));

    if (day < 3 && day >= 0) {
        console.log(`The Amount Is ${day * 40}$`);
    } else if (day >= 3 && day < 7) {
        console.log(`The Amount Is ${(day * 40) - 20}$`);
    } else if (day >= 7) {
        console.log(`The Amount Is ${(day * 40) - 50}$`);
    } else {
        console.log(`Unknown`);
    }
}


function Exclusive() {
    var a = (prompt("Enter The First Boolean"));
    var b = (prompt("Enter The First Boolean"));

    return a === b ? console.log(false) : console.log(true);
}



// Loop Thought Array
// Check If Array Consecutive return null If Not return first element No Consecutive
function First_consecutive_number() {
    var array = [1, 2, 3, 4, 6, 7, 8, 9, 11, 13];
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i + 1] !== array[i] + 1) {
            return console.log(array[i + 1]);
        }
    }
    return console.log(null);
}


function Volume_Cuboid() {
    var length = Number(prompt("Enter The Length Of Cuboid"));
    var width = Number(prompt("Enter The Width Of Cuboid"));
    var height = Number(prompt("Enter The Height Of Cuboid"));
    return console.log(`The Volume Of Cuboid Is : ${length * height * width}`);
}



function Formatting_Decimal() {
    var nbr = Number(prompt("Enter A Number"));
    nbr = `${nbr}`;
    var array = [];
    // Nbr To Array
    for (var i = 0; i < nbr.length; i++) {
        array[i] = nbr[i];
    }
    console.log(array);
    // Check If nbr[i + 3] >= 5 => nbr[i + 2] Plus One
    for (var i = 0; i < array.length; i++) {
        if (array[i] == ".") {
            if (array[i + 3] >= 5) {
                var result = ((array[i + 2] * 2) / 2) + 1;
                array[i + 2] = result;
            }
        }
    }
    // known Number Of Chiffre Then "."
    var x = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == ".") {
            i = array.length;
        }
        x += 1;
    }
    // Loop And Covert Array in Number While x - 2
    var n = "";
    for (var i = 0; i < x + 2; i++) {
        n = n + array[i];
    }
    nbr == 0 ? console.log(0) : console.log(n);
}


function Formatting_Decimal() {
    var nbr = Number(prompt("Enter A Number"));
    var nbr = nbr * 100;
    var reset = nbr % 1;
    var nbr = nbr - reset;
    reset >= 0.5 ? console.log((nbr + 1) / 100) : console.log(nbr / 100);

    // With Built Function
    // return console.log(Math.round(nbr * 100) / 100);
    // return console.log(nbr.toFixed(2));
}


// 3 => 3.00
// 3.1 => 3.10
function Dollars_Cents() {
    var nbr = Number(prompt("Enter The Dollars"));
    console.log(nbr);
    nbr = `${nbr}`;
    var arr_one = [];
    var x = 0;
    for (var i = 0; i < nbr.length; i++) {
        if (nbr[i] === ".") {
            x += i + 1;
            var No_point = 0;
            var cfn = (nbr.length - x);
            console.log(`Number Of Chiffre After Point . Is: ` + cfn);
        }
    }

    if (cfn <= 1 && cfn > 0) {
        for (var i = 0; i < nbr.length + 1; i++) {
            arr_one[i] = "0";
        }
        for (var i = 0; i < nbr.length; i++) {
            arr_one[i] = nbr[i];
        }
    }
    else {
        for (var i = 0; i < nbr.length - cfn + 2; i++) {
            arr_one[i] = nbr[i];
        }
    }
    return No_point == 0
        ? console.log("$" + arr_one.join(""))
        : console.log("$" + nbr + ".00");
}

function Dollars_Cents() {
    var nbr = Number(prompt("Enter A Number:"));
    return console.log(nbr.toFixed(2));
}


function Find_Position() {
    var letter = String(prompt("Enter A Letter:"));
    var str = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < str.length; i++) {
        if (letter == str[i]) {
            console.log(`Position Of ${letter} Is ${i + 1}`);
        }
    }

    // With Built Function
    return console.log(str.indexOf(letter) + 1);
}



function opposite_Attract() {
    var flower1 = Number(prompt("Enter The Number Of The Petals Of Flower One:"));
    var flower2 = Number(prompt("Enter The Number Of The Petals Of Flower Two:"));
    if ((flower1 % 2 === 0 || flower2 % 2 === 0) && (flower1 % 2 !== 0 || flower2 % 2 !== 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
    // Simple Code 
    return flower1 % 2 !== flower2 % 2 ? console.log(true) : console.log(false);
}


function No_zero_for_hero() {
    var nbr = Number(prompt("Enter A Number End Of Zero:"));
    if (nbr == 0) {
        return console.log(0);
    } else {
        var str = String(nbr);
        while (str.lastIndexOf(0) === str.length - 1) {  // str.endsWith(0)
            str = str.slice(0, str.length - 1);
        }
        console.log(Number(str));

        // Without Using Built Function
        var str2 = String(nbr);
        var arr = [];
        for (var i = 0; i < str2.length; i++) {
            arr[i] = str2[i];
        }
        var p = Number(arr.length);
        while (arr[p - 1] === "0") {
            arr[p - 1] = "";
            p--;
        }
        var new_str = "";
        for (var i = 0; i < str2.length; i++) {
            new_str = new_str + arr[i]; // Using Join Function
        }
        console.log(new_str);
    }
}


// Loop Thought Array
// Check If Chart Of Index Is Vowel If It Remove It 
function Vowel_Remover() {
    var str = String(prompt("Enter A String That Have Vowels:"));
    var new_str = "";
    for (var i = 0; i < str.length; i++) {
        if (!(str[i] === "a" || str[i] === "e" || str[i] === "o" || str[i] === "i" || str[i] === "u")) {
            new_str = new_str + str[i];
        }
    }
    console.log(new_str);

    // With Built Function
    const vowels = ["a", "e", "o", "u", "i"];
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result.push(str[i]);
        }
    }
    console.log(result.join(""));

    // Another Solution
    return console.log(str.replace(/[aeiou]/g, ""));
}



function remove_exclamation_two() {
    var str = String(prompt("Enter A String:"));
    var new_str = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== "!") {
            new_str = new_str + str[i];
        }
    }
    console.log(new_str);
    // With Built Function 
    console.log(str.replace(/[!]/g, ""));
}



// Loop Thought String
// last in first 
function Reversed_string() {
    var str = String(prompt("Enter A String:"));
    str = str.split("");
    var str1 = "";
    var x = str.length - 1;
    for (var i = 0; i < str.length / 2; i++) {
        str1 = str[x - i];
        str[x - i] = str[i];
        str[i] = str1;
    }
    console.log(str.join(""));

    // Another Solution
    // var result = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    //     result += str[i];
    // }
    // console.log(result);

    // With built Function
    // console.log(str.split("").reverse().join(""));
}



// Problem In Test Cases
// Must Be Array In Order => Create A Function Return Order Array
function order_arr(arr) {
    var arr = [8, 0, 1, 4, 2, -1];
    var new_arr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                new_arr[i] = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = new_arr[i];
            }
        }
    }
    return arr;
}
function Reduce_But_Grow() {
    var arr = [8, 0, 1, 4, 2, -1];
    arr = order_arr(arr);
    console.log(arr);
    var intValue = 1;
    for (var i = 0; i < arr.length; i++) {
        intValue *= arr[i];
    }
    return console.log(intValue);
}



function number(a, b) {
    var c = a + b;
    return c;
}
function Two_number() {
    var a = Number(prompt("Enter A Number:"));
    var b = Number(prompt("Enter Another Number:"));
    console.log(number(a, b));
}


function fact(n) {
    if (n <= 0)
        return 1;
    else
        return fact(n - 1) * (n);
}
function fact_rec() {
    var n = 4;
    console.log(fact(n));
}


function fib(n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}
function fib_rec() {
    do {
        var n = Number(prompt("Enter A Number:"));
    } while (n < 0);
    return console.log(fib(n)); // Factorial Complexity
}

// Sort With Another Method => Less Complexity
function Tri_Selection() {
    var array = [64, 25, 12, 22, 11];
    console.log(array);
    var int;
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                int = array[j];
                array[j] = array[j + 1];
                array[j + 1] = int;
            }
            console.log(array);
        }
        console.log("------");
    }
    console.log(array); // Quadrate Complexity
}

function Tri_Selection() {
    var array = [64, 25, 22, 12, 11];
    console.log(array);
    var int, indexMin;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                indexMin = j;
            }
        }
        int = array[indexMin];
        array[indexMin] = array[i];
        array[i] = int;
    }
    console.log(array); // Logarithmic Complexity
}


function Bulls_tree() {
    var array = [5, 1, 4, 2, 8]; // =>  [1, 4, 2, 5, 8]
    var int;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            int = array[i + 1];
            array[i + 1] = array[i];
            array[i] = int;
        }
    }
    console.log(array); // Linear Complexity
    var i = 0;
    while (array[i + 1] < array[i]) {
        int = array[i + 1];
        array[i + 1] = array[i];
        array[i] = int;
        i++;
    }
    console.log(array); // Linear Complexity
}


// Loop [i = n To i = 0 && i--]
function Horner_poly() {
    var n = Number(prompt("Enter n :")); // n = 3
    var x = Number(prompt("Enter x :")); // x = 2
    var Px = " ";
    // while (n != 0) {
    //     Px = Px + (`a${n}*${x ** 3} + `);
    //     --n;
    // }
    // console.log(`Px = ${Px}a0*1`);
    for (var i = n; i >= 0; i--) {
        Px = Px + (`+ a${i}*${x ** i} `);
    }
    console.log(`Px = ${Px}`);
}


// 1. Calculer à la main f(1; 0); f(2; 0) et f(3; 0):

function Ackermann(n, m) {
    if (n == 0) {
        return m + 1;
    } else if (m == 0 && n >= 1) {
        return Ackermann(n - 1, 1);
    } else if (m >= 1 && n >= 1) {
        return Ackermann(n - 1, Ackermann(n, m - 1));
    } else {
        return 0;
    }
}

function Ackermann_function() {
    var n = 5;
    var m = 10;
    console.log(Ackermann(n, m));
}

// Start With Complexity
/*
    if n = 0 => m + 1 => Linear
    if m == n => factorial Of n ** m => Factorial
    if n > m => Error => Factorial
    if n < m => Error => Factorial
*/


function binome(n, p) {
    if (n == p) {
        return 1;
    } else if (p == 1) {
        return n;
    } else {
        return binome(n - 1, p - 1) + binome(n - 1, p);
    }
}
function binome_func() {
    do {
        var n = Number(prompt("Enter A Bulls Number :"));
        var p = Number(prompt("Enter A Combinations Number :"));
    } while (n < p || p == 0);
    console.log(`The Probability Number Is: ${binome(n, p)}`); // Always n >= p
}
// May Be Factorial Complexity


function Is_It_Palindrome() {
    var str = String(prompt("Enter A String :"));
    str = str.toLowerCase();
    var x = 0;
    for (var i = 1; i <= str.length; i++) {
        if (str[i - 1] === str[str.length - i]) {
            x += 1;
        }
    }
    x === str.length ? console.log(true) : console.log(false);

    // With Built Function 
    var new_str = str.toLowerCase().split("").reverse().join("");
    str === new_str ? console.log(true) : console.log(false);
}
// Linear Complexity


function Summation() {
    var n = Number(prompt("Enter A Number :"));
    var somme = 0;
    for (var i = 1; i <= n; i++) {
        somme += i;
    }
    console.log(somme);

    // With Built Function
    return console.log(Array(n).fill(8));
}


function Print_Array_Element_With_Come() {
    var array = ["h", "o", "l", "a"];
    var new_str = "";
    for (var i = 0; i < array.length - 1; i++) {
        array[i] = `${array[i]},`;
    }
    for (var i = 0; i < array.length; i++) {
        new_str += array[i];
    }
    console.log(new_str);

    // with Built Function 
    return console.log(array.join());
}

function Suzuki() {
    var Stairs = ["Monday", "Thursday",
        "Wednesday", "Tuesday", "Sunday",
        "Saturday", "Friday"];
    var Monday = [1, 2, 3, 4, 5, 6, 7];
    var Thursday = [1, 2, 3, 4, 5, 6, 7];
    var Wednesday = [1, 2, 3, 4, 5, 6, 7];
    var Tuesday = [1, 2, 3, 4, 5, 6, 7];
    var Sunday = [1, 2, 3, 4, 5, 6, 7];
    var Saturday = [1, 2, 3, 4, 5, 6, 7];
    var Friday = [1, 2, 3, 4, 5, 6, 7];
    var sum = 0;
    for (var i = 0; i < Monday.length; i++) {
        sum += Monday[i] + Thursday[i] + Wednesday[i] +
            Tuesday[i] + Sunday[i] + Saturday[i] + Friday[i];
    }
    return console.log(sum * 20);
}
// Linear Complexity



function Remove_First_Last_char() {
    var str = String(prompt("Enter A String :"));
    var new_str = "";
    for (var i = 1; i < str.length - 1; i++) {
        new_str += str[i];
    }
    console.log(new_str);

    // With Built Function
    console.log(str.slice(1, str.length - 1));

    // With Built Function 2
    var x = str.split("");
    x.pop();
    x.shift();
    console.log(x.join(""));
}



function Square_Sum() {
    var nbr = [1, 2, 2];
    var sum = 0;
    for (var i = 0; i < nbr.length; i++) {
        sum += Math.pow(nbr[i], 2);
    }
    return console.log(sum);
    // Linear Complexity
}

function Small_Integer_Array() {
    var array = [12, 34, -12, -3, 23, 234];
    var minValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    console.log(minValue);

    // With Built function
    return console.log(Math.min(...array));
    // Linear Complexity
}

function divisible(x, n, y) {
    if (n % x === 0 && n % y === 0) {
        return `${n} Is Divisible By ${x} And ${y}`;
    } else {
        return `${n} Is Not Divisible By ${x} And ${y}`;
    }
    // Constance Complexity
}

function Is_Divisible_BY_X_Y() {
    var n = Number(prompt("Enter A Number :"));
    var x = Number(prompt("Enter Divisible One :"));
    var y = Number(prompt("Enter Divisible Two :"));
    console.log(divisible(x, n, y));
    // Constance Complexity
}


function Beginner_Lost_With_Number() {
    var array = [1, 2, 3];
    var i = 0;
    for (; ;) {
        if (i === array.length) {
            break;
        }
        array[i] = array[i] * 2;
        i++;
    }
    console.log(array);
    // With Built Function
    return console.log(array.map((n) => n * 2));
    // Linear Complexity
}

function Fake_Binary() {
    var digits = String(prompt("Enter Digits :"));
    digits = digits.split("");
    for (var i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            digits[i] = "0";
        } else {
            digits[i] = "1";
        }
    }
    console.log(digits.join(""));
    // Linear Complexity
    // Join && Split => May Be Easy To Write With Manual Code
}

function Faking_Binary() {
    var digits = String(prompt("Enter Digits :"));
    digits = digits.split("");
    for (var i = 0; i < digits.length; i++) {
        if (digits[i] >= 1 && digits[i] <= 4) {
            digits[i] = "0";
        } else {
            digits[i] = "1";
        }
    }
    console.log(digits.join(""));

    // With RegExp
    return console.log(digits.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1"));
}


function Make_Uppercase() {
    var str = String(prompt("Enter a String :"));
    var result = "";
    var new_str = str.split("");
    var smaller = ("abcdefghijklmnopqrstuvwxyz").split("");
    var capital = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    for (var i = 0; i < new_str.length; i++) {
        for (var j = 0; j < smaller.length; j++) {
            if (smaller[j] === new_str[i] || new_str[i] === capital[j]) {
                result += capital[j];
            }
        }
    }
    console.log(result);
    // With Built Function
    return console.log(str.toUpperCase());
}
// Quadrate Complexity => O(n ** 2)

function sumMix(x) {
    var array = [9, 3, '7', '3'];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    return console.log(sum);
}
// Linear Complexity


function feast() {
    var beast = String(prompt("Enter The Beast :"));
    var dish = String(prompt("Enter The Dish :"));
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
        ? console.log(true)
        : console.log(false);
}
// Constance Complexity

function updateLight() {
    var current = String(prompt("Enter The Color :"));
    // if (current === "green") {
    //     return console.log("yellow");
    // } else if (current === "yellow") {
    //     return console.log("red");
    // } else if (current === "red") {
    //     return console.log("green");
    // } else {
    //     return console.log("No Color");
    // }
    var arr = ["green", "yellow", "red", "green"];
    if (current === arr[arr.indexOf(current)]) {
        return console.log(arr[arr.indexOf(current) + 1]);
    }
}
// Constance Complexity


// employed | vacation
// true | true     => false
// true | false    => true
// false | true     => false
// false | false    => false
function setAlarm() {
    var employed = String(prompt("Are You In Employed :"));
    var vacation = String(prompt("Are You In Vacation :"));
    if (employed == true && vacation == false) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}


// Constance Complexity
function quarterOf() {
    var month = Number(prompt("Enter The Month :"));
    if (month < 4) {
        console.log(1);
    }
    else if (month < 7) {
        console.log(2);
    }
    else if (month < 10) {
        console.log(3);
    }
    else if (month <= 13) {
        console.log(4);
    } else {
        console.log("UnKnown");
    }
    // return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;

    // With Built Function 
    return Math.ceil(month / 3);
}
// Constance Complexity


function addLength(str) {
    var str = String(prompt("Enter A Word :"));
    // var arr = [];
    // var x = 0;
    // var str_two = "";
    // for (var i = 0; i < str.length; i++) {
    //     if (str[i] !== " ") {
    //         str_two += str[i];
    //     } else {
    //         arr[x] = str_two;
    //         ++x;
    //         var str_two = "";
    //     }
    // }
    // console.log(arr);
    var arr = str.split(" ");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arr[i] += " " + arr[i].length;
    }
    console.log(arr);
}
// Linear Complexity


function howManyLightsabersDoYouOwn() {
    var name = String(prompt("Enter The Name :"));
    return name == "Zach" ? console.log(18) : console.log(0);
}
// Constance Complexity


function twiceAsOld() {
    var sonYearsOld = Number(prompt("Enter The Son Age :"));
    var dadYearsOld = Number(prompt("Enter The Father Age :"));
    var result;
    result = 2 * sonYearsOld - dadYearsOld;
    return result >= 0 ? console.log(result) : console.log(result * -1);
}
// Constance Complexity


function hoopCount() {
    var n = Number(prompt("Enter A Number :"));
    if (n < 10) {
        console.log("Keep at it until you get it");
    } else {
        console.log("Great, now move on to tricks");
    }
}
// Constance Complexity


function correct() {
    var string = String(prompt("Enter A String :"));
    var string = string.split("");
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "5") {
            string[i] = "S";
        } else if (string[i] == "0") {
            string[i] = "O";
        } else if (string[i] == "1") {
            string[i] = "I";
        }
    }
    console.log(string.join(""));

}


function betterThanAverage(classPoints, yourPoints) {
    var yourPoints = Number(prompt("Enter A Your Points :"));
    var classPoints = [12, 34, 23, 223, 23, 23, 131, 31];
    var sum = 0;
    for (var i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    return sum / classPoints.length > yourPoints ? console.log(false) : console.log(true);
}
// Linear complexity


function reverseWords() {
    var str = String(prompt("Enter The String That You Want To Reverse :"));
    var arr = str.split(" ");
    var x = 1;
    var initial;
    for (var i = 0; i < arr.length / 2; i++) {
        initial = arr[arr.length - x];
        arr[arr.length - x] = arr[i];
        arr[i] = initial;
        ++x;
    }
    console.log(arr.join(" "));
    // With Built Function
    return str.split(" ").reverse().join(" ");
}
// Linear Complexity


function Tri() {
    var array = [5, 4, 3, 2, 1];
    var x = 0;
    console.log(array);
    var alt;
    for (var i = 0; i < array.length; i++) {
        var confirm = false;
        for (var j = 0; j <= 6 - i; j++) {
            if (array[j] > array[j + 1]) {
                alt = array[j + 1];
                array[j + 1] = array[j];
                array[j] = alt;
                confirm = true;
                x++;
            }
            if (confirm == false) {
                break;
            }
        }
    }
    console.log(array);
    console.log(x); // Iteration Number

    // for (var i = 0; i < array.length; i++) {
    //     for (var j = i + 1; j < 6; j++) {
    //         if (array[i] > array[j]) {
    //             alt = array[i];
    //             array[j] = array[i];
    //             array[j] = alt;
    //             console.log(array);
    //         }
    //     }
    // }
    // console.log(array);
}


function Calculate_Bmi() {
    var weight = Number(prompt("Enter The Weight :"));
    var height = Number(prompt("Enter The Height :"));
    var bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) return console.log("UnderWeight");
    else if (bmi <= 25.0) return console.log("Normal");
    else if (bmi <= 30.0) return console.log("Overweight");
    else return console.log(Obese);
}


function Divisible_Number() {
    var nbr = Number(prompt("Enter A Number :"));
    var x = 0;
    var new_array = [];
    var array = [1, 3, 5];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % nbr === 0) {
            new_array[x] = array[i];
            x++;
        }
    }
    console.log(new_array);
}
// Complexity Linear => O(n)


function Powers_of_two() {
    var n = Number(prompt("Enter A Number :"));
    var array = [];
    // for (var i = 0; i <= n; i++) {
    //     array[i] = Math.pow(2, i);
    // }
    // console.log(array);

    var x = 0;
    while (x <= n) {
        array[x] = Math.pow(2, x);
        x++;
    }
    console.log(array);
}
// Linear Complexity



function Sort_star() {
    var list = ["Xbox", "Ywe", "Bitcoin", "Large", "Weight"];
    console.log(list);
    var letter = "abcdefghijklmnopqrstuvwxyz";
    var capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var array = [];
    var letter_array = [];
    var x = 0;

    // Convert letter To Array
    for (var i = 0; i < letter.length; i++) {
        letter_array[i] = letter[i];
    }
    console.log(letter_array); // O(n)

    // Found The Index Of Each First Char In Array By Var Letter Index
    for (var k = 0; k < list.length; k++) {
        for (var j = 0; j < letter_array.length; j++) {
            if (list[k][0] === letter_array[j] || list[k][0] === capital_letter[j]) {
                array[x] = j;
                x++;
            }
        }
    }
    console.log(array); // O(n^2)

    // Sort The Array & List In The Same
    var alt;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j <= array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                alt = list[j + 1];
                list[j + 1] = list[j];
                list[j] = alt;

                alt = array[j + 1];
                array[j + 1] = array[j];
                array[j] = alt;
            }
        }
    }
    console.log(array);
    console.log(list); // O(n^2)


    // After Found First Element Must Convert The Array
    var arr = list[0].split(""); // O(n) 

    // Add *** To The Next Element
    var str = arr[0];
    for (var i = 1; i < arr.length; i++) {
        str += "***" + arr[i];
    }
    console.log(str); // O(n)
}
//  Complexity => O(n^2) + O(n^2) + O(n) + O(n)



// With Built Function
function Sort_star() {
    var array = ["Bitcoin", "Ahmed", "Camel", "Dashboard"];
    console.log(array.sort()[0].split("").join("***"));
}
//  Complexity => O(n ^ 2) + O(n) + O(n)



function Expr_Matter() {
    do {
        confirm("Number Must Be Between 1 And 10");
        var a = Number(prompt("Enter A Number a :"));
        var b = Number(prompt("Enter A Number b :"));
        var c = Number(prompt("Enter A Number c :"));
    } while ((a < 1 || a > 10) || (b < 1 || b > 10) || (c < 1 || c > 10));
    // while (((a || b || c) < 1) || ((a || b || c) > 10)) => Does Not Work

    result_one = a + b + c;
    result_two = (a + b) * c;
    result_three = a * (b + c);
    result_four = a * b * c;
    var array = [result_one, result_two, result_three, result_four];
    // console.log(Math.max(...array));
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
}


function testEven() {
    if (n % 2 === 0) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}


function Between() {
    var a = Number(prompt("Enter A Number :"));
    var b = Number(prompt("Enter A Number :"));
    var array = [];
    var x = 0, c;
    if (a > b) {
        c = b;
        b = a;
        a = c;
    }
    for (var i = a; i <= b; i++) {
        array[x] = i;
        x++;
    }
    return console.log(array);
}
// Complexity O(b - a )


function move() {
    var position = Number(prompt("Enter A Number :"));
    var roll = Number(prompt("Enter A Number :"));
    console.log(position + Number(roll * 2));
}

function index() {
    var n = Number(prompt("Enter A Number :"));
    var array = [1, 2, 3, 4];
    for (var i = 0; i < array.length; i++) {
        if (i == n) {
            console.log(Math.pow(array[i], n));
        }
    }
    // Another Solution
    return array.length - 1 < n ? -1 : console.log(Math.pow(array[n], n));
}


function Stringy() {
    var size = Number(prompt("Enter A Number :"));
    var result = "";
    for (var i = 0; i < size; i++) {
        i % 2 === 0 ? result += "1" : result += "0";
    }
    console.log(result);
}


function Find_Multiples() {
    var int = Number(prompt("Enter A Number :"));
    var limit = Number(prompt("Enter A Number :"));
    var array = [];
    var x = 1;
    var i = 0;
    while (x <= limit) {
        if (x % int === 0) {
            array[i] = x;
            i++;
        }
        x++;
    }
    console.log(array);
}
// Complexity Linear



// function distinct() {
//     var a = [1, 1, 2];
//     console.log(a);
//     var x = 0;
//     var array = [];
//     for (var i = 0; i < a.length; i++) {
//         for (var j = i; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 x = x + 1; 
//             }
//         }
//         if (x > 1) {
//             a[i] = "Repeated";
//         }
//         x = 0;
//     }
//     console.log(a);

//     x = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== "Repeated") {
//             array[x] = a[i];
//             x++;
//         }
//     }

//     console.log(array);
// }

function distinct() {
    var a = [1, 2, 2, 3, 1];
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (arr.indexOf(a[i]) === -1) {
            arr.push(a[i]);
        }
    }
    return console.log(arr);
}


function sumMul() {
    confirm("First Number Must Be Large Of Second");
    var n = Number(prompt("Enter A Number :"));
    var m = Number(prompt("Enter A Number :"));
    var sum = 0;
    if (n != 0) {
        for (var i = n; i < m; i += n) {
            if (i % n == 0) {
                sum += i;
            }
        }
    }
    sum == 0 || n == 0 ? console.log("INVALID") : console.log(sum);
}


// Idwal Augustin => 420
// Space Counts As A Character
function BillBoard() {
    var name = String(prompt("Enter The Name :"));
    var price = Number(prompt("Enter The Price :"));
    var sum = 0;
    for (var i = 0; i < name.length; i++) {
        sum += price;
    }
    console.log(sum);
    console.log(name.length * price); // With The Multiplication
}
// Linear Complexity => 


function sayHello() {
    var name = String(prompt("Enter Your Name :"));
    var state = String(prompt("Enter Your State :"));
    var city = String(prompt("Enter Your City :"));

    var array = [name];
    console.log(`Hello, ${array}! Welcome to ${state}, ${city}!`);
}
// Constance Complexity => O(1)



// A, 1, 23, 456, 78, 9, Z
// My Solution
function Remove_first_last_char_partTwo() {
    var array = ("1,2,3,444,5664,6655,345,4").split(""); // Must return => null

    // Get The length Of Come That Convert To Array
    var length_str = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == ",") {
            length_str += 1;
        }
    }
    console.log(`Length Of Come Is : ${length_str}`);

    // Get The Number After Come [,] In First
    var length_come_first = 0;
    for (var i = 0; i < array.length; i++) {
        length_come_first = length_come_first + 1;
        if (array[i] == ",") {
            break;
        }
    }
    console.log(array);
    console.log(`Length Of Number After Come: ${length_come_first}`);

    // Get The Number After Come In last
    var length_come_last = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        length_come_last = length_come_last + 1;
        if (array[i] == ",") {
            break;
        }
    }
    console.log(`Length Of Number After Come But In Last: ${length_come_last}`);

    // Condition Of Length If True Return [result] If Not return [null] 
    // Remove Last Element And Come (,) => Convert To Result Variable
    var arr = [];
    var x = 0;
    if (length_str >= 2) {
        for (var i = length_come_first; i < array.length - length_come_last; i++) {
            arr[x] = array[i];
            // Convert , => " "
            if (arr[x] == ",") {
                arr[x] = " ";
            }
            x++;
        }
        console.log(arr.join(""));
    } else {
        return console.log(null);
    }
}


// Her Idea
function Remove_first_last_char_partTwo() {
    // With Built Function
    var array = ("1A,2B,3C,444D,5664E,6655F,345G,4J").split(","); // Must return => null
    console.log(array);
    var newArr = [];
    var x = 0;
    if (array.length > 3) {
        for (var i = 1; i < array.length - 1; i++) {
            newArr[x] = array[i];
            x++;
        }
        console.log(newArr.join(" "));
    }
    else {
        console.log(null);
    }
}

// With Built Function in One Line
function Remove_first_last_char_partTwo() {
    var array = ("1A,2B,3C,444D,5664E,6655F,345G,4J");
    if (array.length > 3) {
        return console.log(array.split(",").slice(1, -1).join(" "));
    } else {
        console.log(null);
    }
}



function pipeFix() {
    var array = [-10, 2, 3, 5, 6, 7, 9, -11];
    var newArr = [];
    min = array[0];
    max = array[0];
    // Get The Min & Max Of Array
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    var x = 0
    // Loop Thought Array in Min To Max
    for (var i = min; i <= max; i++) {
        newArr[x] = i;
        x++;
    }
    console.log(newArr);
}
// Block One => Complexity Linear => O(n)
// Block Two => Complexity Linear => O(n)


// This Code Run If Array Begin With [Min] And End With [Max]
function pipeFix() {
    var array = [1, 20];
    var newArr = [];
    var x = 0;
    for (var i = array[0]; i <= array[array.length - 1]; i++) {
        newArr[x] = i;
        x++;
    }
    console.log(newArr); // []
}


// With Built Function 
function pipeFix() {
    var array = [1, 2, 3, 4, 4, -1, 5];
    var newArr = [];
    var [start, end] = [Math.min(...array), Math.max(...array)];
    while (start <= end) {
        newArr.push(start);
        start++;
    }
    console.log(newArr);
}

// Lets Paint With Array 
function rectangle() {
    var line = prompt("Enter Line Number :");
    var col = prompt("Enter The Colone Number :");
    for (var i = 0; i < line; i++) {
        for (var j = 0; j < col; j++) {
            document.write("*");
        }
        document.write("<div></div>");
    }
}
// Quadrate Complexity => O(n * m) => O(line * colone)


function rectangleArray() {
    var array = [[], [], [], []];
    for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 3; j++) {
            array[i][j] = "\u{1F600}";
        }
    }
    console.log(array);
    // With Document
    for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 3; j++) {
            document.write("\u{1F600}");
        }
        document.write("<div></div>");
    }
}
// Quadrate Complexity => O(n^2)


function triangleEtoile_Array() {
    var array = [[], [], [], [], [], [], []];
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j <= i; j++) {
            array[i][j] = "\u{1F600}";
        }
    }
    console.log(array);
    // With Document
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j <= i; j++) {
            document.write("\u{1F600}");
        }
        document.write("<div></div>");
    }
}
// Quadrate Complexity => O(n^2)


function CadreEtoile_Array() {
    var array = [[], [], [], [], [], [], []];
    for (var i = 0; i < 7; i++) {
        // Plain The Vertical Line But just For Colone That Have Index 0 And Last
        // Plain The Horizontal Colone But just For Line That Have Index 0 And Last
        for (var j = 0; j < 7; j++) {
            if (j == 0 || j == 6 || i == 0 || i == 6) {
                array[i][j] = "\u{1F600}";
            } else {
                array[i][j] = "Hi";
            }
        }
    }
    console.log(array);
    // With Document 
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (j == 0 || j == 6 || i == 0 || i == 6) {
                document.write("\u{1F600}");
            } else {
                document.write("Hi ")
            }
        }
        document.write("<div></div>");
    }
}
// Block => O(n) x O(n) => O(n^2) => Quadrate Complexity


function CadreEtoileCare_Array() {
    var array = [[], [], [], [], [], [], []];
    // Must Line = Colone And Line % 2 = 0 
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (j == 0 || j == 6 || i == 0 || i == 6 || i == j || j == 7 - 1 - i) {
                array[i][j] = "\u{1F600}";
            } else {
                array[i][j] = "HI1";
            }
        }
    }
    console.log(array);
    // With Document
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (j == 0 || j == 6 || i == 0 || i == 6 || i == j || j == 7 - 1 - i) {
                document.write("\u{1F600}");
            } else {
                document.write("Hi ");
            }
        }
        document.write("<div></div>");
    }
}
// Quadrate Complexity => O(n^2)


function Another_Form() {
    var array = [[], [], [], [], [], [], [], [], [], []];
    // With Console
    for (var i = 0; i < 10; i++) {
        for (var k = 0; k < 9 - i; k++) {
            array[i][k] = "Hi";
        }
        for (var j = 9 - i; j < 10; j++) {
            array[i][j] = "\u{1F600}";
        }
    }
    console.log(array);
    // With Document 
    for (var i = 0; i < 10; i++) {
        for (var k = 0; k < 9 - i; k++) {
            document.write("Hi ");
        }
        for (var j = 9 - i; j < 10; j++) {
            document.write("\u{1F600}");
        }
        document.write(`<div></div>`);
    }
}
// Quadrate Complexity => O(n^2)


function DiamondCare_Array() {
    var array = [[], [], [], [], []];
    // With Document
    for (var i = 0; i < 5; i++) {
        for (var k = 0; k < 5 - i - 1; k++) {
            document.write(`space `);
        }
        for (var j = 0; j < 5; j++) {
            document.write("\u{1F600} ");
        }
        document.write(`<div></div>`);
    }
    // With Console
    for (var i = 0; i < 5; i++) {
        for (var k = 0; k <= 5 - i - 1; k++) {
            array[i][k] = `Hi`;
        }
        for (var j = 5 - i; j < 10; j++) {
            array[i][j] = `\u{1F600}`;
        }
        for (var p = 9 - i; p <= 9; p++) {
            array[i][p] = `Hi`;
        }
    }
    console.log(array);
}
// Quadrate Complexity => O(n^2)


function Triangle_Array() {
    var array = [[], [], [], [], [], [], [], [], [], []];
    // With Document
    for (var i = 0; i <= 5; i++) {
        for (var k = 0; k <= 4 - i; k++) {
            document.write(`Hi `);
        }
        for (var j = 5 - i; j <= 5 + i; j++) {
            document.write(`\u{1F600}`);
        }
        for (var p = 6 + i; p <= 10; p++) {
            document.write(`Hi `);
        }
        document.write(`<div></div>`);
    }
    // With Console
    for (var i = 0; i <= 5; i++) {
        for (var k = 0; k <= 4 - i; k++) {
            array[i][k] = `Hi`;
        }
        for (var j = 5 - i; j <= 5 + i; j++) {
            array[i][j] = `\u{1F600}`;
        }
        for (var p = 6 + i; p <= 10; p++) {
            array[i][p] = `Hi`;
        }
    }
    console.log(array);
}
// Quadrate Complexity => O(n^2)


function Empty_Triangle_Array() {
    var array = [[], [], [], [], [], []];
    // With Document
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 5 - i; j++) {
            document.write(`Hi `);
        }
        for (var j = 5 - i; j <= 5 + i; j++) {
            if (j == 5 + i || j == 5 - i || i == 5) {
                document.write("\u{1F600}")
            } else {
                document.write(`Hi `);
            }
        }
        for (var j = 6 + i; j < 11; j++) {
            document.write(`Hi `);
        }
        document.write("<div></div>")
    }
    // With Console
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 5 - i; j++) {
            array[i][j] = "Hi";
        }
        for (var j = 5 - i; j <= 5 + i; j++) {
            if (j == 5 + i || j == 5 - i || i == 5) {
                array[i][j] = "\u{1F600}";
            } else {
                array[i][j] = "Hi";
            }
        }
        for (var j = 6 + i; j < 11; j++) {
            array[i][j] = "Hi";
        }
    }
    console.log(array);
}
// Quadrate Complexity => O(n^2)


function Two_Reverse_Triangle_Array() {
    var array = [[], [], [], [], [], [], []];
    var x = 0;
    for (var i = 0; i < 7; i++) {
        if (i < 3) {
            for (var j = 0; j <= i; j++) {
                array[i][j] = "\u{1F600}";
            }
        } else {
            for (var j = 0; j < 4 - x; j++) {
                array[i][j] = "\u{1F600}";
            }
            x++;
        }
    }
    console.log(array);
    // With Document
    var x = 0;
    for (var i = 0; i < 7; i++) {
        if (i < 3) {
            for (var j = 0; j <= i; j++) {
                document.write("\u{1F600}");
            }
        } else {
            for (var j = 0; j < 4 - x; j++) {
                document.write("\u{1F600}");
            }
            x++;
        }
        document.write("<div></div>");
    }
}
// Quadrate Complexity => O(n^2) 


function Missing_letter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var str = String(prompt("Enter a Number : "));
    var x = 0;
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] == str[0]) {
            var FirstIndex = x;
        }
        if (letters[i] == str[str.length - 1]) {
            var LastIndex = x;
        }
        x++;
    }
    var index = 0, i = FirstIndex, miss;
    var Missing_letter = "";
    console.log(`First Index In This String is ${FirstIndex} And Last Is ${LastIndex}`);
    while (index < str.length) {
        if (letters[i] !== str[index]) {
            miss = true
            Missing_letter += letters[i] + " ";
            i++;
        }
        index++;
        i++;
    }
    if (miss == true)
        console.log(`The Missing Letters Is : ${Missing_letter}`);
    else
        console.log(`No Missing Letters : ${str}`);
}


function Number_reverse_Array() {
    var nbr = Number(prompt("Enter A Number :"));
    var str_nbr = `${nbr}`;
    console.log(str_nbr);
    var array = [];
    for (var i = 0; i < str_nbr.length; i++) {
        array[i] = str_nbr[i];
    }
    console.log(array);
    var new_array = [];
    for (var i = 0; i < array.length; i++) {
        new_array[i] = array[array.length - 1 - i];
    }
    console.log(new_array);
    // With Built Function
    return console.log(str_nbr.split("").reverse());
}
// Linear Complexity => O(n)


function Longest_Word() {
    var str = "In Programming We Love Elzero Academy Toooooooooooooooooo Much";
    str = `${str} `;
    console.log(str);

    // Convert The String To Array And Each String Convert Our Length To Another Array
    var Word = "";
    var x = 0, nbr = 0;
    var array = [], Nbr_array = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            Word += str[i];
            nbr += 1;
        } else {
            array[x] = Word;
            Nbr_array[x] = nbr;
            Word = ""; x++; nbr = 0;
        }
    }
    console.log(array);
    console.log(Nbr_array);

    // Find The Longest String By Array
    var max = Nbr_array[0];
    for (var j = 1; j < Nbr_array.length; j++) {
        if (max < Nbr_array[j]) {
            max = Nbr_array[j];
        }
    }
    console.log(max);

    // Return The Longest
    for (var k = 0; k < array.length; k++) {
        if (array[k].length === max) {
            console.log(`The Longest Is : ${array[k]}`);
        }
    }
}
// Linear Complexity => O(n)



function Remove_Character() {
    var char = String(prompt("Enter The The Character That You Want To Remove : "));
    var str = "Elzero Webdd schooldd";

    // Convert String To Array
    var array = [];
    for (var i = 0; i < str.length; i++) {
        array[i] = str[i];
    }

    // Remove The Char From Array
    var new_arr = [];
    var x = 0;
    for (var i = 0; i < str.length; i++) {
        if (array[i].toLowerCase() !== char.toLowerCase() || array[i].toUpperCase() !== char.toUpperCase()) {
            new_arr[x] = array[i];
            x++;
        }
    }

    // Convert New Array To String
    var word = "";
    for (var i = 0; i < new_arr.length; i++) {
        word += new_arr[i];
    }
    console.log(word);
}


function Remove_Character_Replace() {
    // Write The Code Here
}
function Remove_NbrCharacter() {
    // Write The Code Here
}


function RemoveDuplicateWords() {
    var str = "School Web Elzero Web Web School Web";
    str = `${str} `;
    var array = [];
    var x = 0;
    var word = "";
    // Convert String To Array
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        }
        else {
            array[x] = word;
            word = "";
            x++;
        }
    }
    console.log(array);

    // Loop Thought Array If Any Element Dedicated Remove It => Start My Idea
    var new_arr = [];
    var index = 0;
    var y = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                index += 1;
            }
        }
        if (index < 2) {
            new_arr[y] = array[i];
            y++;
        }
        index = 0;
    }
    console.log(new_arr);

    // Loop Thought Array And Convert To String
    var NoDuplicated = "";
    for (var i = 0; i < new_arr.length; i++) {
        NoDuplicated += new_arr[i] + " ";
    }
    console.log(NoDuplicated);
}
//  Quadrate Complexity


function RemoveDuplicateWords() {
    var str = "School Web Elzero Web Web School Web";
    str = str.split(" ");
    console.log(str);
    // Loop And Check If Any Element Duplicated
    var new_arr = [];
    var index = 0; y = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            if (str[i] === str[j]) {
                y++;
            }
        }
        if (y < 2) {
            new_arr[index] = str[i];
            index++;
        }
        y = 0;
    }
    console.log(new_arr);
    console.log(new_arr.join(" "));
}
//  Quadrate Complexity


// 120 => 120
// 1530 => 1_530
// 120510650 => 120,510_650
// 510650480910 => 510,650,780_910
// 12069057014032 => 12,069,057,014_032
function add_commas_and_underscore() {
    var nbr = Number(prompt("Enter A Number : "));
    console.log(nbr);
    var str_nbr = "", x = 0;
    nbr = `${nbr}`;
    if (nbr.length <= 3) {
        console.log(nbr);
    }
    else if (nbr.length >= 4 && nbr.length < 7) {

    }
}


function Next_n_Number() {
    var n = Number(prompt("Enter A Number n : "));
    var stop = 0, i = 2;
    var x = true;
    var array = [];
    while (stop < n) {
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                x = false;
                break;
            }
        }
        if (x === true) {
            array[stop] = i;
            stop++;
        }
        x = true;
        i++;
    }
    console.log(array);
}

function First_Second_MAx() {
    var array = [-12, 12, 3, 4, -9, 10, 23, 100, -10, 20];
    var max1, max2;
    max1 = array[0];
    max2 = array[0];
    for (var i = 1; i < 10; i++) {
        if (max1 < array[i]) {
            max1 = array[i];
        }
    }
    console.log("The First Max Of The table Is :", max1);
    for (var i = 0; i < 10; i++) {
        if (max2 < array[i] && max1 != array[i]) {
            max2 = array[i];
        }
    }
    console.log("The Second Max Of The table Is :", max2);
}
// Linear Complexity => O(n) => Because We Have Two Block Each Of Them Have O(n)

function First_Second_MAx() {
    var array = [-12, 12, 3, 4, -9, 10, 23, 100, -10, 20];
    var max1 = array[0];
    var max2 = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max1 < array[i]) {
            max2 = max1;
            max1 = array[i];
        }
        if (max2 < array[i] && max1 > array[i]) {
            max2 = array[i];
        }
    }
    console.log(`First Max is : ${max1} And Second Is : ${max2}`);
}
// Linear Complexity => O(n) => We Have One Bl bock


function Coding_Meetup() {
    var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var new_array = [];
    var x = 0;
    var list1 = [
        { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
        { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
        { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
        { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
    ];
    for (var i = 0; i < letter.length; i++) {
        for (var j = 0; j < list1.length; j++) {
            if (letter[i] == list1[j].language[0]) {
                new_array[x] = list1[j];
                x++;
            }
        }
    }
    console.log(new_array);
}


function Vowel_Count() {
    var str = String(prompt("Enter A String : "));
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "o" || str[i] == "i" || str[i] == "e" || str[i] == "u") {
            count += 1;
        }
    }
    console.log(`THis String Have ${count} Vowel`);
    // With Built Function 
    var vowels = "aeoiu";
    count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count += 1;
        }
    }
    console.log(`THis String Have ${count} Vowel`);
}
// Linear Complexity => O(n)


function Hight_Lowest() {
    var str = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
    str = `${str} `;
    // Convert To Array 
    var array = [];
    var x = 0;
    var tmp = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            tmp += str[i];
        }
        if (str[i] === " ") {
            array[x] = tmp;
            tmp = "";
            x++;
        }
    }
    console.log(array);
    // Check The Min And Max Of The Array 
    var min = Number(array[0]);
    var max = Number(array[0]);
    for (var i = 1; i < array.length; i++) {
        array[i] = Number(array[i]);
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log(`\"${max} ${min}\"`);
    // With Built Function
    var array = str.split(" ");
    console.log(`\"${Math.max(...array)} ${Math.min(...array)}\"`);
    // With Another Built Function 
    var array = array.sort((a, b) => a - b);
    console.log(`\"${array[array.length - 1]} ${array[0]}\"`);
}


function Square_Digit() {
    var nbr = Number(prompt("Enter A Number : "));
    nbr = String(nbr);
    var result = "";
    // Loop Thought The Array And Square Each Element
    for (var i = 0; i < nbr.length; i++) {
        result += nbr[i] * nbr[i];
    }
    console.log(Number(result));
}


function descendingOrder() {
    do {
        var nbr = Number(prompt("Enter A Number : "));
    } while (nbr < 0);
    nbr = String(nbr);
    // Converting The Nbr To Array
    var array = [];
    for (var i = 0; i < nbr.length; i++) {
        array[i] = nbr[i];
    }
    console.log(array);
    // Sort The Array
    var result = "";
    var tmp = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] * 1 < array[j] * 1) {
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    console.log(array);
    // Join The Array
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    console.log(Number(result));
    // With Built Function 
    return console.log(Number(nbr.toString().split("").sort((a, b) => b - a).join("")));
}
// Block One => O(n)
// Block Two => O(n^2)
// Block Three => O(n)


function Number_Char_Sc() {
    var data = String(prompt("Enter A Character : "))
    if (data <= "z" && data >= "a") {
        console.log(`${data} Is Character`)
    }
    else if (data <= "9" && data >= "0") {
        console.log(`${data} Is Number`)
    }
    else {
        console.log(`${data} Is Special Character"`)
    }
}

function getMiddle() {
    var str = "testing";
    var result = "", x, nbr;
    if (str.length % 2 == 0) {
        result = str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        nbr = str.length;
        x = nbr % 2;
        nbr = nbr - x;
        nbr = nbr / 2;
        result = str[nbr];
        // result = str[Math.trunc(str.length / 2)];
    }
    console.log(result);
}


function Char_length() {
    var str = "Hello World!";
    var result = "";
    var i = 0;
    while (result !== str) {
        result += str[i];
        i++;
    }
    console.log(i);
    console.log(str.length);
}
function Num_length() {
    var nbr = Number(prompt("Enter A Number : "));
    var reset = 0, count = 1;
    while (reset !== nbr) {
        nbr = nbr / 10;
        reset = nbr % 10;
        count += 1;
    };
    console.log(count);
}


// Loop Thought The Array And Convert To String 
function Mumbling() {
    var str = "RqaEzty";
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
        for (var j = 0; j < i; j++) {
            result += str[i].toLowerCase();
        }
        if (i !== str.length - 1) {
            result = result + "-";
        }
    }
    console.log(result);
}
// Block One => O(n)
// Block Two => O(n - 1)
// Quadrate Complexity => (n^2)


function IsSquare() {
    var nbr = Number(prompt("Enter A Number : "));
    x = false;
    for (var i = 0; i <= nbr / 2; i++) {
        if (i * i === nbr) {
            x = true;
            break;
        }
    }
    x == true ? console.log(true) : console.log(false);
    // Another Solution 
    var num = Math.sqrt(nbr);
    num % 2 === 0 ? console.log(true) : console.log(false);
    // With Built Function

    return console.log(Number.isInteger(Math.sqrt(nbr)));
}
// Code One => O(n / 2)
// Code Two => O(1)


function List_filtering() {
    var array = [1, 2, "A", "b", "2"];
    var new_array = [];
    var x = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string") {
            new_array[x] = array[i];
            x++;
        }
    }
    console.log(new_array);
}


function isIsogram() {
    var str = "hello";
    var x = true;
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i].toLowerCase() === str[j].toLowerCase()) {
                x = false;
            }
        }
        if (x === false) {
            break;
        }
    }
    x === false ? console.log(false) : console.log(true);
}
// Block one => O(n)
// Sous Block => O(n - i + 1)
// O(n^2) => Quadrate Complexity

function XD() {
    var str = "xo";
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == "x") {
            countX += 1;
        }
        if (str[i].toLowerCase() == "o") {
            countO += 1;
        }
    }
    countX === countO ? console.log(true) : console.log(false);
}
// Linear Complexity => O(n)


// Convert To Array
// Compare The LEngth For Each Word
function ShortedWord() {
    var str = "Let's Travel Aboard Shall We ";
    var array = [];
    var x = 0;
    var word = "";
    // Convert String To Array
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            array[x] = word;
            word = "";
            x++;
            continue;
        }
        word += str[i];
    }
    console.log(array);
    // Compare The Length For Each Word And Print Him In Console
    var min = array[0].length;
    for (var i = 1; i < array.length; i++) {
        if (min > array[i].length) {
            min = array[i].length;
        }
    }
    console.log(min);
    // Print The Word
    for (var i = 0; i < array.length; i++) {
        if (array[i].length === min) {
            console.log(`The Lowest In This Text Is : ${array[i]}`);
        }
    }
}

// With Built Function Math.min(...array) And Split(" ")
function ShortedWord() {
    var str = "Let's Travel Aboard Shall We".split(" ");
    console.log(str);
    var min = str[0].length;
    for (var i = 1; i < str.length; i++) {
        if (min > str[i].length) {
            min = str[i].length;
        }
    }
    console.log(min);
}
function ShortedWord() {
    var str = "Let's Travel Aboard Shall We ";
    var array = [];
    var x = 0;
    var word = "";
    // Convert String To Array
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            array[x] = word.length;
            word = "";
            x++;
            continue;
        }
        word += str[i];
    }
    console.log(Math.min(...array));

}


function Casing_String() {
    var str = String(prompt("Enter A String : "));
    var array = [];
    // Convert To Array
    for (var i = 0; i < str.length; i++) {
        array[i] = str[i];
    }
    var y = -1;
    // Convert First Element To UpperCase 
    for (var i = 1; i < array.length - 1; i++) {
        if (array[i] === " ") {
            y = i;
        }
        array[y + 1] = array[y + 1].toUpperCase();
    }
    console.log(array.join(""));
    console.log(str);
}

function is_triangle() {
    var t = Number(prompt("Enter A Number : "));
    var x = 0;
    var i = 0;
    while (x < t) {
        for (var j = 0; j <= i; j++) {
            document.write(" * ");
            x++;
        }
        document.write("<div></div>");
        i++;
    }
    x == t ? console.log(true) : console.log(false);
    console.log(x);
}

// I Do Not Understand This Code
function is_triangle() {
    var t = Number(prompt("Enter A Number : ")); // t = 7
    var level = 1; // level = 1
    while (t > 0) { // true
        t -= level; // t = t - level
        level += 1; // level = level + 1
    }
    t === 0 ? console.log(true) : console.log(false);
}

function is_triangle_array() {
    var t = Number(prompt("Enter A Number : "));
    var array = [[], [], [], [], [], [], [], [], [], []];
    var x = 0;
    var i = 0;
    while (x < t) {
        for (var j = 0; j <= i; j++) {
            array[i][j] = "\u{1F600}";
            x++;
        }
        i++;
    }
    console.log(array);
}


function SumNumbers() {
    var a = Number(prompt("Enter Number a : "));
    var b = Number(prompt("Enter Number b : "));
    var sum = 0;
    if (a > b) {
        var c = a;
        a = b;
        b = c;
    }
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    console.log(`${sum}`);
}


// Loop Thought The Array [0 --> degree / 45]  => While Loop
// "S", 180 => "N"
// "SE", -45 => "E"
// "W", 495 => "NE"
function Compass() {
    var directions = ["N", "NE", "E", "SE", "S", "MS", "W", "NW",
        "N", "NE", "E", "SE", "S", "MS", "W", "NW",
        "N", "NE", "E", "SE", "S", "MS", "W", "NW",
        "N", "NE", "E", "SE", "S", "MS", "W", "NW",
        "N", "NE", "E", "SE", "S", "MS", "W", "NW",
        "N", "NE", "E", "SE", "S", "MS", "W", "NW"];
    console.log(directions);
    var direct = String(prompt("Enter Your Direction Please : "));
    do {
        var degree = Number(prompt("Enter The Degree Please : "));
    } while (degree > 1080 || degree < -1080 || degree % 45 != 0);
    /* Start Positive Direction */
    // Get The Index Of The Direction In Array For Positive Direction 
    if (degree >= 0) {
        var index;
        for (var i = 0; i < directions.length; i++) {
            if (direct == directions[i]) {
                index = i;
                break;
            }
        }
        console.log(index);
        // Get The Direction In Array In Position Direction
        var count = 0;
        while (count < degree / 45) {
            index++;
            count++;
        }
        console.log(directions[index]);
        /* End Positive Direction */
    } else {
        /* Start Negative Direction */
        var newArr = [];
        // Get The Reverse Of The Array
        var x = 0;
        for (var i = directions.length; i > 0; i--) {
            newArr[x] = directions[i - 1];
            x++;
        }
        console.log(newArr);
        // Get The Index Of The Array 
        index = 0;
        for (var i = 0; i < newArr.length; i++) {
            if (direct == newArr[i]) {
                index = i;
                break;
            }
        }
        console.log(index);
        // Get The Direction In Array In Negative Direction
        count = 0;
        while (count < -(degree / 45)) {
            index++;
            count++;
        }
        console.log(newArr[index]);
        /* End Negative Direction */
    }
}
// Complexity => O(1)

function Compass() {
    var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    var facing = String(prompt("Enter Your Direction Please : "));
    do {
        var turn = Number(prompt("Enter The Degree Please : "));
    } while (turn > 1080 || turn < -1080 || turn % 45 != 0);

    var turns = Math.trunc(turn / 45);

    var start_idx = directions.indexOf(facing);
    var end_index = Number(turns + start_idx) % length.directions;

    console.log(directions[end_index]);
}


function ParseInt() {
    var str = "10 Hello 20 Abdellah 50 Hello 10";
    // var str = String(prompt("Enter The String That You Want To Parse It : "));
    str = `${str}          `;
    var array = [];
    var result = "";
    var x = 0;
    // Convert To Array 
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
        if (str[i] === " " && result !== "") {
            array[x] = result;
            result = "";
            x++;
        }
    }
    console.log(array);
    // Check If There Is Some Numbers By + or -
    sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (+array[i] * 0 === 0) {
            sum += +array[i];
        }
    }
    console.log(sum);
}


function Advanced_ParseInt() {
    var str = "Hello1020how 309Hello20How are30Iam50Fine 80";
    var result = "";
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        while (+str[i] * 0 === 0 && str[i] !== " ") {
            result += str[i];
            i++;
        }
        if (result !== "") {
            sum += +result;
            result = "";
        }
    }
    return console.log(sum);
}
// Complexity Linear => O(n)


function FlyBy() {
    var lamps = "xxxxxxxxx";
    var drone = "==T";
    var result = "";
    var x = 0;
    while (x < lamps.length) {
        if (x < drone.length) {
            result += "o";
            x++;
            continue;
        }
        result += "x";
        x++;
    }
    console.log(result);
}
// Block One [While] => O(n) => n Is Length Of The Lamps
// Block Two [If]    => O(k) => k Is Length Of The Drone
// Complexity => O(kn)

function Array_length() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var newArray = [];
    var length = 0;
    while (array[length] !== newArray[length]) {
        newArray[length] = array[length];
        length++;
    }
    console.log(length);
}
// Linear Complexity => O(n) => n Is Length Of The Array



function cake() {
    var candles = Number(prompt("Enter The Number Of The Candles : "));
    var debris = String(prompt("Enter The Number Of The Debris : "));
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var x = (candles * 70) / 100;
    var total = 0;
    for (var i = 0; i < debris.length; i++) {
        for (var j = 0; j < letters.length; j++) {
            if (debris[i] === letters[j]) {
                if (j % 2 === 0) {
                    total += 97 + j;
                } else {
                    total += (j + 1);
                }
            }
        }
    }
    console.log(total);
    total > x ? console.log("Fire!") : console.log("That Was Close");
}
// Block 1 => O(n) => n Is Length Of The debris
// Block 2 => O(26) => Length Of Letters
// Block 3 => O(1)


function road() {
    // n => Bumpy
    // ___ => No Bumpy 
    var road = String(prompt("Enter Your Road : "));
    var BumpyNumber = 0;
    for (var i = 0; i < road.length; i++) {
        if (road[i].toLowerCase() === "n") {
            BumpyNumber += 1;
        }
    }
    BumpyNumber > 15 ? console.log(`Car Dead`) : console.log(`Woohoo!`);
}
// O(R) => R is Length Of The Road 


function isDivisible() {
    var numbers = [12, 3, 4, 6, 1]
    x = 0;
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[0] % numbers[i] == 0) {
            x += 1
            console.log(x);
        }
    }
    if (x == numbers.length - 1) return true;
    else return false;
}



// x > 0
// 0 < d < 9
function numbersWithDigitInside(x, d) {
    x = String(x);
    d = String(d);
    var count = 0;
    var sum = 0;
    var product = 1;
    var j = 0;
    var verification = false;
    for (var i = 1; i <= x; i++) {
        i = String(i); // i = 1
        j = 0;
        while (j < i.length) {
            if (d === i[j]) {
                verification = true;
            }
            j++;
        }
        if (verification === true) {
            count += 1
            sum += +i;
            product *= +i;
        }
        verification = false;
    }
    if (count == 0) product = 0
    return [count, sum, product];
}
// senior => Age > 50
// handicap > 7
// array[age, year Of handicap]
function openOrSenior(data) {
    var data = [[45, 12], [55, 21], [19, -2], [104, 20]];
    var result = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] < 55 || data[i][1] < 7) {
            result[index] = "Open";
            index++;
        }
        else {
            result[index] = "Senior";
            index++;
        }
    }
    return result;
}


function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
        p0 = p0 + (p0 * percent) / 100 + aug;
        count++;
    }
    return count;
}

function sortCards() {
    var array = ["J", "J", 2, "T", 9, 6];
    var Nbr_Char = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    var indexing = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < Nbr_Char.length; j++) {
            if (String(array[i]) == Nbr_Char[j]) {
                indexing[i] = j;
            }
        }
    }
    console.log(indexing);
    // Sort The Indexing
    for (var i = 0; i < indexing.length; i++) {
        indexMin = i;
        for (var j = i + 1; j < indexing.length; j++) {
            if (indexing[indexMin] > indexing[j]) {
                indexMin = j;
            }
        }
        tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;

        tmp = indexing[i];
        indexing[i] = indexing[indexMin];
        indexing[indexMin] = tmp;
    }
    console.log(array);
}


function sortGrades() {
    var array = ["V0+", "V0", "V16", "V2", "VB", "V6"];
    var Nbr_Char = ["VB", "V0", "V+0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8",
        "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];
    var indexing = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < Nbr_Char.length; j++) {
            if (String(array[i]) == Nbr_Char[j]) {
                indexing[i] = j;
            }
        }
    }
    console.log(indexing);
    // Sort The Indexing
    for (var i = 0; i < indexing.length; i++) {
        indexMin = i;
        for (var j = i + 1; j < indexing.length; j++) {
            if (indexing[indexMin] > indexing[j]) {
                indexMin = j;
            }
        }
        tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;

        tmp = indexing[i];
        indexing[i] = indexing[indexMin];
        indexing[indexMin] = tmp;
    }
    console.log(array);
}

function sort_nbr_letter() {
    // Sort The Array 
    var tmp, indexMin;
    var array = ["B", "A", "D", "C", 5, 3, 2, 1, 0, 4];
    console.log(array);
    var Nbr_Char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var indexing = [];
    // Get Index For Each Element
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < Nbr_Char.length; j++) {
            if (array[i] === Nbr_Char[j]) {
                indexing[i] = j;
            }
        }
    }
    console.log(indexing);
    // Sort The Array By Sorting The Indexing
    for (var i = 0; i < indexing.length; i++) {
        indexMin = i;
        for (var j = i + 1; j < indexing.length; j++) {
            if (indexing[indexMin] > indexing[j]) {
                indexMin = j;
            }
        }
        // Change The Element of The Indexing And Array Using The tmp Variable
        tmp = indexing[indexMin];
        indexing[indexMin] = indexing[i];
        indexing[i] = tmp;

        tmp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = tmp;
    }
    console.log(indexing);
    console.log(array);
}

function sort_nbr_letter() {
    // Sort The Array 
    var tmp, indexMin;
    var array = ["B", "A", "D", "C", 5, 3, 2, 1, 0, 4];
    console.log(array);
    var Nbr_Char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var indexing = [];
    // Get Index For Each Element
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < Nbr_Char.length; j++) {
            if (array[i] === Nbr_Char[j]) {
                indexing[i] = j;
            }
        }
    }
    console.log(indexing);
    // Sort The Array By Sorting The Indexing
    for (var i = 0; i < indexing.length; i++) {
        indexMin = i;
        for (var j = i + 1; j < indexing.length; j++) {
            if (indexing[indexMin] > indexing[j]) {
                indexMin = j;
            }
        }
        // Change The Element of The Indexing And Array Using The tmp Variable
        tmp = indexing[indexMin];
        indexing[indexMin] = indexing[i];
        indexing[i] = tmp;

        tmp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = tmp;
    }
    console.log(indexing);
    console.log(array);
}


function Found_RepeatedChar() {
    var string = "Osaaamm    mma"; // Should Return a
    var RepNbr = [];
    var count;
    // Remove The Space
    var str = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            str += string[i];
        }
    }
    console.log(str);
    // Find The Repeated Number And Converting
    for (var i = 0; i < str.length; i++) {
        count = 0;
        for (var j = i; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }
        RepNbr[i] = count;
    }
    console.log(RepNbr);
    // Get The Max
    var max = RepNbr[0];
    for (var i = 1; i < RepNbr.length; i++) {
        if (RepNbr[i] > max) {
            max = RepNbr[i];
        }
    }
    console.log(max);
    var maxI = [];
    var x = 0;
    // Loop And Found Others MAx
    for (var i = 0; i < RepNbr.length; i++) {
        if (RepNbr[i] == max) {
            maxI[x] = max;
            x++;
        }
    }
    console.log(maxI);
    // Found The Index For Each Number;
    var index = [];
    x = 0;
    for (var i = 0; i < RepNbr.length; i++) {
        for (var j = 0; j < maxI.length; j++) {
            if (RepNbr[i] == maxI[j]) {
                index[x] = i;
                x++;
                break;
            }
        }
    }
    console.log(index);
    // Show The Result
    for (var i = 0; i < index.length; i++) {
        console.log(`The Repeated Character Is : ${str[index[i]]}`);
    }
}


// a => length of arrow => Integer And Large Then 1
// area = Pi(d^2) => d is a/2
function Annulus_Area() {
    do {
        var a = Number(prompt("Enter The A : "));
    } while (a < 1);
    var d = a / 2;
    var area = Math.PI * (Math.pow(d, 2));
    console.log(Number(area.toFixed(2)));
}

// a => Blocksize
// n => Number Of Blocks
// (a, n) => Large Then 1
function Perimeter_Sequence() {
    do {
        var a = Number(prompt("Enter The BlockSize : "));
        var n = Number(prompt("Enter The Number Os Blocks : "));
        var perimeter = n * a * 4;
    } while (a < 1 || n < 1);
    console.log(`The Perimeter is ${perimeter}`);
}


// 16 + 18 = 214
// 26 + 39 = 515
function Add_GForget() {
    var num1 = Number(prompt("Enter Number One : "));
    var num2 = Number(prompt("Enter Number Two : "));
    var count1 = 0, count2 = 0, sup = 0;
    var rest1 = 0, rest2 = 0;
    var Arr1 = [], Arr2 = [], Arr3 = [];
    var tmp1, tmp2, result = "";
    // Get The length Of num1 
    tmp1 = num1;
    tmp2 = num2;
    while (rest1 != tmp1) {
        count1++;
        rest1 = tmp1 % 10;
        if (tmp1 == rest1) break;
        tmp1 = tmp1 / 10;
    }
    console.log(count1);
    // Get The Length Of num2
    while (rest2 != tmp2) {
        count2++;
        rest2 = tmp2 % 10;
        if (tmp2 == rest2) break;
        tmp2 = tmp2 / 10;
    }
    console.log(count2);
    // Get The Sup Between num1 And num2
    count1 > count2 ? sup = count1 : sup = count2;
    // Convert num1 And num2 To Arr1 And Arr2 Respectivement && Get The Sum
    num1 = `${num1}`;
    num2 = `${num2}`;
    for (var i = 0; i < sup; i++) {
        Arr1[i] = num1[i];
        Arr2[i] = num2[i];
        if (Arr1[i] == undefined) Arr1[i] = "0";
        if (Arr2[i] == undefined) Arr2[i] = "0";
        Arr3[i] = +Arr1[i] + +Arr2[i];
    }
    console.log(Arr1);
    console.log(Arr2);
    console.log(Arr3);
    // Get The Sum 
    for (var i = 0; i < sup; i++) {
        result += Arr3[i];
    }
    console.log("The Result Is : ", result * 1);
}


function Add_GForget() {
    // With Built In Function 
    var num1 = String(prompt("Enter Number One : "));
    var num2 = String(prompt("Enter Number Two : "));
    var sup = String(Math.max(num1, num2));
    var array = [];
    for (var i = 0; i < sup.length; i++) {
        if (num1[i] == undefined) num1[i] = "";
        if (num2[i] == undefined) num2[i] = "";
        array[i] = Number(+num1[i] + +num2[i]);
    }
    console.log(array.join(""));
}


function Special_Number(nbr) {
    do {
        var nbr = Number(prompt("Enter A Number : "));
    } while (nbr <= 0);
    nbr >= 1 && nbr <= 5 ? console.log("Special!!") : console.log("NOT!!");
}


function Arrow_area() {
    var a = Number(prompt("Donne a : "));
    var b = Number(prompt("Donne b : "));
    console.log(a * 1 / 2 * b * 1 / 2);
}


function Automorphic() {
    var n = String(prompt("Enter A Number : "));
    var pow = String(n ** 2);
    var autoM = "";
    var count = 0;
    var i = pow.length - 1;
    while (count < n.length) {
        autoM = pow[i] + autoM;
        count++;
        i--;
    }
    n == autoM
        ? console.log("Automorphic")
        : console.log("Not!!");
}

function isPronic() {
    var n = Number(prompt("Enter A Number : "));
    var x;
    for (var i = 0; i <= n / 2; i++) {
        if ((i * (i + 1)) == n) {
            x = true;
            break;
        }
    }
    (x == true || n == 0) && n >= 0 ?
        console.log(`${n} Is Pronic Number`) :
        console.log(`${n} Is Not Pronic Number`)
}

// Start With Function, Regular Function And Arrow Function 

var Multiples_Sums = function () {
    var n = Number(prompt("Enter The Number : "));
    var count = 1, x = 0, sum = 0;
    var nbr = [];
    // while (count <= 100) {
    //     if (count % n == 0) {
    //         nbr[x] = `${count}`;
    //         x++;
    //     }
    //     count++;
    // }
    for (var i = 0; i <= 100; i += n) {
        nbr[x] = `${i}`;
        x++;
    }
    console.log(nbr);
    // Take The Digit Sum For Each Multiples
    for (var i = 0; i < nbr.length; i++) {
        for (var j = 0; j < nbr[i].length; j++) {
            sum += +nbr[i][j];
        }
    }
    console.log(sum);
}
// While Loop => O(100/i)
// For Loop => O(19200 / i ** 2)


function digits() {
    var n = prompt("Enter A Number : ");
    var count = 0;
    var result = "";
    // while (Math.trunc(n) != 0) {
    //     n = n / 10;
    //     count++;
    // }
    while (result != n) {
        result += n[count];
        count++;
    }
    console.log(count);
}

function Get_Number() {
    var nbr = Number(prompt("Enter A Number : "));
    var count = 0;
    var result = 0;
    while (true) {
        result += count * 2;
        if (result > nbr) {
            break;
        }
        count++;
    }
    console.log(count - 1);
}

// Less Then bound And Positive And Divisible By Divisor
function MAx_Multiple() {
    var bound = Number(prompt("Enter The Bond : "));
    var divisor = Number(prompt("Enter The Divisor : "));
    var n = 0, i = 0;
    while (i <= bound) {
        if (i % divisor == 0) {
            n = i;
        }
        i++;
    }
    console.log(n);
}

function power_two() {
    var nbr = Number(prompt("Enter A Number : "));
    var i = 0;
    // while (i <= nbr / 2) {
    //     if (2 ** i == nbr) {
    //         x = true;
    //         break;
    //     }
    //     i++;
    // }
    while (true) {
        if (2 ** i == nbr) {
            x = true;
            break;
        } if (2 ** i >= nbr / 2) {
            x = false;
            break;
        }
        i++;
    }
    x == true ? console.log(true) : console.log(false);
}

// With Built in Function
var getDecimal = _ => {
    var n = String(prompt("Enter a Number : "));
    var result = +(n % 1).toFixed(1);
    result >= 0 ? console.log(result) : console.log(result * -1);
}
// With Native Code 
var getDecimal = _ => {
    var n = String(prompt("Enter a Number : "));
    var divInt = Math.trunc(n);
    var result = n - divInt;
    console.log(result);
}


function disemvowel(str) {
    var vowels = ["a", "e", "i", "y", "o", "u", "A", "E", "I", "Y", "O", "U"];
    var array = [];
    // Convert String To Array 
    for (var i = 0; i < str.length; i++) {
        array[i] = str[i];
    }
    console.log(array);
    // Loop Thought The Array And Check
    for (var j = 0; j < array.length; j++) {
        for (var k = 0; k < vowels.length; k++) {
            if (vowels[k] == array[j]) {
                array[j] = "";
            }
        }
    }
    console.log(array);
    // Convert To The Str And Return Str
    str = "";
    for (var i = 0; i < array.length; i++) {
        str += array[i];
    }
    console.log(str);
}
// disemvowel("No offense but,\nYour writing is among the worst I've ever read");

function reverseNumber() {
    var n = Number(prompt("Enter A Number : "));
    var reverse = 0;
    while (n != 0) {
        reverse = (n % 10) + reverse * 10;
        n = Math.trunc(n / 10);
    }
    console.log(`The Reverse Is : ${reverse}`);
}

function isCoprime(x, y) {
    var x = Number(prompt("Enter A Number : "));
    var y = Number(prompt("Enter A Number :"));
    var coprime = 0;
    x < y ? min = x : min = y;
    for (var i = 1; i <= min; i++) {
        if (x % i == 0 && y % i == 0) {
            coprime = i;
        }
    }
    coprime == 1
        ? console.log(`${x} And ${y} Is Coprime`)
        : console.log(`${x} And ${y} Is Not Coprime`);
}


function sharedBits(a, b) {
    var a = Number(prompt("Enter Number :"));
    var b = Number(prompt("Enter A Number :"));
    // Return The Number In Bits
    var bitsA = "", bitsB = "";
    var restA = "", restB = "";
    while (a != 0 || bitsA.length == 3) {
        restA = a % 2;
        a = Math.trunc(a / 2);
        bitsA = `${restA}` + bitsA;
    }
    console.log(bitsA);
    while (b != 0 || bitsB.length == 3) {
        restB = b % 2;
        b = Math.trunc(b / 2);
        bitsB = `${restB}` + bitsB;
    }
    console.log(bitsB);
    var count = 0, min;
    if (bitsA.length < bitsB.length) {
        min = bitsA.length;
    } else {
        min = bitsB.length;
    }
    for (var i = 0; i <= min; i++) {
        if (bitsA[i] == 1 && bitsB[i] == 1) {
            count++;
        }
    }
    console.log(count);
    count > 1 ? console.log(true) : console.log(false);
}

function spinningRings(innerMax, outerMax) {
    var innerMax = Number(prompt("Enter A Number : "));
    var outerMax = Number(prompt("Enter A Number : "));
    var count = 1;
    var inner = innerMax;
    var outer = 1;
    while (inner != outer) {
        if (inner == 0) {
            inner = innerMax;
        } else {
            inner--;
        }
        if (outer == outerMax) {
            outer = 0;
        } else {
            outer++;
        }
        count++;
    }
    console.log(count);
};


// Problem 1
// Simple: find two values a and b such that a == b, !a is true, and!b is false.
// No strings allowed.


// Take input as 'n' which is always a natural number
// Space between each digit
// No space after the rows end

// Space Loop => 
function pattern(n) {
    var output = "";
    var n = Number(prompt("Enter A Number : "));
    // nbr = 1;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < i + 1; j++) {
            output += " ";
        }
        for (var k = 0; k < n - i; k++) {
            output += ` ${n % 10}`;
        }
        // if (nbr == 9) nbr = -1;
        // nbr++;
        if (i != n - 1) output += "\n";
    }
    console.log(output);
}

// a, b Is Side Of The Square 
function fit_in(side1, side2, length, width) {
    var combined_square = side1 + side2;
    var largest = Math.max(side1, side2);
    if (combined_square <= length) {
        console.log(largest <= width);
    } else if (combined_square <= width) {
        console.log(largest <= length);
    }
    else {
        console.log(false);
    }
}
// fit_in(1, 2, 2, 1);


// h => height
// w => width
// n => diplomas number
function diplomas(h, w, n) {
    if (n == 0) return 0;
    var side = 1;
    var height, width;
    while (true) {
        height = Math.trunc(side / h); // 16 // 5 = 3
        width = Math.trunc(side / w); // 16 // 8 = = 2
        if (height * width >= n) {
            return side;
        }
        side++;
    }
}
// console.log(diplomas(5, 8, 5));

function baseFinder(seq) {
    var seq = ['1', '2', '3', '4', '5', '6', '10', '11', '12', '13'];
    var n = seq.join("").split("");
    var newArr = [];
    var x = 0;
    for (var i = 0; i < n.length; i++) {
        if (newArr.indexOf(n[i]) == -1) {
            newArr[x] = n[i];
            x++;
        }
    }
    console.log(newArr.length);
}

function solution(pairs) {
    var pairs = {
        a: 1,
        b: '2',
    }
    var n = Object.keys(pairs);
    var result = "";
    for (var i = 0; i < n.length; i++) {
        result += `${n[i]} = ${pairs[n[i]]}`;
        if (i != n.length - 1) result += ",";
    }
    console.log(`${result}`); // "a = 1,b = 2"
}


function quicksum(packet) {
    var packet = "234 234 WEF ASDF AAA 554211 ???? ";
    var sum = 0;
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var check;
    for (var i = 0; i < packet.length; i++) {
        check = true
        if (packet[i] == " ") continue;
        for (var j = 0; j < letters.length; j++) {
            if (packet[i] == letters[j]) {
                sum += (i + 1) * (j + 1);
                check = true;
                break;
            } else check = false;
        }
        if (check == false) {
            sum = 0;
            break;
        }
    }
    return sum;
}


function arrayDiff(a, b) {
    var newArr = [];
    var x = 0, j = 0, check;
    for (var i = 0; i < a.length; i++) {
        check = true;
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                check = false;
                break;
            }
        }
        if (check == true) {
            newArr[x] = a[i];
            x++;
        }
    }
    return newArr;
}



function convertMyDollars(usd, currency) {
    var convert = {
        "Armenian Dram": 478,
        "Japanese Yen": 111,
        "Czech Koruna": 21,
        "Bangladeshi Taka": 82,
        "Croatian Kuna": 6,
        "Dominican Peso": 48,
        // Add more currencies as needed
    };
    var cur = Object.keys(convert);
    for (var i = 0; i < cur.length; i++) {
        if (currency == cur[i]) {
            return `You now have ${usd * convert[cur[i]]} of ${currency}.`;
        }
    }
}
// console.log(convertMyDollars(7, "Armenian Dram"));

function isValidWalk(walk) {
    var walk = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0;
    for (var i = 0; i < walk.length; i++) {
        walk[i] == "n" ? count1++ : walk[i] == "s" ? count2++ : walk[i] == "e"
            ? count3++ : walk[i] == "w" ? count4++ : "";
    }
    return count1 == count2 && count3 == count4 && walk.length == 10
        ? true
        : false;
}


function timeConvert(num) {
    var num = Number(prompt("ENter The Time : "));
    var hour = 0;
    var minutes = 0;
    if (num <= 0) {
        return "00:00";
    } else {
        minutes = Math.trunc(num % 60).toString();
        hour = Math.trunc(num / 60).toString();
        if (minutes.length == 1 && hour.length == 1) {
            return `0${hour}:0${minutes}`;
        } else if (minutes.length == 1 && hour.length >= 2) {
            return `${hour}:0${minutes}`;
        } else if (hour.length == 1 && minutes.length >= 2) {
            return `0${hour}:${minutes}`;
        } else {
            return `${hour}:${minutes}`;
        }
    }
}


function toWeirdCase(string) {
    var string = String(prompt("Enter A String : "));
    var str = string.toLowerCase().split(" ");
    console.log(str);
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split("");
        for (var j = 0; j < str[i].length; j++) {
            if (j % 2 == 0) {
                str[i][j] = str[i][j].toUpperCase();
            }
        }
        str[i] = str[i].join("");
    }
    return str.join(" ");
}
// console.log(toWeirdCase("Weird string case")); // WeIrD StRiNg CAsE


function validatePIN(pin) {
    var pin = "-1.234";
    pin = pin.split("");
    var check = true;
    for (var i = 0; i < pin.length; i++) {
        if (pin[i] * -1 != -pin) {
            check = false;
            break;
        }
    }
    if (check == true && pin.length == 4 || pin.length == 6) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function Practice_TwoCom() {
    var a = 0;
    var n = 5;
    for (var i = 0; i < n; i++) {
        for (var j = n; j > i; j--) {
            a += i + j;
            console.log("Hello");
        }
    }
    var s = 0;
    for (var i = 1; i <= n; i++) {
        s += i;
    }
    console.log(a);
    console.log(s);
}


// return the side more heavy[Right or Left] if balance return "Balance"
function balance(left, right) {
    var left = left.split("");
    var right = right.split("");
    var countR = 0, countL = 0;
    // Get The Max Length
    left.length >= right.length ? max = left.length : max = right.length;
    // Loop The Check 
    for (var i = 0; i < max; i++) {
        if (left[i] == "!") countL += 2;
        if (left[i] == "?") countL += 3;
        if (right[i] == "!") countR += 2;
        if (right[i] == "?") countR += 3;
    }
    return countL > countR ? "Left"
        : countL < countR ? "Right"
            : "Balance";
}
// console.log(balance("!!???!????", "??!!?!!!!!!!"));


function remove(s) {
    var s = "!!!!!!!?!!!!!????????!!!!!!!!???!!!?????????";
    var str = s.split("");
    var count;
    for (var i = str.length - 1; i >= 0; i--) {
        count = 0;
        for (var j = i; j >= 0; j--) {
            if (str[i] == str[j]) count++;
            else break;
        }
        if (count >= 3) {
            str.splice(i - count + 1, count);
        }
    }
    console.log(str.join(""));
}


function fn() {
    var n = 10;
    for (var x = 1; x <= n; x *= 2) {
        console.log(x); // 1 2 4
    }
}


function Missing_letter() {
    var str = "abdfi";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var start = alpha.indexOf(str[0]);
    var result = "";
    var check = true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== alpha[start]) {
            result += alpha[start];
            check = false;
            i = i - 1;
        }
        start++;
    }
    return check == true ? "No Missing Letter In Sequence" : result;
}
// console.log(Missing_letter());


function convert_Number() {
    var nbr = 129283;
    nbr = String(nbr);
    var array = [];
    for (var i = 0; i < nbr.length; i++) {
        array[i] = +nbr[nbr.length - 1 - i];
        // array.push(+nbr[nbr.length - 1 - i]);
        // array.unshift(+nbr[i]);
    }
    return array;

    // In One Line
    // return nbr.toString().split("").reverse().map(ele => +ele);
}
// console.log(convert_Number());


function Biggest_word_Method1() {
    var sentence = "I Love Programming Soooo Much Like";
    // Convert To Array
    sentence = sentence.split(" ");
    // Convert The Length for Each Element To The Array
    var index;
    var array = [];
    for (var i = 0; i < sentence.length; i++) {
        array.push(sentence[i].length);
    }
    // Find The Position Of The Element In Sentence
    var max = Math.max(...array);
    for (var i = 0; sentence.length; i++) {
        if (max == sentence[i].length) {
            index = i;
            break;
        }
    }
    // Display The Result
    console.log(`The Biggest Word In The Sentence Is : ${sentence[index]}`);
}
// Biggest_word_Method1();


function Biggest_word_Method2() {
    var sentence = "I Love Programming Soooo Much Like";
    // Convert To Array
    sentence = sentence.split(" ");
    // Found The Max Between Element
    var max = sentence[0].length;
    var index;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].length > max) {
            max = sentence[i].length;
            index = i;
        }
    }
    console.log(`The Biggest Word In The Sentence Is : ${sentence[index]}`);
    return sentence.reduce((c, v) => c.length < v.length ? v : c);
}
// console.log(Biggest_word_Method2());



function matrix() {
    var T = [[3, 0], [2, 5], [1, 4]];
    var P = [[1, 0], [5, 4]];
    var arr = [];
    var p = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            p = 0;
            for (var k = 0; k < 2; k++) { p += T[i][k] * P[k][j]; }
            arr.push(p);
        }
    }
    console.log(arr);
}


function Remove_Duplicates_Word_Method1() {
    var str = "Make Tea Not Love Love Tea Tea Make Not Hello";
    var result = [];
    var x = 0;
    str = str.split(" ");
    var check;
    for (var i = 0; i < str.length; i++) {
        check = 0;
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j]) { check += 1; }
        }
        if (check < 2) { result[x] = str[i]; x++; }
    }
    // console.log(result.join(" "));
    return result.join(" ");
}
// Quadrate Complexity
// console.log(Remove_Duplicates_Word_Method1());


function Remove_Duplicates_Word_Method2() {
    var str = "Make Hello World Function Tea Not Love Hello World Function";
    str = str.split(" ");
    var j = 0, i = 0, check = 0;
    var result = [], x = 0;
    while (i < str.length) {
        if (str[i] == str[j]) { j++; check += 1; }
        else { j += 1; }
        if (j == str.length) {
            if (check < 2) { result[x] = str[i]; x++; }
            i += 1; check = 0; j = 0;
        }
    }
    console.log(result.join(" "));
}
// Remove_Duplicates_Word_Method2();



function Duplicates_Word() {
    var str = "Make Tea Make Not Love Love";
    str = str.split(" ");
    var arr = [], x = 0;
    var check;
    for (var i = 0; i < str.length; i++) {
        // if (arr.indexOf(str[i]) === -1) { arr[x] = str[i]; x++; }
        check = false;
        for (var j = 0; j < arr.length; j++) {
            if (str[i] == arr[j]) { check = true; break; }
        }
        if (check == false) { x++; arr[x] = str[i]; }
    }

    // In One Line
    return str.filter((e) => { arr.indexOf(e) === -1 ? arr.push(e) : "" }).join(" ");;
}
// console.log(Duplicates_Word());


function remove_char() {
    var chr = "M";
    var str = "Make mTea Make Not Love Love";
    str = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] == chr) str[i] = "";
    }
    // return str.join("");
    console.log(str.filter((e) => { e == chr.toUpperCase() || e == chr.toLowerCase() ? "" : e; }).join(""));
}
// console.log(remove_char());
// Linear Complexity


function Complexity() {
    n = 16;
    for (var i = n; i > 0; i = Math.trunc(i / 2)) {
        console.log("Hello");
    }
    // Logarithmic Complexity

    function isPremier() {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
            console.log("Hi");
        }
        return true;
    }
    console.log(isPremier());
    // if n % 2 == 0 --> O(1) else n % 2 !== 0 --> O(n - 2)
    // We Take Bad Cases --> O(n) --> Linear Complexity

    function isPremier() {
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
            console.log("Hi");
        }
        return true;
    }
    console.log(isPremier());
    // square root Complexity
    // O(n* sqrt(n)) !== O(n^2) --> Be CareFull Because We Reduce When There Is Sum  f 
}
// Complexity();


function addCommasAndUnderscore(nbr) {
    // var nbr = String(prompt("Enter A String : "));
    nbr = `${nbr}`.split("");
    if (nbr.length <= 3) {
        return nbr.join("");
    } else if (nbr.length <= 6) {
        var result = "";
        for (var i = nbr.length - 1; i >= 0; i--) {
            if (nbr.length - 4 == i) result = "_" + result;
            result = nbr[i] + result;
        }
        return result;
    } else {
        var result = "", x = 0, p = 0;
        var add = ["_", ","];
        for (var i = nbr.length - 1; i >= 0; i--) {
            if (x == 3) {
                result = add[p] + result;
                p = 1;
                x = 0;
            }
            result = nbr[i] + result;
            x += 1;
        }
        return result;
    }
}

function addCommasAndUnderscore(nbr) {
    nbr = nbr.toLocaleString().split("");
    nbr[nbr.length - 4] = "_";
    return nbr.join("");
}


function TryExecpt() {
    try {
        // Code that may throw an exception
        let num1 = prompt("Enter the first number: ");
        let num2 = prompt("Enter the second number: ");
        // Convert input to numbers
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid input. Please enter valid numbers.");
        }
        let result = num1 / num2;
        if (!isFinite(result)) {
            throw new Error("Error: Division by zero or other arithmetic error.");
        }
        console.log("Result:", result);
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("This block is always executed, whether there's an exception or not.");
    }
}


function spaceComplexity() {
    var content = "// Each JavaScript number is represented as a 64 - bit\
    binary floating - point value\
    / A 64 - bit value consists of 64 binary digits(bits).\
    / In the IEEE 754 standard for double - precision floating - point numbers, \
    the breakdown is typically as follows:\
    / 1 bit for the sign(positive or negative).\
    / 11 bits for the exponent.\
    / 52 bits for the significant (also known as the mantissa or fraction).\
    / The breakdown in terms of bytes is:\
    / 64 bits / 8 bits per byte = 8 bytes."
    let str = "Hello";
    // The string "Hello" would typically take 10 bytes (2 bytes per character).
    let num = 42;
    // The number 42 would typically take 8 bytes.
    let bool = true;
    // The booleon values reserve 1 byte
}



function sternBrocot(n) {
    var arr = [1, 1];
    var result = -1, x = 0, check;
    var sup, inf, middle;
    while (true) {
        // Using Binary Search
        sup = arr.length - 1;
        inf = 0;
        while (sup >= inf) {
            middle = Math.trunc((sup + inf) / 2);
            if (arr[middle] == n) { result = middle; check = true; break; }
            else if (arr[middle] < n) { inf = middle + 1; }
            else { sup = middle - 1; }
        }

        if (check == true) break;
        arr.push(Number(arr[x] + arr[x + 1]));
        arr.push(Number(arr[x + 1]));
        x++;
    }
    return result;
}
// console.log(sternBrocot(1));


function countSheeps(sheep) {
    var count = 0;
    for (var i = 0; i < sheep.length; i++) {
        if (String(sheep[i]) == "true") count++;
    }
    return count;
}
// console.log(countSheeps([true, true, false, true, false, true, false, true, true]));



// : or ;
// - or ~
// ) or D
function countSmileys(arr) {
    const valid = [':D', ':~)', ';~D', ':)'];
    const Invalid = [";(", " :>", ":}", ":]"];
    var count = 0;
    var check;
    for (var i = 0; i < arr.length; i++) {
        // Check 1
        for (var j = 0; j < valid.length; j++) {
            if (arr[i] == valid[j]) {
                count++;
                check = j;
                console.log(`j = ${j}`);
            }
        }

        // Check 2
        // if (i == 3) {
        //     console.log(arr[i][0]);
        //     console.log(arr[i][1]);
        //     console.log(arr[i][2]);
        // }
        if (((arr[i][0] == ":" || arr[i][0] == ";") &&
            (arr[i][1] == "-" || arr[i][1] == "~") &&
            (arr[i][2] == ")" || arr[i][2] == "D")) && check !== i) {
            count++;
            console.log(check);
            console.log(i);
            console.log(arr[i]);
        }
    }
    console.log(count);
}
// countSmileys([":)", ";(", ";}", ":-D"]);


function SumRecursion(array) {
    if (array[0] == undefined) {
        return 0;
    }
    else {
        var poped = array.pop();
        return SumRecursion(array) + poped;
    }
}
// console.log(SumRecursion([1, 2, 3, 10]));



var i = 0;
function LengthRecursion(array) {
    if (array[i] == undefined) {
        return i;
    }
    else {
        i++;
        return LengthRecursion(array);
    }
}
// console.log(LengthRecursion([1, 2, 3, 10, 3, 4, 0]));








































// Implementation Build in Function + All Sort [+60 Sort]

// Repeat Function
/**
 * @param {*} str --> Not Optional
 *      String That Will Be Repeated
 * @param {*} count --> Optional Default is 1
 *      Number Of Repeating The String
 * @param {*} separator --> Optional Default is Empty String
 *      The Separator Between Each Element [str]
 * @returns --> Will Be String n Time
 */
function repeat(str, count = 1, separator = " ") {
    var result = str;
    for (var i = 1; i < count; i++) {
        result += separator + str;
    }
    return result;
}
// Complexity is O(n)
// console.log(repeat("hello", 10));


// Length Function
/**
 * @param {*} str --> Not Optional
 *      String That Will Be Count it
 * @returns --> Return Length Of String
 */
function length(str) {
    str = `${str}`;
    var count = 0;
    while (str[count] != undefined) {
        count++;
    }
    return count;
}
// Complexity Is O(n)
// console.log(length("Abdellah Karani"));
// console.log(length([1, 2, 3]));


// Reverse String
/**
 * 
 * @param {*} str --> String That You Want To Reverse It 
 * @returns --> String But It Reversed
 */
function reverse(str) {
    var result = "";
    for (var i = length(str) - 1; i >= 0; i--) { result += str[i]; }
    return result;
}
// console.log(reverse("Abdellah karani"));


// Split Function
/**
 * 
 * @param {*} str --> The String That Will Be Put It In Array
 * @returns --> Return An Array Contain The String
 */
function split(str) {
    str = `${str}`;
    var arr = [];
    for (var i = 0; i < length(str); i++) { arr[i] = str[i]; }
    return arr;
}
// console.log(split("Abdellah"));


// Fill Function
/**
 * 
 * @param {*} array --> Not Optional
 * @param {*} value --> That Will Fill BY It
 * @param {*} start --> Start Index
 * @param {*} end --> End Index
 * @returns --> Array Fill From Start To End With Value
 */
function fill(array, value, start = 0, end = length(array)) {
    if (start >= end) {
        var tmp = start;
        start = end;
        end = tmp;
    }
    if (start < 0) start = array.length + start;
    if (end < 0) end = array.length + end;
    for (var i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}
// console.log(fill([1, 2, 3], undefined, 0, 3)); // [1, 2, 3, -3: 4]


/**
 * 
 * @param {*} string --> The STring Will Trim It 
 * @param {*} value --> The Value Based TO Trim The String
 * @returns --> Return A String Without The Left value Trim
 */
// String_Left_Trim Function
function String_Left_Trim(string, value = " ") {
    var result = "";
    var check = false;
    for (var i = 0; i < length(string); i++) {
        if (string[i] != value) check = true;
        if (check == true) result += string[i];
    }
    return result;
}
// console.log(String_Left_Trim("@@@@@@@@@@@@@@@@Fun@@cti@@on", "@")); // Fun@@cti@@on


// String_Right_Trim Function
/**
 * 
 * @param {*} string --> The String Will Be TRim In Right
 * @param {*} value --> The Value Based Of The Trimming
 * @returns --> Return A Value Of String But Without The Right side
 */
function String_Right_Trim(string, value) {
    var result = "";
    var check = false;
    for (var i = length(string) - 1; i >= 0; i--) {
        if (value !== string[i]) check = true;
        if (check == true) result = string[i] + result;
    }
    return result;
}
// console.log(String_Right_Trim("Fun@@cti@@on@@@@@@@@@@@@@", "@")); // Fun@@cti@@on



// function isLower
/**
 * 
 * @param {*} string --> That Will Be Check it
 * @returns --> return True Or false
 */
function isLower(string) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var lower = true, check;
    for (var i = 0; i < length(string); i++) {
        check = false;
        for (var j = 0; j < length(letters); j++) {
            if (string[i] == letters[j]) { check = true; break; }
        }
        if (check == false) { lower = false; break; }
    }
    return lower;
}
// console.log(isLower("hello")); // true



// IsCapital Function
/**
 * 
 * @param {*} string --> The String Will Be Check it IF Capital
 * @returns --> Return True or False
 */
function isCapital(string) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var count = 0, j = 0, check, capital = true;
    while (length(string) > count) {
        check = true;
        if (letters[j] !== string[count]) { j++; }
        else { j = 0; count++; }
        if (j == 26) { j = 0; count++; check = false; }
        if (check == false) { capital = false; break; }
    }
    return capital;
}
// console.log(isCapital("HeY")); // false



// Join Function
/**
 * 
 * @param {*} array --> Will Be Join It 
 * @param {*} sep --> Separator
 * @returns --> return String That Content The Array Element
 */
function join(array, sep = ",") {
    var result = "";
    if (array[0][0] == undefined) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == undefined) array[i] = "";
            if (i !== array.length - 1) result += array[i] + sep;
            else result += array[i];
        }
        return result;
    }
    else {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                if (array[i][j] == undefined) array[i][j] = "";
                if (j !== array[i].length - 1) result += array[i][j] + ",";
                else result += array[i][j];
            }
            if (i != array.length - 1) result += sep;
        }
        return result;
    }
}
// console.log(join([[undefined, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(join([1, 2, 3,4], "#"));



// Fill Function
// 97 --> 122 --> Small Letters
// 65 --> 90 --> Capital Letters
/**
 * 
 * @param {*} string --> String Will Converted To Small Letters 
 * @returns --> Return String
 */
function toLowerCase(string) {
    var small = "abcdefghijklmnopqrstuvwxyz";
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Convert String To Array
    var CapitalLetters = split(string)
    // The Largest The Letters For The Capital String 
    for (var i = 0; i < length(CapitalLetters); i++) {
        for (var j = 0; j < length(capital); j++) {
            if (CapitalLetters[i] == capital[j]) {
                CapitalLetters[i] = small[j];
                break;
            }
        }
    }
    // join The Array That Converted
    return join(CapitalLetters, "");
}
// console.log(toLowerCase("FUNCTION DESCRIBE THE WORLD"));


/**
 * 
 * @param {*} string --> String Will Converted To Capital Letters 
 * @returns --> Return String
 */
function toUpperCase(string) {
    var small = "abcdefghijklmnopqrstuvwxyz";
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Convert String To Array
    var smallLetters = split(string);
    // The Largest The Letters For The Capital String
    for (var i = 0; i < length(smallLetters); i++) {
        for (var j = 0; j < length(small); j++) {
            if (smallLetters[i] == small[j]) {
                smallLetters[i] = capital[j];
                break;
            }
        }
    }
    // join The Array That Converted
    return join(smallLetters, "");
}
// console.log(toUpperCase("function describe the world"));


/**
 * 
 * @param {*} string --> The String Will Be Parse int 
 * @returns --> Return Number
 */
function ParseInt(string) {
    var str = split(string);
    var result = "";
    for (var i = 0; i < length(str); i++) {
        if (str[i] * 1 == +str[i] && str[i] != " ") {
            result += str[i];
        }
        if (str[i] * 1 != +str[i] || str[i] == " ") break;
    }
    return result == "" ? NaN : +result;
}
// console.log(ParseInt("1.2end")); // 1


/**
 * 
 * @param {*} string --> The String Will Parse Float
 * @returns --> return Number
 */
function ParseFloat(string) {
    var str = split(string);
    var result = "";
    for (var i = 0; i < length(string); i++) {
        if (str[i] * 1 == +str[i] || str[i] == ".") {
            result += str[i];
        }
        if ((str[i] * 1 != +str[i] || str[i] == " ") && str[i] != ".") break;
    }
    return result == "" ? NaN : +result;
}
// console.log(ParseFloat("12.3Wend")); // 12.3



/**
 * 
 * @param {*} number --> Will Be Make It Floor 
 * @returns --> Return A Number
 */
function MathFloor(number) {
    if (number == null) return 0;
    var ArrNumber = split(number);
    var result = "";
    for (var i = 0; i < length(number); i++) {
        if (ArrNumber[i] == ".") break;
        result += ArrNumber[i];
    }
    return Number(result);
}
// console.log(MathFloor(12.90));


/**
 * 
 * @param {*} number --> Will Make It Ceil 
 * @returns --> return A Number
 */
function MathCeil(number) {
    if (number == null) return 0;
    var ArrNumber = split(number);
    var result = "";
    var check = false;
    for (var i = 0; i < length(number); i++) {
        if (ArrNumber[i] == ".") {
            check = true;
            break;
        }
        result += ArrNumber[i];
    }
    return check == true ? Number(result) + 1 : Number(result);
}
// console.log(MathCeil(12.1));


/**
 * 
 * @param {*} number --> Will Remove The Fraction Parties
 * @returns --> Return A Number Without The Fraction Parties
 */
function MathTrunc(number) {
    if (number == null) return 0;
    var ArrNumber = split(number);
    var result = "";
    for (var i = 0; i < length(number); i++) {
        if (ArrNumber[i] == ".") break;
        result += ArrNumber[i];
    }
    return Number(result);
}
// console.log(MathTrunc(null));
// console.log(Math.trunc(null));

