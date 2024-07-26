// revise the static propreties



class User {
    count = 0; // for Object
    static nbr = 0;
    constructor(id, name, email) {
        this.e = email;
        this.n = name;
        this.i = id;
        User.nbr += 1;
        this.msg  = function() {
            return `No Message ${this.e}`; 
        }
    }
    static state() {
        return `The Number Of is :  ${this.nbr}`;
    }
}

var userOne = new User(1000, "john", "john@gmain.com");

console.log(userOne.msg(), userOne.e); 
console.log(userOne.count); // 0
console.log(User.count); // undefined
console.log(User.nbr); // 1
console.log(userOne.nbr); // undefined
console.log(User.state());


// Inhertence

/**
 * the admin inhert the property with there value
 * we can inhert a static property or method
 */

class Admin extends User {
    constructor (email, id, name, salary) {
        super(id, name, email);
        this.s = salary;
    }
}

var adminOne = new Admin("admin@gmail.com", 10203, "deo", 2000);

console.log(adminOne.count); // 0
console.log(Admin.state()); // The Number Is 2 [ user and admin ]












