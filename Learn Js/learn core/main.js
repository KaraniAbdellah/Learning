// Map Vs WeakMap

/*
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
    Map     ==> Key Can Be Anything
    WeakMap ==> Key Can Be Object Only 
*/

var muser = { theName: "Abdellah" };
var myMap = new Map();
myMap.set(muser, "Object Value");
console.log(myMap);
muser = null; // Overwrite The Refrence
console.log(myMap);

var wuser = { theName: "Abdellah" };
var myWeakMap = new WeakMap();
myWeakMap.set(wuser, "Object Value");
console.log(myWeakMap);
wuser = null; // Overwrite The Refrence
console.log(myWeakMap); // null












