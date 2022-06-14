const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(userController.getUsers); //*get list
router.route("/:id").get(userController.getUser); //*get a User
router.route("/save").post(userController.saveUser);
router.route("/update/:id").patch(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);


module.exports = router;
