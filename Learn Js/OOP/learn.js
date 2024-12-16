// Start Learn OOP
/*
    - Classes and objets
    - Encapsulation
    - Inheritance
    - Abstraction (abstract class, interface)
    - Garbage Collocter
*/


/////////////////// Classes and objets
/*
    - Classes are a template for creating objects
    - Classes is ES6 features
    - JavaScript does not support multiple constructors for a class
    - A default constructor is not explicitlydefined like
         in some other programming languages (e.g., Java or C++)
*/

// Old Version
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.displayProduct = function() {
        console.log(`name = ${this.name}`);
        console.log(`price = ${this.price}`);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 100.23);
product1.displayProduct();

// ES6 Version
class Employee {
    constructor(name, salary, bonus) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
    }
    DisplayEmployee() {
        console.log(`name = ${this.name}`);
        console.log(`salary = ${this.salary}`);
    }
    static Bonus() {
        return this.salary + this.bonus; 
    } 
}

const employee = new Employee("ahmed", 20202);
employee.DisplayEmployee();
Employee.Bonus();
// employee.Bonus(); employee.Bonus is not a function





///////////////// Encapsulation
/*
    make the attribute private & methods public
    use setters & getters functions
    you can use set & get keyword

    +: public 
    #: protected --> use in inheritance
    _: private

    static method or attribute can be acces from ClassName directly
*/

class Rectangle {
    #width // protected
    _height // private
    _value
    static dem = 10;
    
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

    // Static Method
    static func() {
        console.log("I am Static Method");
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

// Static KeyWord
console.log("dem = " + Rectangle.dem);
Rectangle.func();






///////////////// Inheritance
// Inheritance & super keyword 
/*
    - Introduction
        allows a new class to use the attributes
        and methods of another class
    
    Use protected signe (#) in classes when there is inheritance
    Classes can only extend a single class.
    Static methods are not inherited from a parent class to a child class.
*/

class Animal {
    #name
    #age
    static alive = true; // shared between all objets

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    eat() {
        console.log("Eat " + this.#name);
    }
    sleep() {
        console.log("Sleep " + this.#name);
    }
    getName() {
        return this.#name;
    }
}
class Fich extends Animal {
    #isSwim
    constructor(name, age, isSwim) {
        super(name, age);
        this.#isSwim = isSwim;
    }
    swim() {
        if (this.#isSwim) console.log(this.getName() + " is Swim");
        else console.log(this.getName() + " is not Swim");
    }
}
class Dog extends Fich {
    #is_nice
    constructor(name, age, isSwim, is_nice) {
        super(name, age, isSwim);
        this.#is_nice = is_nice;
    }
    isNice() {
        if(this.#is_nice) console.log(this.getName() + " is nice dog");
        else console.log(this.getName() + " is not nice dog");
    }
}

const animal1 =  new Animal("Animal", 20);
console.log(Animal.alive); // true
animal1.eat(); // Eat Animal

const fich = new Fich("Sheren", 2, true);
fich.eat(); // Eat Sehren
fich.swim(); // Shreni Swim

const dog = new Dog("putbool", 12, false);
dog.eat(); // Eat putbool
dog.swim(); // putbool is not Swim
dog.isNice(); // putbool is not nice dog

console.log(dog.alive); // undefined












