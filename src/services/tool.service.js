const { Tool } = require("../models");

const getTools = async () => {
  return await Tool.findAll();
};

module.exports = { getTools };
