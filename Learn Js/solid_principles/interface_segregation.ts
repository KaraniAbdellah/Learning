// Interface segregation

/*
    Split Interfaces that are very large into smaller interfaces
*/

// Bad Example
interface Animal {
    eat(): void;
    drink(): void;
    walk(): void;
    fly(): void;
}

class Dog implements Animal {
    // Overrding
    eat(): void { }
    walk(): void { }
    drink(): void { }
    // I do not need this method
    fly(): void { }
}


// Solution
interface Animal1 {
    eat(): void;
    drink(): void;
    walk(): void;
}

interface Flyable extends Animal1 {
    fly(): void;
}


class Dog1 implements Animal1 {
    eat(): void { }
    drink(): void { }
    walk(): void { }
}

class Brid implements Flyable {
    eat(): void { }
    drink(): void { }
    fly(): void { }
    walk(): void { }
}

