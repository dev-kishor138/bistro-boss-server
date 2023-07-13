const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bistro boss is running");
});

app.listen(port, () => {
  console.log(`bistro boss is running on port ${port}`);
});
