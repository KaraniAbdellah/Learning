// Polymorphism
/*
    We realize polymorphism with
        Overriding --> paractice this in inhertiance
        Overloading --> you can use default paramerters

    JavaScript does not natively support method overloading
*/

// Overinding
class Animal {
    speak() {
        console.log("This animal makes a sound.");
    }
}
class Dog extends Animal {
    // @Override
    speak() {
        console.log("The dog barks.");
    }
}
const animal = new Animal();
animal.speak(); // This animal makes a sound.
 
// Overloading [use default parameters]
class Calculator {
    add(a, b, c = 0) {
      return a + b + c;
    }
}
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));



