const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    // res.send("hello users whatsup.....!");
    next()
  },
  (req, res,next) => {
    // res.send("hello users whatsup.....!");
    next()
  },
  (req, res) => {
    res.send("hello users whatsup 3.....!");
  }
);

app.listen(7777, () => {
  console.log("succesfully server created on port 7777....");
});
