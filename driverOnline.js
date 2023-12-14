const mongoose = require('mongoose');
const driverOnlineSchema = mongoose.Schema({
  company_name: String,
  vehicle_number: String,
  driver_name: String,
//   password:String,
  driver_contact: String,
  office_address: String,
  company_email: String,
  token: String,
});

module.exports = mongoose.model('onlinedrivers', driverOnlineSchema);
