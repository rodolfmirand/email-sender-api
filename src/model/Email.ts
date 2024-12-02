import { EmailStatus } from "./enum/EmailStatus"
import { Uuid } from "./Uuid"

export class Email {
    private id!: Uuid
    private name!: string
    private phoneNumber!: string
    private email!: string
    private message!: string
    private status!: EmailStatus

    constructor(id: Uuid, name: string, phoneNumber: string, email: string, message: string, status: EmailStatus) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.message = message;
        this.status = status
    }

    static create(name: string, phoneNumber: string, email: string, message: string): Email {
        const id = Uuid.randomGenerator()
        const status = EmailStatus.unread
        return new Email(id, name, phoneNumber, email, message, status)
    }

    getId(): Uuid {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getEmail(): string {
        return this.email;
    }

    getMessage(): string {
        return this.message;
    }

    getStatus(): EmailStatus {
        return this.status;
    }
}