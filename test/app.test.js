const request = require("supertest");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

describe("Health endpoint", () => {
  it("returns 200", async () => {
    await request(app).get("/health").expect(200);
  });
});
