const express = require("express");
const { getOnBoardController } = require("../controllers");

const router = express.Router();

//CATEGORIAS
router.route("/categories").get(getOnBoardController.getCategories);
router.route("/categories/:catname").get(getOnBoardController.retrieveCategory);
router.route("/categories/:catname/jobs").get(getOnBoardController.jobsCategories);

//EMPRESA

//MODALIDAD

//ANTIGUEDAD

//CIUDAD

module.exports = router;
