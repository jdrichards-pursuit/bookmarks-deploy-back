const express = require("express");
const bookmarks = express.Router();
const { validateURL } = require("../models/validations");
const bookmarksArray = require("../models/bookmark");

bookmarks.use((req, res, next) => {
  console.log("This middleware runs for EVERY bookmark route");
  next();
});

// GET ROUTE FOR /bookmarks (app.use in app.js handles the entry point for the controller)
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

// /bookmarks endpoint for POST
bookmarks.post("/", validateURL, (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray.at(-1));
});

// SHOW ROUTE
bookmarks.get("/:index", (req, res) => {
  const { index } = req.params;
  if (bookmarksArray[index]) {
    res.status(200).json(bookmarksArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = bookmarks;
