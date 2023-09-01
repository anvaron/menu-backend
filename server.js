// Server.js

// Get environment variables
require('dotenv').config();

// Import the application
const app = require('./app');

// Variable PORT takes the environment configuration
// If there's not port configurated, it takes 9000 as the port by default.
const PORT = process.env.PORT || 9000;

// The app.listen() function is used to bind and listen to the connections 
// on the specified host and port.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})