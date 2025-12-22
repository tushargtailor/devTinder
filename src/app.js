const express = require("express");

const app = express();

app.get("/",(req, res) => {
  res.send("Heloo welcome to my first nodejs project buddy!!");
});

app.use("/test",(req, res) => {
  res.send("Heloo welcome to my first nodejs test!!");
});

app.get("/hello",(req, res) => {
  res.send("Heloo to everyone......!");
});

app.listen(7777, () => {
  console.log("succesfully server created on port 7777....");
});
