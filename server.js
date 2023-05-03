const express = require("express");
const colors = require("colors");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to honda",
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
