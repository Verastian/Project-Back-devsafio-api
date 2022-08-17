const express = require("express");
const { workProfileController } = require("../controllers/");

const router = express.Router();

router.route("/").get(workProfileController.getWorkProfiles);
router.route("/:user_id").get(workProfileController.getDataWorkprofileByUser);
router.route("/save").post(workProfileController.createWorkProfile);
router.route("/update/:id").patch(workProfileController.updateWorkProfile);
router.route("/delete/:id").delete(workProfileController.deleteWorkProfile);


// Get enum Values
router.route("/data-workprofile").get(workProfileController.getDataWorkprofile);


module.exports = router;
