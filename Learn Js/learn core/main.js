// var createObject = new Object();
var createObject = Object.create(null);
var myMap = new Map();

createObject.x = 10;


var newObject = {
    10: "Number",
    "10": "String",
};
console.log(newObject);
console.log(newObject["10"]); // string

myMap.set(10, "number").set("10", "String");

console.log(myMap.get(10)); // number
console.log(myMap.get("10")); // string




