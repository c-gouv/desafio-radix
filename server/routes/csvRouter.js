const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

router.post("res", function (res,req) {
    csvController.importarArquivos(req, res);
});

module.exports = router;