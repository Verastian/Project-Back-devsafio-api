const { wrapperCommon } = require("../middlewares/async-wrapper");
const models = require("../models");
const profileStatus = models.ProfileStatus;
const user = models.User;

//*we get a user by Id obtained from params
const getUserAuth = wrapperCommon(async (attr) => {
  const userFound = await user.findOne({
    where: attr,
    include: profileStatus,
  });
  // userFound ? userFound : false;
  return userFound;
});

const createUserAuth = wrapperCommon(async (attr) => {
  const userFound = await user.create(attr);

  return userFound;
});

module.exports = { getUserAuth, createUserAuth };
