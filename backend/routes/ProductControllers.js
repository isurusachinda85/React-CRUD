const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("image");
console.log(upload);

router.post("/", upload, async (req, res) => {
  try {
    const productData = req.body;
    console.log(productData);
    if (req.file) {
      productData.image = req.file.path;
    }
    const product = await Product.create(productData);
    res.status(201).json({ massage: "Save Product" });
  } catch (error) {
    res.status(500).json({ error: "Duplicate Id plese enter new Id !" });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong !" });
  }
});
module.exports = router;
