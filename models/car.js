const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: String,
  price: Number,
  seatsNumber: Number
});

const Car = mongoose.model("car", CarSchema);
module.exports = Car;
