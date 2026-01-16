const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Node.js app running in Docker like real DevOps 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
