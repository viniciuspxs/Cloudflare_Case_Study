const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  return res.send(req.headers);
});

app.get("/dns", async (_req, res) => {
  const response = await axios.get("https://api.cloudflare.com/client/v4/zones/9508cc421c336e992591f889278d04a1/dns_records", {
    headers: {
      Authorization: "Bearer 7m6YaOpaCOWcRyTgxqUjj-lHDY6ha8dAWvcTpg5V",
      "Content-Type": "application/json",
    }
  });
  return res.send(response.data);
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
