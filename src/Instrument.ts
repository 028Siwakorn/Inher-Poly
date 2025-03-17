export class Instrument {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
    play() {
        console.log(this.name + " is playing now...")
    }
}


class Guitar extends Instrument {
    constructor(name: string) {
        super(name)
    }
    strummingGuitar() {
        console.log("You already strumming the guitar.")
    }
    toString() {
        return `Name: ${this.name}`
    }
}

export { Guitar }


class Piano extends Instrument {
    constructor(name: string) {
        super(name)
    }
    pressPiano() {
        console.log("You already press the piano.")
    }
    toString() {
        return `Name: ${this.name}`
    }
}
export { Piano }