const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// Error
mongoose.connection.on('error', () => {
  console.log('Database error ' + config.database);
});

const app = express();

// Path for Routes
const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Using Path to users files
app.use('/users', users);

// Route to the home page
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get((req, res) => {
  res.send(path.join(__dirname, 'public/index.html'));
});

// Start Server Function
app.listen(port, () => {
  console.log('Server works on port: ' + port);
});
