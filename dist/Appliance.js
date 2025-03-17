"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = exports.WashingMachine = exports.Refrigerator = void 0;
class Refrigerator {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `BrandName: ${this.name}`;
    }
    turnOn() {
        console.log(`${this.name} Turn On!`);
    }
    turnOff() {
        console.log(`${this.name} Turn Off!`);
    }
}
exports.Refrigerator = Refrigerator;
class WashingMachine {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `BrandName: ${this.name}`;
    }
    turnOn() {
        console.log(`${this.name} Turn On!`);
    }
    turnOff() {
        console.log(`${this.name} Turn Off!`);
    }
}
exports.WashingMachine = WashingMachine;
class Microwave {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `BrandName: ${this.name}`;
    }
    turnOff() {
        console.log(`${this.name} Turn On!`);
    }
    turnOn() {
        console.log(`${this.name} Turn Off!`);
    }
}
exports.Microwave = Microwave;
