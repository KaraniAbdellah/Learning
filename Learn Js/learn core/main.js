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















