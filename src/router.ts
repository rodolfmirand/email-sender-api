import { Request, Response, Router } from "express"
import { EmailCreate } from "./controller/EmailCreate"
import { EmailRepositoryInMemory } from "./infra/repository/memory/EmailRepositoryInMemory"
import { EmailReply } from "./controller/EmailReply"

const router = Router()

let repository = new EmailRepositoryInMemory()

const emailCreate = new EmailCreate(repository)
const emailReply = new EmailReply(repository)

router.post('/send-message', (request: Request, response: Response) => {
    emailCreate.execute(request, response)
})

router.post('/reply-email', (request: Request, response: Response) => {
    emailReply.execute(request, response)
})

export { router }