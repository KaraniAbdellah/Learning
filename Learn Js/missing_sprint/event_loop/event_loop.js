// Intro
/*
    JavaScript runs in the browser and is a single-threaded language
        which means it has a single call stack.
    Some features like async/await are not part of the V8 engine itself.
    
    How JavaScript works in the browser:
        - Web APIs: DOM, setTimeout, fetch, etc.
        - Event Loop: Manages execution order
        - Callback Queue: Handles events like onClick, onLoad
        --> all this provided by the browser
*/


// ::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::


// The Call Stack
/*
    - One Thread == One Call Stack == One Thing at a time
    - Call Stack Follow LIFO [Last In First Out]
    - Each Function Call add to Stack
    - When Function return it will be removed from stack
    
    min(5, 2) → Added to stack, returns 3, then removed.
    multiply(2, 3) → Added, returns 6, then removed.
    sum(3, 6) → Added, returns 9, then removed.
    console.log(9) → Executes and completes the stack.
*/
function multiply(a, b) {
    return a * b;
} 
function sum(a, b) {
    return a + b;
} 
function min(a, b) {
    return a - b;
}
console.log(sum(3, multiply(2, min(5, 2))));
// Another Example
function foo() { throw new Error("Oops!"); }
function bar() { foo(); }
function baz() { bar(); }
baz();


// ::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::


// Blocking [What Happen When Thing Was Slow]
/*
    blocking happen when we have request we should be wait
        because we run code in the browser
    
    The Time that will take request --> The Browser Blocking
*/
const foo1 = $.getSync("//foo.com"); // This Synchronous
const bar1 = $.getSync("//bar.com");
const qux1 = $.getSync("//qux.com");
console.log(foo1); console.log(bar1); console.log(qux1);


// The Solution is Asynchrouns CallBacks
/*
    The Code Of Request Will Run in Background
*/
// Example
console.log("Hello");
setTimeout(() => {
    console.log("There");
}, 5000); // Will Run In The Background --> Result after 5000
console.log("Hello Again");

/* In Call Stack
    console.log("Hello");
        - Added to the call stack.
        - Execute
        - Removed from call Stack
    setTimeout(() => { console.log("There"); }, 5000);
        - setTimeout is sent to the Web API (not executed in the call stack).
        - The callback function (inside setTimeout) is registered to run after 5000ms.
        - setTimeout is removed from the call stack.

    console.log("Hello")
        - Added to the call stack.
        - Execute
        - Removed from call Stack
*/
/* Result
    Hello
    Hello Again
    (After 5 seconds)
    There
*/


// ::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::


// Concurrency & the Event Loop
/*
    "One Thing At A Time, Except Not Really"
    The Event Loop handles asynchronous code execution.
        Ensuring JavaScript remains non-blocking and concurrent.
*/
console.log("Hello");
setTimeout(() => {
    console.log("There");
}, 5000);
console.log("Hello Again");
/*
    console.log("Hello"); --> store in stack and execute
    console.log("Hello Again"); --> store in stack and execute
    setTimeout(cb) --> store in stack and moved in webApis 
        after 5 second the webAPIS push the code [cb] into event Loop [like queue]
        Event Loop Put cb function into Stack And cb will be execute
        Event Loop Wait Stack Clear and Then He Push cb.
    
    // if TimeOut = 0
        The Same Result because Event Loop Wait Stack Clear
    Even with a timeout of 0ms, the callback will wait for the call stack to be cleared.
    // The APIS [GET, POST, ...] work in same way
*/








// https://wsvincent.com/javascript-event-loop/
