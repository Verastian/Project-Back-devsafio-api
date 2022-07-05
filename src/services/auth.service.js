const { wrapperCommon } = require("../middlewares/async-wrapper");
const { User, userStatus }  = require("../models/");

//*we get a user by Id obtained from params
const getUserAuth = wrapperCommon(async (attr) => {
  const userFound = await User.findOne({
    where: attr,
    include: userStatus,
  });
  // userFound ? userFound : false;
  return userFound;
});

const createUserAuth = wrapperCommon(async (attr) => {
  const userFound = await User.create(attr);

  return userFound;
});

module.exports = { getUserAuth, createUserAuth };
