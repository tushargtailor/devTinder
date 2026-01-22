const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minLength: 2 },
    lastName: { type: String },
    emailId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true, min: 8 },
    age: { type: Number },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Invalid Data input");
        }
      },
    },
    about: {
      type: String,
      maxLength: 500,
      default: "I am a Software engineer",
    },
    photoUrl: { type: String },
    skills: [String],
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
