const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong !" });
  }
});

module.exports = router;
