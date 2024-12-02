import { Email } from "../../../model/Email"
import { EmailRepository } from '../../../repository/EmailRepository';

export class EmailRepositoryInMemory implements EmailRepository {

    private emailCollection!: Array<Email>;

    constructor() {
        this.emailCollection = []
    }

    async save(email: Email): Promise<void> {
        this.emailCollection.push(email)
    }

    async getAll(): Promise<Array<Email>> {
        return this.emailCollection
    }
}