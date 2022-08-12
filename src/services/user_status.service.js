const { UserStatus } = require("../models");

const getUserStatusByName = async (name) => {
  return await UserStatus.findOne({ where: { name: name } });
};

module.exports = { getUserStatusByName };
