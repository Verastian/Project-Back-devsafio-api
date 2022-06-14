const { wrapperCommon } = require("../middlewares/async-wrapper");
const models = require("../models");
const user = models.User;

//*we get the users list
const getUsers = wrapperCommon(async (id, attr) => {
  const users = await user.findAll();
  return users;
});
//*we get a user by Id obtained from params
const getUser = wrapperCommon(async (id, attr) => {
  try {
    const userFound = await user.findOne({ where: id });
    return userFound;
  } catch (error) {
    console.error(error);
  }
});
//*create
const saveUser = wrapperCommon(async (id, attr) => {
  try {
  } catch (error) {
    console.error(error);
  }
});
//*update
const updateUser = wrapperCommon(async (id, attr) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.error(error);
  }
});
// *delete
const deleteUser = wrapperCommon(async (id, attr) => {
  try {
    const { id } = req.params;
  } catch (error) {
    throw new Error(error)

  }
});

module.exports = { getUsers, getUser, saveUser, updateUser, deleteUser };
