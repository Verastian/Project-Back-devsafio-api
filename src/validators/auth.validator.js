const { body } = require('express-validator');
const { userService } = require("../services/");

const validateRegister = [
  body('user.name').exists(),
  body('user.lastname').exists(),
  body('user.password').exists(),
  body('user.password_confirmation').exists(),
  body('user.email').exists().isEmail().custom(value => {
    return userService.getUserByEmail(value).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }),
];

const validateLogin = [
  body('email').exists().isEmail(),
  body('password').exists()
];


module.exports = { validateRegister, validateLogin };
