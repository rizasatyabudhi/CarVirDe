const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CarVirDe");

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
