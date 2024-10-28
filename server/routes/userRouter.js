const express = require('express');
const { loginController, registerController } = require('../controllers/usuarioController');

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController)

module.exports = router;