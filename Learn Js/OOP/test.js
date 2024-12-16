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


