export class Food {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
    serve() {
        console.log(this.name + " is served already!. Thank you <3")
    }
}

class Pizza extends Food {
    constructor(name: string) {
        super(name)
    }
    addCheese() {
        console.log(this.name + " added cheese in your pizza!")
    }
}

export { Pizza }

class Sushi extends Food {
    constructor(name: string) {
        super(name)
    }
    addWasabi() {
        console.log(this.name + " added wasabi in your sushi!")
    }
}

export { Sushi }