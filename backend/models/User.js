const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
