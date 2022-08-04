const { wrapperAsync } = require("../middlewares/async-wrapper");
const { ToolService } = require("../services");


const getTool = wrapperAsync(async (req, res) => {  
  const Tool = await ToolService.getTool(req,res);
  res
  .status(200)
  .json({ 
    success: true, 
    message: "tool obtained", 
    data: Tool
  });
});

module.exports = {
    getTool
};