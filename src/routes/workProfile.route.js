const express = require("express");
const { workProfileController } = require("../controllers/");

const router = express.Router();

router.route("/").get(workProfileController.getWorkProfiles);
router.route("/get").get(workProfileController.getWorkProfile);
router.route("/save").post(workProfileController.createWorkProfile);
router.route("/update").patch(workProfileController.updateWorkProfile);
router.route("/delete").delete(workProfileController.deleteWorkProfile);


// Get enum Values
router.route("/data-workprofile").get(workProfileController.getDataWorkprofile);


module.exports = router;
