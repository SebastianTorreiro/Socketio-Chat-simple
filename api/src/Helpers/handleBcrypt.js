const bcrypt = require("bcryptjs");

const encrypt = async (passwordTextPlain) => {
  const hash = await bcrypt.hash(passwordTextPlain, 10);
  return hash;
};

const compare = async (passwordTextPlain, passwordHash) => {
  return await bcrypt.compare(passwordTextPlain, passwordHash);
};

module.exports = {
  encrypt,
  compare,
};
