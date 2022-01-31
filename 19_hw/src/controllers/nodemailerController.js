require('dotenv').config();
const IO = require('../utils/IO/io');
const nodemailer = require('nodemailer');
const path = require('path')
const recievedMessages = new IO(path.resolve(__dirname, '../model/messages.json'));

async function nodeMailer () {
    
    const {name, email} = req.body


    let transporter = nodemailer.createTransport({
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.E_USERNAME, // generated ethereal user
          pass: process.env.E_PASSWORD, // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from: process.env.E_USERNAME, // sender address
        to: email, // list of receivers
        subject: "Important ✔️", // Subject line
        text: `Hello ${name}`, // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
}


module.exports = nodemailer;