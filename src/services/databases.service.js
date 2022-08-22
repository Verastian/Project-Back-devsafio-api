const { wrapperCommon } = require("../middlewares/async-wrapper");
const { Database } = require("../models/");

const getDatabases = wrapperCommon(async () => {
  return await Database.findAll();

});


const getDatabaseById = wrapperCommon(async (id) => {
  const databaseFound = await Database.findOne({
    where: id,
  });
  return databaseFound
});
module.exports = {
  getDatabases,
  getDatabaseById,
};
