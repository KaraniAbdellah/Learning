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

class CustomerDb extends Customer{
    customer = new Customer(); // composition
    storeCutomers() {
        // store customer in database
    }
}

class CustomerReport extends Customer {
    generateCustomerReport() {
        // Generate a report...
    }
}






// Open-Closed

/*
    - software(classes, modules, functions, etc).
        should be open for extention, but closed for modification

    - we need abstraction and polymorphisme
*/


class Rectangle {
    _width
    _height
    constructor(width, height) {
        this._width = width;
        this._height = height;
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
            // Draw Square ...
        } else if (shape instanceof Rectangle) {
            // Draw Rectangle ...
        }
        // the problem when i create another form (Box) --> must add new condition
    }
}

// Solution Create Abstract Class
class Shape {
    draw() {
        // Draw ...
    }
}
class Rectangle extends Shape {
    // Override 
    draw() {
        // Draw Rectangle
    }
}
class Square extends Shape {
    // Override 
    draw() {
        // Draw Square
    }
}
class SahpePrinter {
    draw(shape) { // shape if type shape
        shape.draw(); // any one can draw
    }
}










