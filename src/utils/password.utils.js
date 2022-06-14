const bcrypt = require("bcryptjs");

const comparePassword = async (pass, recivedPass) => {
  try {
    return await bcrypt.compare(pass, recivedPass);
  } catch (error) {
    throw Error(error);
  }
};

const encryptPassword = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { comparePassword, encryptPassword };
