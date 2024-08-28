const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const productData = req.body;
    console.log(productData);
    const product = await Product.create(productData);
    res.status(201).json({ massage: "Save Product" });
  } catch (error) {
    res.status(500).json({ error: "Duplicate Id plese enter new Id !" });
  }
});

module.exports = router;
