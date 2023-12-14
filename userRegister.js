const mongoose = require('mongoose');
const userRegisterSchema = mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
  contact: String,
  address: String,
  emergency_contact: String,
  cnic: String,
  token: String,
});

module.exports = mongoose.model('userregisters', userRegisterSchema);
