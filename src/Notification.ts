export interface Notification {
    send(message: string): void
}



class EmailNotification implements Notification {
    private title: string
    constructor(title: string) {
        this.title = title
    }
    send(message: string): void {
        console.log(`Title: ${this.title}
Message: ${message}`)
    }
}

export { EmailNotification }

class SMSNotification implements Notification {
    private title: string
    constructor(title: string) {
        this.title = title
    }
    send(message: string): void {
        console.log(`Title: ${this.title}
Message: ${message}`)
    }
}

export { SMSNotification }

class PushNotification implements Notification {
    private title: string
    constructor(title: string) {
        this.title = title
    }
    send(message: string): void {
        console.log(`Title: ${this.title}
Message: ${message}`)
    }
}

export { PushNotification }