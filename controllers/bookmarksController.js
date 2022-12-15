const express = require('express')
const bookmarks = express.Router()
const bookmarksArray = require('../models/bookmark')

// GET ROUTE FOR /bookmarks (app.use in app.js handles the entry point for the controller)
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})

// SHOW ROUTE
bookmarks.get('/:index', (req, res) => {
    const { index } = req.params
    res.json(bookmarksArray[index])
})


module.exports = bookmarks;


