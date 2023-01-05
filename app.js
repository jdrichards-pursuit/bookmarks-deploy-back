const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
// const bookmarks = require("./controllers/bookmarksController");
const bookmarksController = require("./controllers/bookmarksController");

//Middleware
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.use(cors());
// express.json() relates specifically to POST routes
app.use(express.json());

// morgan displays
app.use(morgan("tiny"));
app.use("/bookmarks", bookmarksController);

app.get("/", (req, res) => {
  res.send("Welcome to the Bookmarks App");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
