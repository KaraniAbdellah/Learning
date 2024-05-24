console.log("Start Set WeakSet and Map And WeakMap");

var mySet = new Set([1, 2, 1, "A", true, {theName: "Abdellah"}]).add("Hello");
var myWeakSet = new WeakSet([{a: "a", b: "b"}]);
var myMap = new Map();
var myWeakMap = new WeakMap();

// Set
var iterator = mySet.values(); // Accessing To Elements
console.log(iterator.next()); console.log(iterator.next());
console.log(iterator.next()); console.log(iterator.next());
console.log(iterator.next()); console.log(iterator.next());
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





