export class Aircraft {
    protected model: string
    protected capacity: number
    constructor(model: string, capacity: number) {
        this.model = model
        this.capacity = capacity
    }
    fly() {
        console.log(this.model + " Flying In The Air!")
    }
}

class Helicopter extends Aircraft {
    constructor(model: string, capacity: number) {
        super(model, capacity)
    }
    shootGatling() {
        console.log("Shooting Gatling Now! totototottootototototoo")
    }
    toString(): string {
        return `Model: ${this.model} Capacity: ${this.capacity} คน`
    }
}

export { Helicopter }

class Airplane extends Aircraft {
    constructor(model: string, capacity: number) {
        super(model, capacity)
    }
    controlTemparature() {
        console.log("Set Temparature was Sucessful...")
    }
    toString(): string {
        return `Model: ${this.model} Capacity: ${this.capacity} คน`
    }
}

export { Airplane }