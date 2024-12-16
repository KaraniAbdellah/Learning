// Abstraction || Interface
/*
    Js does not support interfaces
    The two concept support in Typescript
    
    We can achieve interfaces:
        create a function that check if object implement method
*/

// this function check if object implements a specific methods
function isImplementMethod(obj) {
    if(obj.display == undefined) {
        throw new Error("Class must implement 'display' method");
    }
}
// Implement the interface in a class
class Product {
    constructor() {
        // isImplementMethod.call(this); // pass object without parameter
        isImplementMethod(this); 
    }
    display() {
        console.log("display the details here");
    }
}

const product = new Product();
product.display(); // display the details here



