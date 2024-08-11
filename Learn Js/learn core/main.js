/**
 * Import All
 * Export Named
 * Export Default
 */


// export let a = 10;
// export let T = [1, 2, 3, 4];

// export default function sayHello() {
//     return `Hello`;
// }

let a = 10;
let T = [1, 2, 3, 4];
function sayHello() {
    return `Hello`;
}

export {a as number, T, sayHello}







