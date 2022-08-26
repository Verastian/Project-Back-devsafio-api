const httpStatus = require('http-status');
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { devLanguagesService } = require("../services");


const getLanguages = wrapperAsync(async (req, res) => {
  const devLanguages = await devLanguagesService.getDevLanguages();
  res
  .status(httpStatus.OK)
  .json({
    success: true,
    message: "Dev languages obtained",
    data: devLanguages
  });
});

module.exports = {
    getLanguages
};
