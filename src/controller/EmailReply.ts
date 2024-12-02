import { Request, Response } from "express"
import { EmailRepository } from "../repository/EmailRepository"
import { Email } from '../model/Email'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export class EmailReply {

    constructor(readonly repository: EmailRepository) { }

    async execute(request: Request, response: Response) {
        try {
            const { email, subject, message } = request.body

            if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
                throw new Error("As credenciais do e-mail não foram configuradas corretamente.");
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            })

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject,
                text: message
            })

            response.status(200).send('E-mail enviado com sucesso.');
        } catch (error) {
            console.log(error)
            response.status(500).send('Erro ao enviar e-mail.');
        }
    }
}