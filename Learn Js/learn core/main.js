// Module Import And Export
/*
    - add type module in html
        <script src="/learn core/app.js"  type="module"></script>
*/

// in main.js --> file contain functions and variables
export let a = 10;
export let arr = [1, 2, 3, 4];
export function saySomething() {
    return `Something`;
}
// another method for exporintg
export {
    a, arr, saySomething
}
// in app.js --> file specific for project
import {a, arr, saySomething as s} from "./main.js"

console.log(a); // 10
console.log(arr); // [1, 2, 3 4]
console.log(s()); // Something





