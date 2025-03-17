"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = exports.Helicopter = exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
    }
    fly() {
        console.log(this.model + " Flying In The Air!");
    }
}
exports.Aircraft = Aircraft;
class Helicopter extends Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    shootGatling() {
        console.log("Shooting Gatling Now! totototottootototototoo");
    }
    toString() {
        return `Model: ${this.model} Capacity: ${this.capacity} คน`;
    }
}
exports.Helicopter = Helicopter;
class Airplane extends Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    controlTemparature() {
        console.log("Set Temparature was Sucessful...");
    }
    toString() {
        return `Model: ${this.model} Capacity: ${this.capacity} คน`;
    }
}
exports.Airplane = Airplane;
