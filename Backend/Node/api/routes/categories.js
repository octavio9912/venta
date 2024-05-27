const express = require('express');
const router = express.Router();
const executeQuery = require('../functions/executeQuery');


router.get('/get-games', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM games');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).send('Error fetching games');
    }
});

router.get('/get-consoles', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM consoles');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching consoles:', error);
        res.status(500).send('Error fetching consoles');
    }
});

router.get('/get-accessories', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM accessories');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching accessories:', error);
        res.status(500).send('Error fetching accessories');
    }
});

module.exports = router;
