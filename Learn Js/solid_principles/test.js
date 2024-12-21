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
class Shape { // this is a abtstract class 
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







