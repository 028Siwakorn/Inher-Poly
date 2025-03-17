"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dolphin = exports.Shark = exports.Fish = void 0;
class Fish {
    constructor(name, species, ability) {
        this.name = name;
        this.species = species;
        this.ability = ability;
    }
    swim() {
        console.log(this.name + " " + "Swiming Near You!");
    }
}
exports.Fish = Fish;
class Shark extends Fish {
    constructor(name, species, ability) {
        super(name, species, ability);
    }
    bloodSeeker() {
        console.log(this.name + " is Hunting The Blood!");
    }
    toString() {
        return `Shark: ${this.name}, Species: ${this.species} Ability: ${this.ability}`;
    }
}
exports.Shark = Shark;
class Dolphin extends Fish {
    constructor(name, species, ability) {
        super(name, species, ability);
    }
    splitWater() {
        console.log(this.name + " is Spliting Water To You!");
    }
    toString() {
        return `Dolphin : ${this.name}, Species: ${this.species} Ability: ${this.ability}`;
    }
}
exports.Dolphin = Dolphin;
