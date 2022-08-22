const { wrapperCommon } = require("../middlewares/async-wrapper");
const { DevLanguage } = require("../models");

const getDevLanguages = wrapperCommon(async () => {
  return await DevLanguage.findAll();
});


const getDevLanguageById = wrapperCommon(async (id) => {
  const devLanguageFound = await DevLanguage.findOne({
    where: id,
  });
  return devLanguageFound
})

module.exports = {
  getDevLanguages,
  getDevLanguageById,
};
