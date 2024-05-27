const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connection/connection');
const nodemailer = require('nodemailer');
const generateHTML = require('../functions/generateMail');

let mailOptions = {};

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false, // use SSL
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
    }
});

console.log(process.env.MAIL, process.env.PASSWORD);


const setMailOptions = (name, mail, suggestion) => {
    const htmlContent = generateHTML(name, process.env.MAIL, suggestion);
    mailOptions = {
        from: mail,
        to: process.env.MAIL,
        subject: `🛎️📨Nueva sugerencia de:  ${name} desde el formulario de contacto!🛎️📨`,
        html: htmlContent
    };
};


const sendMail = () => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

router.post('/', (req, res) => {
    console.log(req.body);
    const { name, mail, suggestion } = req.body;
    console.log(name, mail, suggestion);
    setMailOptions(name, mail, suggestion);
    sendMail();
});
module.exports = router;