const httpStatus = require('http-status');
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { toolService } = require("../services");

const getTools = wrapperAsync(async (req, res) => {
  const tools = await toolService.getTools();
  res
    .status(httpStatus.OK)
    .json({
      success: true,
      message: "tools obtained",
      data: tools
    });
});

module.exports = {
  getTools
};
