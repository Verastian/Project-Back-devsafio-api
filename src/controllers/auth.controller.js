const { wrapperAsync } = require("../middlewares/async-wrapper");
const { comparePassword, encryptPassword } = require("../utils/password.utils");
const service = require("../services");
const authService = service.authService;
const { createToken } = require("../utils/token.utils");

// login
const signIn = wrapperAsync(async (req, res) => {
  // Request body email or username
  const { email, password } = req.body;
  const userFound = await authService.getUserAuth({ email });

  if (!userFound) {
    return res
      .status(404)
      .json({ succes: false, message: "The User cannot be Found" });
  }
  // console.log(password, userFound.password);
  const matchPassword = await comparePassword(password, userFound.password); //tempPass = userFound.password
  // console.log(matchPassword);
  if (!matchPassword) {
    return res
      .status(401) //Unauthorized
      .json({ succes: false, message: "The password does not match the user" });
  }

  res.status(200).json({ succes: true, user: userFound });
});

// register User
const signUp = wrapperAsync(async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  console.log(password, passwordConfirmation);

  if (!(password === passwordConfirmation)) {
    return res
      .status(401)
      .json({ succes: false, message: "Passwords do not match" });
  }
  const passHash = await encryptPassword(password);

  const user = await authService.createUserAuth({ email, password: passHash });
  if (!user) {
    return res
      .status(500)
      .json({ succes: false, message: "The User cannot be created" });
  }

  // Create a Token
  const expiresIn = 60 * 60 * 24; // expires in 24 hours
  const token = createToken({ id: user.id }, expiresIn);

  res.status(200).json({ succes: true, token });
});

module.exports = { signIn, signUp };
