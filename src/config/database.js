const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tusharNode:sLek161ZZl3YC5MS@tusharnode.ym8lebh.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
