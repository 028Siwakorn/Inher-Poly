"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = exports.SMSNotification = exports.EmailNotification = void 0;
class EmailNotification {
    constructor(title) {
        this.title = title;
    }
    send(message) {
        console.log(`Title: ${this.title}, Message: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
class SMSNotification {
    constructor(title) {
        this.title = title;
    }
    send(message) {
        console.log(`Title: ${this.title}, Message: ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
class PushNotification {
    constructor(title) {
        this.title = title;
    }
    send(message) {
        console.log(`Title: ${this.title}, Message: ${message}`);
    }
}
exports.PushNotification = PushNotification;
