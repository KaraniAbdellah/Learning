// Prototype Introduction
/*
    is object that contain a lot of features like methods ...
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
}
var userOne = new User(100, "Elzero");
console.log(User.prototype);

var str = "Abdellah";
console.log(String.prototype);






