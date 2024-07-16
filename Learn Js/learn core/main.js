class User {
    // private property
    #e
    #msg
    constructor(name, id, email) {
        this.n = name;
        this.i = id;
        this.#e = email;
        this.#msg = this.#showEmail(); 
    }
    #showEmail() {
        return `Your Email Is ${this.#e}`;
    }
    message() {
        // return `message : ${this.#showEmail()}`;
        return `message : ${this.#msg}`;
    }
}

var userOne = new User("abdellah", 29394, "abdellah@gmail.com");
console.log(userOne.message());

class Admin extends User {
    constructor(name, id, email, salary) {
        super(name, id, email);
        this.s = salary;
    }
}

var adminOne = new Admin("Mohamed", 19293, "x.admin@gmail.com");
console.log(adminOne.i); // 19293
console.log(adminOne.n); // Mohamed
console.log(adminOne.email); // undefined --> this private proprety
console.log(adminOne.message()); // message : Your Email Is x.admin@gmail.com





