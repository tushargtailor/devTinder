const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    firstName: "Tushar",
    lastName: "Tailor",
  });
});

app.post("/user", (req, res) => {
  res.send("Data succesfully sent to Database!!")
})

app.delete("/user", (req,res) => {
  res.send("Successfully Deleted")
})

app.use("/test", (req, res) => {
  res.send("Heloo welcome to my first nodejs test!!");
});

app.listen(7777, () => {
  console.log("succesfully server created on port 7777....");
});
