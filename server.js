// Server.js
// 
require('dotenv').config();
// Create an instance of the app
const app = require('./app');

const PORT = process.env.PORT || 9000;

// Make the app ready for listen to requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})