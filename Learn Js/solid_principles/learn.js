// Solid Principles
/*
    1. Single Responsibility Principle
    2. Open/Closed Principle
    3. Liskov Substitution Principle
    4. Interface Segregation Principle
    5. Dependency Inversion Principle

*/


// Single Responsibility Principle
/*
    - A class should have one job --> one reasons to change.
    - Benifit:
        easy to understand
        organized
        reduces dependencies by ensuring each class has one purpose
        if you create new class --> link the classes by composition
*/

class Customer {
    _name
    constructor (name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    // This is not good --> create new class
    storeCutomers() {
        // store customer in database
    }
    // This is not good --> create new class
    generateCustomerReport() {
        // Generate a report...
    }
}

class CustomerDb {
    customer = new Customer(); // composition
    storeCutomers() {
        // store customer in database
    }
}

class CustomerReport {
    generateCustomerReport() {
        // Generate a report...
    }
}









