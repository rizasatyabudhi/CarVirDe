const Customer = require("../models/customer");

module.exports = {
  register(req, res, next) {
    const customerProps = req.body;
    Customer.create(customerProps)
      .then(customer => res.send("register success"))
      .catch(next);
  }
};
