const { body } = require('express-validator');
const { userService } = require("../services/");
const { comparePassword } = require("../utils/password.utils");

const validateRegister = [
  body('user.name').exists().notEmpty(),
  body('user.lastname').exists().notEmpty(),
  body('user.password').exists().isLength({ min: 6, max: 10 }).withMessage('contraseña menor de 6 caracteres').isAlphanumeric(),
  body('user.password_confirmation').exists().custom((value, { req }) => {
    if (value !== req.body.user.password) {
      throw new Error('Password confirmation does not match password');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
  /*  body('user.email').exists().isEmail().custom(value => {
     return userService.getUserByEmail(value).then(user => {
       if (user) {
         return Promise.reject('E-mail already in use');
       }
     });
   }), */
];

const validateLogin = [
  body('email').exists().isEmail().trim(),
  body('password').exists().trim().custom((value, { req }) => {
    const { email } = req.body
    return userService.getUser({ email }).then(async userFound => {
      const userpass = userFound.password
      const matchPassword = await comparePassword(value, userpass);
      if (!matchPassword) {
        return Promise.reject('Enter the correct password');
      }
    });
  }),
];


module.exports = { validateRegister, validateLogin };
