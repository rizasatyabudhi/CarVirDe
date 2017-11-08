const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentOwnerSchema = new Schema({
  email: String,
  username: String,
  password: String,
  address: String,
  phoneNumber: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "car"
    }
  ]
});

const RentOwner = mongoose.model("rentOwner", RentOwnerSchema);
module.exports = RentOwner;
