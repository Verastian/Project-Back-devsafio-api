const { validationResult } = require('express-validator');
const httpStatus = require('http-status');
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { authService } = require("../services");
const { createToken } = require("../utils/token.utils");
const { comparePassword, encryptPassword } = require("../utils/password.utils");

// login
const login = wrapperAsync(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Invalid request",
      data: ""
    });
  }

  // Request body email or username
  const { email, password } = req.body;

  const userFound = await authService.getUserAuth({ email });

  if (!userFound) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({
        success: false,
        message: "User not found",
        data: ""
      });
  }

  // TODO: this can be done using express-validator
  const matchPassword = await comparePassword(password, userFound.password); //tempPass = userFound.password
  if (!matchPassword) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({
        success: false,
        message: "Invalid credentials",
        data: ""
      });
  }

  // Create a Token
  const token = getToken({ id: userFound.id, name: userFound.name });

  res.status(httpStatus.OK).set({ 'Authorization': token }).json({
    success: true,
    message: "Login succesfull",
    data: { user: userFound }
  });
});

// register User
const register = wrapperAsync(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Invalid request",
      data: ""
    });
  }

  const { email, name, lastname, password, password_confirmation } = req.body.user;

  if (!(password === password_confirmation)) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        success: false,
        message: "Passwords do not match",
        data: ""
      });
  }
  const passHash = await encryptPassword(password);

  const user = await authService.createUserAuth({
    email,
    name,
    lastname,
    password: passHash
  });
  if (!user) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: "User cannot be created",
        data: ""
      });
  }

  // Create a Token
  const token = getToken({ id: user.id, name: user.name });

  res.status(httpStatus.CREATED).set({ 'Authorization': token }).json({
    success: true,
    message: "User created successfully",
    data: {
      user
    }
  });
});

const getToken = (payload) => {
  // Create a Token
  const expiresIn = 60 * 60 * 24; // expires in 24 hours
  return createToken(payload, expiresIn);
};

module.exports = { login, register };
