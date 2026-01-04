const express = require("express");

const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getUserData", (req,res) => {
  res.send("User Data.....")
})


app.get("/admin/deleteUserData", (req,res) => {
  res.send("User Deleted.....")
})


app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(7777, () => {
  console.log("succesfully server created on port 7777....");
});
