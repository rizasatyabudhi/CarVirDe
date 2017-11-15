const RentOwner = require("../models/rentOwner");
const Car = require("../models/car");

module.exports = {
  registerRent(req, res, next) {
    const rentOwnerProps = req.body;
    RentOwner.create(rentOwnerProps)
      .then(owner => res.send("register success"))
      .catch(next);
  },
  addCar(req, res, next) {
    const carProps = req.body;
    const newCar = new Car(carProps);
    RentOwner.findById({ _id: req._id })
      .then(carOwner => carOwner.cars.push(newCar))
      .save();
  }
};
