const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const executeQuery = require('../functions/executeQuery');


router.post('/', async (req, res) => {
    const { mail, password } = req.body;

    try {
        const query = 'SELECT userMail, userName, creditCard, expirationDate, ccv FROM users WHERE userMail = ? AND userPassword = ?';
        const rows = await executeQuery(query, [mail, password]);

        if (rows.length > 0) {
            let data = "logged";
            const token = jwt.sign(data, 'Testing');
            res.json({
                "token": token,
                "user": rows[0].userName,
                "creditCard": rows[0].creditCard,
                "expirationDate": rows[0].expirationDate,
                "ccv": rows[0].ccv
            });
        } else {
            res.json('Invalid data');
            console.log(rows);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Invalid data');
    }
});

module.exports = router;
