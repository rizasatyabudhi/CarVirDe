const Customer = require("../models/customer");
const Car = require("../models/car");

module.exports = {
  registerCust(req, res, next) {
    const customerProps = req.body;
    Customer.create(customerProps)
      .then(customer => res.send("register success"))
      .catch(next);
  }
};
