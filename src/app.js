const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  const users = await User.findOne({ emailId: userEmail });

  try {
    if (!users) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("something went wrong");
  }

  // const userEmail = req.body.emailId;

  // const users = await User.find({ emailId: userEmail });

  // try {
  //   if (!users) {
  //     res.status(404).send("something went wrong");
  //   } else {
  //     res.send(users);
  //   }
  // } catch (error) {
  //   res.status(404).send("something went wrong");
  // }
});

app.get("/feed", async (req, res) => {

  const users = await User.find({});
  res.send(users);
})

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added succesfully!!");
  } catch (error) {
    res.status(400).send("unable to store user data");
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
