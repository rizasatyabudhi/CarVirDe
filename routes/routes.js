const CustomerController = require("../controller/customerController");
const RentOwnerController = require("../controller/carRentController");

module.exports = app => {
  app.post("/api/customer/register", CustomerController.registerCust);
  app.post("/api/carOwner/register", RentOwnerController.registerRent);
  app.post("/api/carOwner/addCar", RentOwnerController.addCar);
};
