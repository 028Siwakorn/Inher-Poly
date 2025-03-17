export interface Appliance {
    turnOn(): void
    turnOff(): void
}

class Refrigerator implements Appliance {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    toString(): string {
        return `BrandName: ${this.name}`
    }
    turnOn(): void {
        console.log(`${this.name} Turn On!`)
    }
    turnOff(): void {
        console.log(`${this.name} Turn Off!`)
    }
}

export { Refrigerator }

class WashingMachine implements Appliance {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    toString(): string {
        return `BrandName: ${this.name}`
    }
    turnOn(): void {
        console.log(`${this.name} Turn On!`)
    }
    turnOff(): void {
        console.log(`${this.name} Turn Off!`)
    }
}

export { WashingMachine }


class Microwave implements Appliance {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    toString(): string {
        return `BrandName: ${this.name}`
    }
    turnOff(): void {
        console.log(`${this.name} Turn On!`)
    }
    turnOn(): void {
        console.log(`${this.name} Turn Off!`)
    }
}

export { Microwave }