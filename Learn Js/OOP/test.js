// Encapsulation
/*
    make the attribute private & methods public
    use setters & getters

    ES6+ Private Fields:
        use #
    Getters and Setters
        use _
*/


class Rectangle {
    #width
    #height
    _value
    
    constructor(width, height, value) {
        this.#width = width;
        this.#height = height;
        this._value = value;
    }
    // Method 1: setters & getters
    setWidth(width) {
        this.#width = width;
    }
    getWidth() {
        return this.#width;
    }
    setHeight(height) {
        this.#height = height;
    }
    getHeight() {
        return this.#height; 
    }
    setValue(height) {
        this._height = height;
    }
    getValue() {
        return this._value; 
    }
    // Declare Private Method
    #DisplayRectangle() {
        console.log();
    } 
}
const rect = new Rectangle(1222, 1929, 100);
console.log(rect.getHeight()); // 1929
console.log(rect.getValue()); // 100

