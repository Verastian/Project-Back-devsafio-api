const httpStatus = require('http-status');
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { databasesService } = require("../services");

const getDatabases = wrapperAsync(async (req, res) => {
  const databases = await databasesService.getDatabases();
  res
    .status(httpStatus.OK)
    .json({
      success: true,
      message: "Databases obtained",
      data: databases
    });
});

module.exports = {
  getDatabases,
};
