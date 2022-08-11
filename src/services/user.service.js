const { wrapperCommon } = require("../middlewares/async-wrapper");
const { User } = require("../models/");

const getUserByEmail = wrapperCommon(async (email) => {
  return User.findOne({ where: { email: email } });
});

// *Users List 
const getUsers = wrapperCommon(async () => {
  const users = await User.findAll();
  return users;
});

//*we get a user by Id obtained from params
const getUser = wrapperCommon(async (attr) => {
  const users = await User.findOne(attr);
  return users;
});

//*create
const saveUser = wrapperCommon(async (attr) => {

});


//*update
const updateUser = wrapperCommon(async (attr) => {

});

// *delete
const deleteUser = wrapperCommon(async (attr) => {

});

module.exports = { getUserByEmail, getUsers, getUser, saveUser, updateUser, deleteUser };
