export class Drink {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
    public serve(): void {
        console.log(this.name + " is Serving. Wait a moment please...")
    }
}

class Coffee extends Drink {
    constructor(name: string) {
        super(name)
    }
    addMilk() {
        console.log(this.name + " Added Milk to Your Coffee Drink :D")
    }
    public toString(): string {
        return `Drink: ${this.name}`
    }
}

export { Coffee }

class Juice extends Drink {
    constructor(name: string) {
        super(name)
    }
    addWatermelon() {
        console.log(this.name + " Added Watermelon to Your Juice Drink!")
    }
    public toString(): string {
        return `Drink: ${this.name}`
    }
}

export { Juice }