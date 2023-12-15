const mongoose = require("mongoose");

const userRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const userRegister = mongoose.model("CompanyRegister", userRegisterSchema);

module.exports = userRegister;
