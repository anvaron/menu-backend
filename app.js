// app.js

// Import libraries
const express = require('express');
const cors = require('cors');

// Import data
const menu = require('./data/data.json');

// Create an instance of the Express application
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function
app.use(cors());

// ROUTES
// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running!' });
});

// /items returns an array of all the menu items
app.get('/items', (request, response) => {
  try {
    response.status(200).json({ data: menu });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// /items/:id returns an item with the given id
// or returns a 404 Error if the item is not found
app.get('/items/:id', (request, response) => {
  try {
    const { id } = request.params;
    const menuItem = data.find((item) => item.id === id);

    if (menuItem) {
      return response.status(200).json({ data: menuItem });
    }
    response
      .status(404)
      .json({ error: `Error, item not found with id: ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;