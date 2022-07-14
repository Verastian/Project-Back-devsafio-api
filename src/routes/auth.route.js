const express = require("express");
const { authController } = require("../controllers/");
const validateFields = require('../middlewares/validate-fields');
const { validateLogin, validateRegister } = require("../validators/auth.validator");

const router = express.Router();

router.post('/login', validateLogin, authController.login);

router.post('/register', [validateRegister, validateFields], authController.register);

module.exports = router;
