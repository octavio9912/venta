const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const executeQuery = require('../functions/executeQuery');


router.post('/', async (req, res) => {
    const { mail, completeName, password, creditCard, expirationDate, ccv } = req.body;

    try {
        const query = 'INSERT INTO users (userMail, userName, userPassword, creditCard, expirationDate, ccv) VALUES (?, ?, ?, ?, ?, ?);';
        await executeQuery(query, [mail, completeName, password, creditCard, expirationDate, ccv]);
        let data = "Usuario creado correctamente 😉";
        res.json({ 'operation': data });
    } catch (error) {
        console.log(error);
        res.status(500).json('Invalid data');
    }
});

module.exports = router;
