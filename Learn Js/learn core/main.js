// Delegate Generator And Infintif Numbers


function *genarateNumbers() {
    yield 1;
    yield 2;
}

function *generateLetters() {
    yield "A";
    yield "B";
}


function *generateAll() {
    yield *generateLetters();
    yield *genarateNumbers();
    yield *["L", "L", "C"];
    
    let index = 0;
    while (1) {
        yield index++;
        if (index > 3) break;
    }
}

let generator = generateAll();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // {value: undefined, done: true}










