const { wrapperAsync } = require("./async-wrapper");
const { authService } = require("../services");

const checkDuplicateEmail = wrapperAsync(async (req, res, next) => {
  // user search by username or email
  const { email } = req.body;
  const userFound = await authService.getUserAuth({ email });

  if (userFound) {
    return res
      .status(400)
      .json({ success: false, message: "Failed! Email is already in use!" });
  }
  next();
});

module.exports = checkDuplicateEmail;
