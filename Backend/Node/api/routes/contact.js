const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const generateHTML = require('../functions/generateMail');
const executeQuery = require('../functions/executeQuery');

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
    const htmlContent = generateHTML(name, mail, suggestion);
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

router.post('/', async (req, res) => {
    console.log(req.body);
    const { name, mail, suggestion } = req.body;
    console.log(name, mail, suggestion);
    setMailOptions(name, mail, suggestion);
    sendMail();

    try {
        const query = 'INSERT INTO suggestions (suggestionName, suggestionMail, suggestionContent) VALUES (?,?,?);';
        await executeQuery(query, [name, mail, suggestion]);
        let data = "Form was sent correctly";
        res.json({ 'operation': data });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error submitting the form');
    }
});

module.exports = router;
