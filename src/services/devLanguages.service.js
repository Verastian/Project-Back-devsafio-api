const { DevLanguage } = require("../models");

const getDevLanguages = async () => {
  try {
    return await DevLanguage.findAll();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getDevLanguages
};
