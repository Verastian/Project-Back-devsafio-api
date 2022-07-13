const { User, UserStatus }  = require("../models/");
const { getUserStatusByName } = require("./user_status.service");

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
  const activeStatus = getUserStatusByName(STATUS_ACTIVE);
  const userFound = await User.create({ ...attr, status: activeStatus });

  return userFound;
};

module.exports = { getUserAuth, createUserAuth };
