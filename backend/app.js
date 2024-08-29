const express = require("express");
const customer = require("./routes/CustomerControllers");
const product = require("./routes/ProductControllers");
const cors = require("cors");

const mongoose = require("mongoose");

const url =
  "mongodb+srv://isurusachintha8:W0etDARrbzxdXAMb@cluster0.hjsivra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url);

const con = mongoose.connection;

con.on("open", () => {
  console.log("Mongodb Connected!");
});

const app = express();

const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/customer", customer);
app.use("/product", product);

app.listen(port, (req, res) => {
  console.log(`express app listening on port ${port}`);
});
