const { body } = require('express-validator');
const { userService } = require("../services/");

const validateRegister = [
  body('user.name').exists(),
  body('user.lastname').exists(),
  //body('user.password').exists().isLength({min: 6}).withMessage('contraseña menor de 6 caracteres').isAlphanumeric(),
  //body('user.password').regex(/[a-zA-Z0-9]{6,10}/).required(),
  body('user.password').exists().isLength({min: 6, max: 10}).withMessage('contraseña menor de 6 caracteres').isAlphanumeric(),
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
  body('email').exists().isEmail().trim(),
  body('password').exists().trim()
];


module.exports = { validateRegister, validateLogin };
