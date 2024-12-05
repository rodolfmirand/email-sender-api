# email-sender-api

## node modules

npm install express typescript ts-node-dev @types/express body-parser nodemailer

npm i --save-dev @types/nodemailer

npm install uuid @types/uuid

npm install dotenv

npm install knex

## routes

localhost:3000/send-message
```json
{
  "name": "",
  "phoneNumber": "",
  "email": "",
  "message": ""
}
```

localhost:3000/reply-email
```json
{
  "email": "", 
  "subject" : "",
  "message" : ""
}
```
## EMAIL_USER and EMAIL_PASS

Needed to create .env in project root

EMAIL_USER="email" </br>
EMAIL_PASS="password"
