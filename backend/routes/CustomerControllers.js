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

router.post("/", async (req, res) => {
  try {
    const cusData = req.body;
    const customer = await Customer.create(cusData);
    res.status(201).json({ massage: "Save Customer" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong !" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cusId = req.params.id;
    const customer = await Customer.find({ id: cusId });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong !" });
  }
});

module.exports = router;
