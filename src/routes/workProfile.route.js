const express = require("express");
const workProfileController = require("../controllers/workProfile.controller");

const router = express.Router();

router.route("/").get(workProfileController.getWorkProfiles);
router.route("/get").get(workProfileController.getWorkProfile);
router.route("/update").patch(workProfileController.updateWorkProfile);
router.route("/save").post(workProfileController.saveWorkProfile);
router.route("/delete").delete(workProfileController.deleteWorkProfile);

module.exports = router;
