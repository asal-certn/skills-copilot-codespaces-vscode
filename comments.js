// Create web server application
const express = require('express');
const app = express();
const port = 3000;

// Import comments module
const comments = require('./comments.js');

// Set up the application to handle HTTP POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Set up the application to serve static files
app.use(express.static('public'));

// Set up the application to use EJS view engine
app.set('view engine', 'ejs');

// Set up the application to use the comments module
app.use(comments);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));