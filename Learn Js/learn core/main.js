// OOP Revision

// old method
function User(id, email, username) {
    this.i = id;
    this.e = email;
    this.u = username;
}

var user1 = new User(3003, "abdellah", 333);
console.log(user1);

// new method
class User1 {
    constructor(id, email, username) {
        this.i = id;
        this.e = email;
        this.u = username;
    }
}
var user2 = new User1(2202, "aksks", 39393);
console.log(user2);

