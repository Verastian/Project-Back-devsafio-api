const express = require("express");
const { databasesController } = require("../controllers/");

const router = express.Router();

router.route("/").get(databasesController.getDatabases);

module.exports = router;
