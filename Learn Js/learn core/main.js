// Undersatnd this please

class Parent {
    #privateProperty = 'I am private';
    getPrivateProperty() {
        return this.#privateProperty;
    }
}

class Child extends Parent {
    showPrivateProperty() {
        return this.getPrivateProperty(); // Accessing via a public method
    }
}

const child = new Child();
console.log(child.showPrivateProperty()); // Output: 'I am private'
