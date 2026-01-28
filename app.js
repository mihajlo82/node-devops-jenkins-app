const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "dev";
const VERSION = process.env.APP_VERSION || "local";

app.get("/", (req, res) => {
  res.json({
    status: "okkggj33",
    env: ENV,
    version: VERSION
  });
});

app.get("/house", (req, res) => {
  res.json("<div><h1>HELLO img2244 FROM HOUSE</h1></div>")
})

app.get("/crazy", (req, res) => {
  res.end("<div><h1>HELLO CRAZYYYY</h1></div>")
})

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
