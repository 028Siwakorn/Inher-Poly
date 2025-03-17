"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shark = void 0;
const Fish_1 = require("./Fish");
class Shark extends Fish_1.Fish {
    constructor(name, species, ability) {
        super(name, species, ability);
    }
    toString() {
        return `Shark: ${this.name}, Species: ${this.species} Ability: ${this.ability}`;
    }
}
exports.Shark = Shark;
