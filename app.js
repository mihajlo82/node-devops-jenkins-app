const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "dev";
const VERSION = process.env.APP_VERSION || "local";

app.get("/", (req, res) => {
  res.json({
    status: "okkgg",
    env: ENV,
    version: VERSION
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
