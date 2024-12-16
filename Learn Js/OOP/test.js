// Encapsulation
/*
    make the attribute private & methods public
    use setters & getters functions
    you can use set & get keyword

    +: public 
    #: protected --> use in inheritance
    _: private
*/


class Rectangle {
    #width // protected
    _height // private
    _value
    
    constructor(width, height, value, count) {
        this.#width = width;
        this._height = height;
        this._value = value;
        this.count = count; // public
    }
    // Method 1: setters & getters
    setWidth(width) {
        this.#width = width;
    }
    getWidth() {
        return this.#width;
    }
    setHeight(height) {
        this._height = height;
    }
    getHeight() {
        return this._height; 
    }
    setValue(height) {
        this._height = height;
    }
    getValue() {
        return this._value; 
    }
    setValue(value) {
        this._value = value; 
    }
    // Declare Private Method
    _DisplayRectangle() {
        return "display";
    } 
    // Use Private Method
    display() {
        return this._DisplayRectangle();
    }
    // Method 2
    set height(newWidth) {
        this._height = newWidth;
    }
    get height() {
        return this._height;
    }
}

const rect = new Rectangle(1222, 1929, 100, 1010);

// Method 1
console.log("count = " + rect.count); // count is public attribute
// console.log(rect.DisplayRectangle()); private method
console.log(rect.display()); // "display"
console.log(rect.getHeight()); // 1929
console.log(rect.getValue()); // 100$

// Method 2
rect.height = 1001;
console.log("newHeight = " + rect.getHeight());
console.log("newHeight = " + rect.height);

