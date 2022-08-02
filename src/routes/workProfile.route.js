const express = require("express");
const { workProfileController } = require("../controllers/");

const router = express.Router();

router.route("/").get(workProfileController.getWorkProfiles);
router.route("/get").get(workProfileController.getWorkProfile);
router.route("/save").post(workProfileController.createWorkProfile);
router.route("/update").patch(workProfileController.updateWorkProfile);
router.route("/delete").delete(workProfileController.deleteWorkProfile);


// Get enum Values
router.route("/educational_levels").get(workProfileController.getEducationalLevels);
router.route("/relocation_option").get(workProfileController.getRelocationOptions);
router.route("/dev_experience").get(workProfileController.getDevExperiences);
router.route("/design_experience").get(workProfileController.getDesignExperiences);
router.route("/data_experience").get(workProfileController.getDataExperiences);
router.route("/gender").get(workProfileController.getGenders);
router.route("/english_level").get(workProfileController.getEnglishLevels);
router.route("/work_availability").get(workProfileController.getWorkAvailabilities);
router.route("/education_status").get(workProfileController.getEducationStatuses);
router.route("/visa").get(workProfileController.getVisas);

module.exports = router;
