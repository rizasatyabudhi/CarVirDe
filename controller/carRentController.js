const RentOwner = require("../models/rentOwner");
const Car = require("../models/car");

module.exports = {
  registerRent(req, res, next) {
    const rentOwnerProps = req.body;
    RentOwner.create(rentOwnerProps)
      .then(owner => res.send("register success"))
      .catch(next);
  }
};
