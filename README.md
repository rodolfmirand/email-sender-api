# email-sender-api

## node modules

npm install express typescript ts-node-dev @types/express body-parser nodemailer

npm i --save-dev @types/nodemailer

npm install uuid @types/uuid

npm install dotenv

## routes

localhost:3000/send-message
{
  "name": "",
  "phoneNumber": "",
  "email": "",
  "message": ""
}

localhost:3000/reply-email
{
  "email": "", 
  "subject" : "",
  "message" : ""
}
