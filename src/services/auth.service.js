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

const createUserAuth = async (attr) => {
  const activeStatus = await getUserStatusByNameOrId(STATUS_ACTIVE);
  attr.userStatus_id = activeStatus.id
  const userFound = await User.create(attr);
  return userFound;
};

module.exports = { getUserAuth, createUserAuth };
