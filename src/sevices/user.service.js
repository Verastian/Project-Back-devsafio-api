const models = require("../models");

//*we get the users list
const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    return users;
  } catch (error) {
    console.error(error);
  }
};
//*we get a user by Id obtained from params
const getUser = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
  } catch (error) {
    console.error(error);
  }
};
//*create
const saveUser = (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
//*update
const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
  } catch (error) {
    console.error(error);
  }
};
// *delete
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUsers, getUser, saveUser, updateUser, deleteUser };
