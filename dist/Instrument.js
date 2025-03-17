"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = exports.Guitar = exports.Instrument = void 0;
class Instrument {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(this.name + " is playing now...");
    }
}
exports.Instrument = Instrument;
class Guitar extends Instrument {
    constructor(name) {
        super(name);
    }
    strummingGuitar() {
        console.log("You already strumming the guitar.");
    }
    toString() {
        return `Name: ${this.name}`;
    }
}
exports.Guitar = Guitar;
class Piano extends Instrument {
    constructor(name) {
        super(name);
    }
    pressPiano() {
        console.log("You already press the piano.");
    }
    toString() {
        return `Name: ${this.name}`;
    }
}
exports.Piano = Piano;
