// Constructor Function

function User(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary + 1000;
}
var user1 = new User(10, "abdellah", 2000);
var user2 = new User(100, "mohamed", 6000);
var user3 = new User(140, "omaima", 5000);


console.log(user1.salary, user3.salary, user2.salary);





