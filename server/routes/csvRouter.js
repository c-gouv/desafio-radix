const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

router.post("/upload", function (res,req) {
    csvController.importarArquivos(req, res);
});

module.exports = router;