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
interface ParkingLot1 {
    parkCar(): void;
    getCapacity(): Number;
}

interface ParkingLotFree1 extends ParkingLot1 {
    doPayment(): void;
    CalculateFree(): Number;
}

class Car implements ParkingLot1 {
    parkCar(): void { }
    getCapacity(): Number { return 0; }
}
