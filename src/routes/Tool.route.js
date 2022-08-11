const express = require("express");
const { toolController } = require("../controllers");

const router = express.Router();

router.route("/").get(toolController.getTools);

module.exports = router;
