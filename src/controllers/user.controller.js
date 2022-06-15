const { wrapperAsync } = require("../middlewares/async-wrapper");
const service = require("../services");
const userService = service.userService;

const getUsers = wrapperAsync(async (req, res) => {
  const getUsers = await userService.getUsers();
  res
    .status(200)
    .json({ success: true, message: "users obtained", data: getUsers });
});

const getUser = wrapperAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await userService.getUser({ id });

  res.status(200).json({ success: true, message: "user obtained", data: user });
});
const saveUser = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "user saved" });
});
const updateUser = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "user updated" });
});
const deleteUser = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "user deleted" });
});

module.exports = {
  getUser,
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
};
// TODO: we need to remove the "message" key from the json object. this is just to understand how it works
