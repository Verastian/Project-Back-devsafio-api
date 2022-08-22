const express = require("express");
const { workProfileController } = require("../controllers/");
const validateFields = require("../middlewares/validate-fields");
const { validateFieldsWorkProfile, validateParamsById } = require("../validators/workprofile.validator");


const router = express.Router();

router.get("/", workProfileController.getWorkProfiles);
router.post("/", [validateFieldsWorkProfile, validateFields], workProfileController.createWorkProfile);
router.get("/users/:user_id", [validateParamsById, validateFields], workProfileController.getDataWorkprofileByUser);
router.patch("/update/:id", workProfileController.updateWorkProfile);
router.delete("/delete/:id", workProfileController.deleteWorkProfile);

// Get enum Values
router.get("/data-workprofile", workProfileController.getDataWorkprofile);

module.exports = router;
