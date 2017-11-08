const CustomerController = require("../controller/customerController");

module.exports = app => {
  app.post("/api/register", CustomerController.register);
};
