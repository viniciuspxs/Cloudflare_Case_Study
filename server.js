const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  return res.send(req.headers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
