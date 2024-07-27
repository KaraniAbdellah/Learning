// revise Prototype



class Danone {
    constructor(name, id, color) {
        this.n = name;
        this.i = id;
        this.c = color;
    }
}

var danone_jamila = new Danone("jamila", 100, "red");

Danone.prototype.sayWelcome = function() {
    return "in the next product you will have a promision of 86%";
}

console.log(Danone.prototype);

console.log(danone_jamila.sayWelcome());





