const express = require("express");
const app = express();
const cors = require("cors");
const main = require("./main.js");

app.use(express.json());
app.use(cors());

app.all("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api", main);

let port = 5000;

app.listen((PORT = process.env.PORT || port));
console.log("server started...");
