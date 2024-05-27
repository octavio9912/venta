const express = require('express');
const router = express.Router();
const executeQuery = require('../functions/executeQuery');


router.get('/get-game-offers', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM games WHERE offer = 1;');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching game offers');
    }
});

router.get('/get-console-offers', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM consoles WHERE offer = 1;');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching console offers');
    }
});

router.get('/get-accessory-offers', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM accessories WHERE offer = 1;');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching accessory offers');
    }
});

module.exports = router;
