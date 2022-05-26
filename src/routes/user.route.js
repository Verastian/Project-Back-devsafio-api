const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(userController.getUsers); //*get list
router.route("/get/:id").get(userController.getUser); //*get a User
router.route("/save").post(userController.savetUser);
router.route("/update/:id").patch(userController.updatetUser);
router.route("/delete/:id").delete(userController.deletetUser);

module.exports = router;
