
// Add To Prototype Chain And Extend Constructors Features

class User {
    constructor(name, email, id) {
        this.n = name;
        this.e = email;
        this.i = id;
        this.msg = function() {
            return 'THis.Email Value Is ', this.e;
        }
    }
}

var userOne = new User("Abdellah", "Karani", 34949);
console.log(userOne.msg()); // Karani

User.prototype.sayWelcom = function() { // to the prototype
    return `Welcome ${this.n}`;
}

console.log(User.prototype);





