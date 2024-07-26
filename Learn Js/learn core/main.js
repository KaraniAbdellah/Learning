// define user

// old method
function User(id, name, email) {
    this.i = id;
    this.n = name;
    this.e = email;
}

var userOne = new User(10029, "abdellah", "a@gmail.com");

class Admin {
    constructor(id, name, email) {
        this.i = id;
        this.n = name;
        this.e = email;
    }
}

var userTwo = new Admin(10030, "hamza", "h@gmail.com");

console.log(userOne);
console.log(userTwo);

console.log(typeof userOne); // object
console.log(typeof User); // function



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// make by constrastor string
var message = new String("HI MOM!");
var call = "CALL ME!";
console.log(typeof message); // object
console.log(typeof call); // string

// same constractor
console.log(message.constructor); // native code of constractor --> String
console.log(call.constructor); // native code of constractor ---> String

// instanceof
console.log(message instanceof String); // true
console.log(call instanceof String); // false




















