var simpleObject = {};
var simpleMap = new Map;
var simpleAn = Object.create(null);


console.log(simpleAn);
console.log(simpleMap);
console.log(simpleObject);




var new_object = {
    10: "Number",
    "10": "String",
};

var newMap = new Map();
newMap.set("10", "String");
newMap.set(10, "Number");

console.log(new_object[10]);
console.log(newMap.get(10));






