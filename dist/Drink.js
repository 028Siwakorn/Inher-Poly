"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = exports.Coffee = exports.Drink = void 0;
class Drink {
    constructor(name) {
        this.name = name;
    }
    serve() {
        console.log(this.name + " is Serving. Wait a moment please...");
    }
}
exports.Drink = Drink;
class Coffee extends Drink {
    constructor(name) {
        super(name);
    }
    addMilk() {
        console.log(this.name + " Added Milk to Your Coffee Drink :D");
    }
    toString() {
        return `Drink: ${this.name}`;
    }
}
exports.Coffee = Coffee;
class Juice extends Drink {
    constructor(name) {
        super(name);
    }
    addWatermelon() {
        console.log(this.name + " Added Watermelon to Your Juice Drink!");
    }
    toString() {
        return `Drink: ${this.name}`;
    }
}
exports.Juice = Juice;
