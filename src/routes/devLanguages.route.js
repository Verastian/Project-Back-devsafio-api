const express = require("express");
const { devLanguagesController } = require("../controllers");


const router = express.Router();

router.route("/").get(devLanguagesController.getLanguages);


module.exports = router;