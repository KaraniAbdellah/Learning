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






