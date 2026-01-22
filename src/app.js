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
});

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added succesfully!!");
  } catch (error) {
    res.status(400).send("unable to store user data" + error);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (err) {
    res.status(400).send("unable to store user data");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["firstName", "lastName", "password", "age", "gender", "about", "photoUrl", "skills"];
    
    const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k));

    if (!isUpdateAllowed) {
      return res.status(400).send("invalid updates!!");
    }
    await User.findByIdAndUpdate(userId, data, {runValidators: true});
    res.send("successfully updated!!");
  } catch (err){
    res.status(400).send("unable to update user data" + err);
  }

  // const userEmail = req.body.emailId
  // const data = req.body

  // try {
  //   await User.findOneAndUpdate({ emailId: userEmail }, {$set : data})
  //   res.send("update success by findone")
  // } catch (error) {
  //   res.status(400).send("unable to store user data");
  // }
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
