const express = require('express');
const { highestDataController, allAvgController } = require('../controllers/highestDataController');

const router = express.Router();

router.get('/data/:range', async (req, res) => {
    const { range } = req.params;

    try {
        const dados = await highestDataController(range);
        res.json(dados);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/data/:range/:filter', async (req, res) => {
    const { range, filter } = req.params;

    try {
        const dados = await allAvgController(range, filter);
        res.json(dados);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;