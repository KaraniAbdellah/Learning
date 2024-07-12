// Update Properties And Built In Constructors


class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
    }
    UpdateName(new_name) {
        this.u = new_name;
    }    
}

var user1 = new User(10, "abdellah", 2000);

console.log(user1.u);
user1.UpdateName("mohamed");
console.log(user1.u);









