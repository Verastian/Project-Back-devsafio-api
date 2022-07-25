const express = require("express");
const { workProfileToolController } = require("../tools/");

const router = express.Router();

router.route("/").get(workProfileToolController.getWorkProfileTool);
router.route("/").post(workProfileToolController.createWorkProfileTool);
router.route("/get").get(workProfileToolController.getWorkProfileTool);
router.route("/update").patch(workProfileToolController.updateWorkProfileTool);
router.route("/save").post(workProfileToolController.saveWorkProfileTool);
router.route("/delete").delete(workProfileToolController.deleteWorkProfileTool);

module.exports = router;
