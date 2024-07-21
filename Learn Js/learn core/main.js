class User {
    constructor(username, email, id) {
        this.e = email;
        this.i = id;
        this.u = username;
        this.msg = function() {
            return `Hello ${this.u}`;
        }
    }
}

var userOne = new User("abdellah", "abdellahkarani@gmail.com", 1093);
console.log(userOne.e);

console.log(User.prototype);
User.prototype.sayHello = function() {
    return `Hello ${this.u} Again From Admin`;
}
console.log(userOne.sayHello());

Object.prototype.size = 100;
console.log(User.size);
console.log(userOne.size);













