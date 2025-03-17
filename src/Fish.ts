export class Fish {
    protected name: string
    protected species: string
    protected ability: string
    constructor(name: string, species: string, ability: string) {
        this.name = name
        this.species = species
        this.ability = ability
    }
    public swim(): void {
        console.log(this.name + " " + "Swiming Near You!")
    }
}

class Shark extends Fish {
    constructor(name: string, species: string, ability: string) {
        super(name, species, ability)
    }
    bloodSeeker() {
        console.log(this.name + " is Hunting The Blood!")
    }
    public toString(): string {
        return `Shark: ${this.name}, Species: ${this.species} Ability: ${this.ability}`
    }
}



export { Shark }

class Dolphin extends Fish {
    constructor(name: string, species: string, ability: string) {
        super(name, species, ability)
    }
    splitWater() {
        console.log(this.name + " is Spliting Water To You!")
    }
    public toString(): string {
        return `Dolphin : ${this.name}, Species: ${this.species} Ability: ${this.ability}`
    }
}


export { Dolphin }