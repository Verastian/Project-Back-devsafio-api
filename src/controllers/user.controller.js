const userService = require("../sevices/user.service");

const getUsers = async (req, res) => {
  const getUsers = await userService.getUsers();
  res
    .status(200)
    .json({ success: true, message: "users obtained", data: getUsers });
};
const getUser = (req, res) => {
  res.status(200).json({ success: true, message: "user obtained" });
};
const savetUser = (req, res) => {
  res.status(200).json({ success: true, message: "user saved" });
};
const updatetUser = (req, res) => {
  res.status(200).json({ success: true, message: "user updated" });
};
const deletetUser = (req, res) => {
  res.status(200).json({ success: true, message: "user deleted" });
};

module.exports = {
  getUser,
  getUsers,
  savetUser,
  updatetUser,
  deletetUser,
};
// TODO: we need to remove the "message" key from the json object. this is just to understand how it works
