const { wrapperCommon } = require("../middlewares/async-wrapper");
const { Tool } = require("../models");

const getTools = wrapperCommon(async () => {
  return await Tool.findAll();
});
const getToolById = wrapperCommon(async (id) => {
  const toolFound = await Tool.findOne({
    where: id,
  });
  return toolFound
});

module.exports = {
  getTools,
  getToolById,
};
