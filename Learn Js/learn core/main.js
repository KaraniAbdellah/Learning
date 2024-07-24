const myObject = {
    a: 23,
    b: 34,
};

// old method
myObject.c = 10;

// new method
Object.defineProperty(myObject, "c", {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3,
});
// Testing The Enumerable
for (var prop in myObject) {
    console.log(prop, myObject[prop]);
    // with false in enumerable we can not accesses to the "c" proprety
}
// Testing The Writable
myObject.c = 20723; // with false in writable we can not change the value of the "c" proprety
// Testing The Configurable
Object.defineProperty(myObject, "c", {
    // default is false
    configurable: true,
    writable: true,
    enumerable: true,
    value: 3,
    // with false in configurable --> Object.defineProprety is not a function
})


console.log(myObject);






