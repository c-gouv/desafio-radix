const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/graphController');

router.get('/data/:range', async (req, res) => {
    const { range } = req.params;

    try {
        const data = await getData(range);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
