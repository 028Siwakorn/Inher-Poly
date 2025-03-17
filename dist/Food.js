"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sushi = exports.Pizza = exports.Food = void 0;
class Food {
    constructor(name) {
        this.name = name;
    }
    serve() {
        console.log(this.name + " is served already!. Thank you <3");
    }
}
exports.Food = Food;
class Pizza extends Food {
    constructor(name) {
        super(name);
    }
    addCheese() {
        console.log(this.name + " added cheese in your pizza!");
    }
}
exports.Pizza = Pizza;
class Sushi extends Food {
    constructor(name) {
        super(name);
    }
    addWasabi() {
        console.log(this.name + " added wasabi in your sushi!");
    }
}
exports.Sushi = Sushi;
