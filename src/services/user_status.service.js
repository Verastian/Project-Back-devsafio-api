const { Op } = require("sequelize");
const { wrapperCommon } = require("../middlewares/async-wrapper");
const { UserStatus } = require("../models");

const getUserStatusByNameOrId = wrapperCommon(async (attr) => {

  let typeString = typeof attr === 'string' ? attr : null
  let typeNum = typeof attr === 'number' ? attr : null

  return await UserStatus.findOne({
    where: {
      [Op.or]: [
        { name: typeString }, { id: typeNum }]
    }
  });
});


module.exports = { getUserStatusByNameOrId, };
