const mongoose = require('mongoose');
const driverSchema = mongoose.Schema({
  company_name: String,
  company_email: String,
  vehicle_number: String,
  driver_name: String,
  password: String,
  driver_contact: String,
  office_address: String,
  token: String,
});

module.exports = mongoose.model('driverregisters', driverSchema);
