const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "lal",
    lastName: "singh",
    emailId: "lal@singh.com",
    password: "lal@123",
  });

  try {
    await user.save();
    res.send("Data stored succesfully!!");
  } catch (error) {
    res.status(401).send("unable to store user data");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection successfully stablished..");
    app.listen(7777, () => {
      console.log("succesfully server created on port 7777....");
    });
  })
  .catch(() => {
    console.log("Datbase connection cannot be done!!!!");
  });
