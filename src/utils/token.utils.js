const jwt = require("jsonwebtoken");

const createToken = (payload, expires) => {
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: expires,
  });
  return token;
};

module.exports = { createToken };
