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






