const mongoose = require("mongoose");

const produtSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  brand: {
    require: true,
    type: String,
  },
  category: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  description: {
    require: true,
    type: String,
  },
  image: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("Product", produtSchema);
