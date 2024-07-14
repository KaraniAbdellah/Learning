// Class Inheritance
/*
    -- We Inhert Instance And Also Methods and Also Function By Using :
    -- extends PrentClassName & super(instances...);
    -- JavaScript doesn't check if you use all the parameters when calling a parent class constructor.
*/
// Parent Class
class User {
    constructor(id, username, salary, email) {
        this.u = username;
        this.id = id;
        this.s = salary;
        this.e = email;
    }
    sayHello() {
        return `Hello ${this.u}, Your Email is ${this.e}`;
    }
}
// Derived Class or Inhert Class
class Admin extends User {
    constructor(id, username, salary, permissions) {
        super(id, username, salary, null); // null --> for email
        this.s = permissions;
    }
}

var userOne = new User(10393, "Mohamed", 29023, "x.rt@gmail.com");
var adminOne = new Admin(23444, "Amine", 203803, true);
console.log(adminOne.s); // true

// Director
class Director extends Admin {
    constructor (id, username, email, happy) {
        super(id, username, email);
        this.h = happy;
    }
}
var Ms_Director = new Director(213434, "Abdellah", "Hell@gmail.com", false);
console.log(Ms_Director.h);
console.log(Ms_Director.e);
console.log(Ms_Director.sayHello()); // Hello Abdellah, Your Email is null


