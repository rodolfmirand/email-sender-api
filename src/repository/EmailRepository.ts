import { Email } from "../model/Email"

export interface EmailRepository {
    save(email: Email): Promise<void>
    getAll(): Promise<Array<Email>>
}