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





