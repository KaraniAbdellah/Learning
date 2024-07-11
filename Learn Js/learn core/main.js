class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function() {
            return ("Hello ", this.u);
        }
    }
    // Methods
    writeMessage() {
        return ("Hello ", this.u);
    }
}

var user1 = new User(10, "", 2000);
var user2 = new User(100, "mohamed", 7000);

console.log(user1.i, user1.u, user1.s);
console.log(user2.i, user2.u, user2.s);
console.log(user2.msg()); // Hello Mahamed
console.log(user2.msg); // native code
console.log(user2.writeMessage());
console.log(user2.writeMessage); // native code






