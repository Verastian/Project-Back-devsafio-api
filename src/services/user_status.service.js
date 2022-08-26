const { Op } = require("sequelize");
const { wrapperCommon } = require("../middlewares/async-wrapper");
const { UserStatus } = require("../models");

const getUserStatusByNameOrId = wrapperCommon(async (status) => {

  let typeString = typeof status === 'string' ? status : null
  let typeNum = typeof status === 'number' ? status : null

  return await UserStatus.findOne({
    where: {
      [Op.or]: [
        { name: typeString }, { id: typeNum }]
    }
  });
});

module.exports = { getUserStatusByNameOrId, };
