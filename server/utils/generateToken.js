const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "2d",
  });

  res.cookie("jwt", token, {
    // httpOnly: true,  //cookie is only accessible in the server-side
    secure: false, //cookie will only e sent over secure connections
    sameSite: 'strict', //cookie will not be sent to cross-site requests
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
};

const destroyToken = (res) => {
  res.cookie("jwt", '', {
    httpOnly: true,
    expires: new Date(0)
  });
}
module.exports = { generateToken, destroyToken };
