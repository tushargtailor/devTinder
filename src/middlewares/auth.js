const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).send("Authentication token missing");
  }

  const decodedData = jwt.verify(token, "DEVTINDER@2026$TART");
  const { _id } = decodedData;
  User.findById(_id).then((user) => {
    if (!user) {
      res.status(401).send("User not found");
    }

    req.user = user;
    next();
  });
};

module.exports = {
  userAuth,
};
