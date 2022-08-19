const { User, UserStatus } = require("../models");
const { getUserStatusByName, getUserStatusByNameOrId } = require("./user_status.service");

const STATUS_ACTIVE = "active";

//*we get a user by Id obtained from params
const getUserAuth = async (attr) => {
  const userFound = await User.findOne({
    where: attr,
    include: UserStatus,

  });

  return userFound;
};

const createUserAuth = async (user) => {
  const activeStatus = await getUserStatusByNameOrId(STATUS_ACTIVE);
  user.user_status_id = activeStatus.id
  const userFound = await User.create(user);
  return userFound;
};

module.exports = { getUserAuth, createUserAuth };
