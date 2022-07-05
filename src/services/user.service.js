const { User } = require("../models/");

const getUserByEmail = (email) => {
  return User.findOne({ where: { email: email }});
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
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

module.exports = { getUserByEmail, getUsers, getUser, saveUser, updateUser, deleteUser };
