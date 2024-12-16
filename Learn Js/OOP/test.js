// Abstraction || Abstract Class
/*
    We can Relize the abstraction by:
        Abstract class
        Interface

    there are no abstract classes or interface, But we can achieve
    Abstract classes are used to define a blueprint for other classes to follow.

    Can not be create a object from Abstract CLass 
*/

class Employee {
    constructor() {
        if (new.target === Employee) {
            throw new Error("Can not be create Object from Abstract Class");
        }
    }
    // Concrete Method
    display() {
        throw new Error("Abstract Method has no implementation");
    }
}

class Manager extends Employee {
    display() {
        console.log("I am A Manager");
    }
}

// const emp = new Employee(); //  Can not be create Object from Abstract Class
const manager = new Manager();
manager.display(); // I am A Manager




