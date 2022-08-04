const express = require("express");
const { ToolController } = require("../controllers");


const router = express.Router();

router.route("/").get(ToolController.getTool); //*get a user

module.exports = router; 