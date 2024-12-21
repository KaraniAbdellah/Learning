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





// Open-Closed
/*
    software entities (classes, modules, function, ...)
        should be open for extension, but closed for modification
*/

// Bad Example
/*
    The problem if we create another class for
        draw something I should be add new condition.
        ---> There is modification in ShapePrinter
        ---> Solution is Abstraction
*/
class Rectangle {
    _width
    _height
    constructor(width, height) {
        this._height = height;
        this._width = width;
    }
}
class Square {
    _side
    constructor(side) {
        this._side = side;
    }
}
class ShapePrinter {
    drawShape(shape) {
        if (shape instanceof Square) {
            // draw Square...
        } else if (shape instanceof Recatangle) {
            // draw Rectangle...
        }
    }
}

// Good Example
class Shape { // can be abstract class || interface 
    draw() {

    }
}
class Rectangle extends Shape { // Open For Extentions
    // Override draw
    draw() {
        // Draw Rectangle
    }
}
class Square extends Shape { // Open For Extentions
    // Override draw
    draw() {
        // Draw Square
    }
}
class ShapePrinter {
    drawShape(shape) { // can be Draw Rectangele || Square
        shape.draw();
    }
}











