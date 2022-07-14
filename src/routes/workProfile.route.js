const express = require("express");
const { workProfileController } = require("../controllers/");

const router = express.Router();

router.route("/").get(workProfileController.getWorkProfiles);
router.route("/").post(workProfileController.createWorkProfile);
router.route("/get").get(workProfileController.getWorkProfile);
router.route("/update").patch(workProfileController.updateWorkProfile);
router.route("/save").post(workProfileController.saveWorkProfile);
router.route("/delete").delete(workProfileController.deleteWorkProfile);

module.exports = router;
