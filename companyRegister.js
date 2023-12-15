const mongoose = require("mongoose");

const companyRegisterSchema = new mongoose.Schema({
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

const companyRegister = mongoose.model("CompanyRegister", companyRegisterSchema);

module.exports = companyRegister;
