// Encapsulation
/*
    - Class fields are open to everyone unless specified otherwise.
    - Ensures data is accessed properly.
    - Allows you to use the app without needing to understand the complex parts.
    - Helps avoid human errors.
    - Makes the app more adaptable and easier to manage.
    - Simplifies the overall app.
*/
class User {
    // Private Proprety
    #is
    #sayHello
    constructor(name, id, isManager) {
        this.i = id;
        this.n = name;
        this.#is = isManager; // private proprety
        this.#sayHello = this.#createHelloMessage();
    }
    // Private Method
    #createHelloMessage() {
        return `Hello, ${this.n}! Manager status: ${this.#is}`;
    }
    // Public Method
    greet() {
        return this.#sayHello;
    }
}
var userOne = new User("Abdellah", 2321, true);
console.log(typeof User); // function
// consolee.log(userOne.#is); // is not accessible outside class 'User'
console.log(userOne.greet());


