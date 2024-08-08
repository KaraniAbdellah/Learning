// Generator

function *generateNumber() {
    yield 1;
    console.log("Hello Yield 1");
    yield 2;
    console.log("Hello Yield 2");
    yield 3;
    console.log("Hello Yield 3");
    yield 4;
    console.log("Hello Yield 4");
}

let generator = generateNumber();
console.log(generator);
console.log(typeof generator); // Object

let first_value = generator.next();
console.log(first_value); // {value: 1, done: false}
console.log(first_value.value); // 1
console.log(first_value.done); // false

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // {value: undefined, done: true}

// generator using loop
for (value of generateNumber()) {
    console.log(value);
}
console.log("-".repeat(10));
for (value of generator) {
    console.log(value);
}






