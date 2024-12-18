// - Principes SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)



// Class & Method Generic
/*
    Does not Support in Javascript --> use TypeScript
*/







// Garbage Collection in Javascript
/*
    - A mechanism in JavaScript that automatically manages
        memory allocation and deallocation for objects
    
    - Garabage Collector Used some algorithm like:
        Mark-and-Sweep Algorithm (used in V8 with node js)
    
    - GC do:
        primary goal in to free memory (unsed varaible)
*/








// Classes in JavaScript Relationship
/*
    Association
    Composition --> Between Student & User 
    Aggregation --> Between Emloyee & User

    "You the realtions we do not need to fo the inheritince"
*/

class User {
    _FirstName
    _LastName
    constructor(FirstName, LastName) {
        this._FirstName = FirstName;
        this._LastName = LastName;
    }
    DisplayInfo() {
        console.log(`My full name is ${this._FirstName} ${this._LastName}`);
    }
}

class Employee extends User {
    _user
    constructor(FirstName, LastName, user) {
        super(FirstName, LastName);
        this._user = user;
    }
    DisplayInfoEmp() {
        this._user.DisplayInfo();
    }
}

class Student extends User {
    _user
    constructor(FirstName, LastName) {
        super(FirstName, LastName);
        this._user = new User(FirstName, LastName);
    }
    
}

// Agregation (User & Employee) --> Association With Orientation (Employee -> User)
const userOne = new User("Ahmed", "Ali");
const emp1 = new Employee("Ahmed", "Ali", userOne);
emp1.DisplayInfoEmp();

// Composition (User & Students)
const student1 = new Student("Mohamed", "Amine");
student1.DisplayInfo();









