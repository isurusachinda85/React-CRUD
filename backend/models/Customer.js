const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String,
    unique: true,
    index: true,
  },
  name: {
    require: true,
    type: String,
  },
  address: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
