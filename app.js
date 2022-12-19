const express = require("express");
const app = express();
const morgan = require("morgan");
// const bookmarks = require("./controllers/bookmarksController");
const bookmarksController = require("./controllers/bookmarksController");

app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.use(express.json());
app.use(morgan("tiny"));
app.use("/bookmarks", bookmarksController);

app.get("/", (req, res) => {
  res.send("Welcome to the Bookmarks App");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
