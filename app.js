// App.js

const express = require('express');

// Create an instance of the Express application
const app = express();

// ROUTES
// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running!' });
});

module.exports = app;