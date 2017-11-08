const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  email: String,
  username: String,
  password: String
});

const Customer = mongoose.model("customer", CustomerSchema);
module.exports = Customer;
