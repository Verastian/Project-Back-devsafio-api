const { Database } = require("../models/");

const getDatabases = async () => {
  try {
    return await Database.findAll();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
    getDatabases,
 };
