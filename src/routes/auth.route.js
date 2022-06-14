const express = require("express");
const authController = require("../controllers/auth.controller");
const verifySignUp = require("../middlewares/verify-signUp");
const router = express.Router();

router.route("/signin").post(authController.signIn); //*login
router.route("/signup").post([verifySignUp], authController.signUp); //*register

module.exports = router;
