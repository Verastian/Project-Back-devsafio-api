const jwt = require("jsonwebtoken");

const createToken = (id, expires) => {
  const token = jwt.sign({ _id: id }, process.env.SECRET, {
    expiresIn: expires,
  });
  return token;
};
module.exports = { createToken };
