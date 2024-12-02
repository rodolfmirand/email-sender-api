import { Request, Response } from "express"
import { EmailRepository } from "../repository/EmailRepository"
import { Email } from "../model/Email"

export class EmailCreate {

    constructor(readonly repository: EmailRepository){}

    async execute(request: Request, response: Response) {
        const {name, phoneNumber, email, message} = request.body
        const newEmail = Email.create(name, phoneNumber, email, message)
        await this.repository.save(newEmail)
        response.status(200).json({newEmail})
    }
}