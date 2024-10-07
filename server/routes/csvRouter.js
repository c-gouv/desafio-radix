const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const etlArquivos = require('../controllers/csvController');

const router = express.Router();

router.post('/upload', upload.single('file'), etlArquivos);

module.exports = router;