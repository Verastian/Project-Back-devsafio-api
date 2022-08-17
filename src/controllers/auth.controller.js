const httpStatus = require("http-status");
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { authService, userService, userStatusService } = require("../services");
const { createToken } = require("../utils/token.utils");
const { comparePassword, encryptPassword } = require("../utils/password.utils");

//*login
const login = wrapperAsync(async (req, res) => {
  // Request body email or username
  const { email, password } = req.body;

  const userFound = await authService.getUserAuth({ email });

  if (!userFound) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "User not found",
      data: "",
    });
  }

  // TODO: this can be done using express-validator
  const matchPassword = await comparePassword(password, userFound.password); //tempPass = userFound.password
  if (!matchPassword) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Invalid credentials",
      data: "",
    });
  }

  // Create a Token
  const token = getToken({ id: userFound.id, name: userFound.name });

  const { id, name, lastname, email: userEmail, status_id } = userFound;


  res.status(httpStatus.OK).json({
    success: true,
    message: "Login succesfull",
    data: { user: { id, name, lastname, userEmail, status_id } },
    token
  });
});

//* register User
const register = wrapperAsync(async (req, res) => {
  const { email, name, lastname, password } =
    req.body.user;

  const passHash = await encryptPassword(password);

  const user = await authService.createUserAuth({
    email,
    name,
    lastname,
    password: passHash,
  });
  if (!user) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "User cannot be created",
      data: "",
    });
  }
  const {
    id: userId,
    name: userName,
    lastname: userLastname,
    email: userEmail,
    userStatus_id: userStatus_id
  } = user;

  const statusName = await userStatusService.getUserStatusByNameOrId(userStatus_id)
  // Create a Token
  const token = getToken({ id: userId, name: userName });

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "User created successfully",
    data: {
      user: {
        name: userName,
        lastname: userLastname,
        email: userEmail,
        status: statusName.name
      }
    },
    token
  });
});

const getToken = (payload) => {
  // Create a Token
  const expiresIn = 60 * 60 * 24; // expires in 24 hours
  return createToken(payload, expiresIn);
};

module.exports = { login, register };
