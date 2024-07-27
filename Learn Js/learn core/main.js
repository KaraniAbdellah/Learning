// revise the private method
class User {
    count = 0;
    static nbr = 0;
    // private proprety
    #talk
    #thing
    constructor(email, id, name) {
        this.e = email;
        this.i = id;
        this.n = name;
        this.count += 1;
        User.nbr += 1;
        this.#talk = "Hello World"; // private
        this.#thing = this.#saySomeThing();
    }
    message () {
        return this.#talk;
    }
    #saySomeThing() {
        return this.message();
    }
    messageOfThings() {
        return this.#saySomeThing();
    }
}

var userOne = new User("a@gmail.com", 1000, "abdellah");
console.log(userOne.count); // 0
console.log(User.count); // unidefined
console.log(User.nbr); // 1
console.log(userOne.nbr); // undifined
console.log("-".repeat(30));

console.log(User.talk); // undifined
console.log(userOne.talk); // undifined
console.log("-".repeat(30));

console.log(userOne.message());
console.log(userOne.messageOfThings());












