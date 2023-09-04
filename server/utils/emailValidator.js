const validator = require("validator/lib/isEmail");

const validateEmail = (email)=> {
  return validator(email);
}

module.exports = validateEmail;