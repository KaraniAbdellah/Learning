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





//////////////////////////////////////
//////////////////////////////////////
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







//////////////////////////////////////
//////////////////////////////////////
// Liskov substitution
/*
    if Class S subtype of T(parent). then objects of type T
    in a program my be replaced with Objects S.
*/

class Rectangle {
    _width
    _height
    getArea() {
        return this._height * this._width;
    }
    setWidth(newWidth) {
        this._width = newWidth;
    }
    setHeight(newHeight) {
        this._height = newHeight;
    }
}
class Square extends Rectangle {
    // @Override
    setWidth(newWidth) {
        super.setWidth(newWidth);
        super.setHeight(newWidth);
    }
    // @Override
    setHeight(newHeight) {
        super.setHeight(newHeight);
        super.setWidth(newHeight);
    }
}
let rectangle = new Rectangle();
rectangle.setHeight(2);
rectangle.setWidth(5);
if (rectangle.getArea() == 10) console.log("is 10");

// the problem here ---> square must have also 10
let square = new Square();
square.setHeight(2);
square.setWidth(5);
if (square.getArea() == 10) console.log("is 10");
else console.log("is not 10");



// Solution -->> Shape is interface
class Shape {
    area() {}
}
// Rectangle impelment Shape
class Rectangle1 extends Shape {
    _width
    _height
    // @Override
    area() {
        return this._width * this._height;
    }
    setWidth(newWidth) {this._width = newWidth}
    setHeight(newHeight) {this._height = newHeight}
}
// Square impelment Shape
class Square1 extends Shape {
    _size
    // @Override
    area() {
        return this._size * this._size;
    }
    setSize(newSize) { this._size = newSize; }
}
let rectangle1 = new Rectangle1();
rectangle1.setHeight(2); rectangle1.setWidth(5);
let square1 = new Square1();
square1.setSize(2);

if (rectangle1.area() == 10) console.log("is 10");
if (square1.area() == 4) console.log("is 4");



// Another Solution
/* Rectangle extend from Saqure but in Squqre --> create constructor */
class Rectangle2 {
    _width
    _height
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    getArea() {
        return this._width * this._height;
    }
}
class Square2 extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}
let rectangle2 = new Rectangle2(2, 5); 
let square2 = new Square2(2);



//////////////////////////////////////
//////////////////////////////////////


// See the Other typescript files 

