const express = require("express");
const customer = require("./routes/CustomerControllers");

const app = express();

const port = 4000;

app.use(express.json());

app.use("/customer", customer);

app.listen(port, (req, res) => {
  console.log(`express app listening on port ${port}`);
});
