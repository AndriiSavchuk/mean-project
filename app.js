const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

//Path for Routes
const users = require('./routes/users');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());

//Using Path to users files
app.use('/users', users);

//Route to the home page
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//Start Server Function
app.listen(port, () => {
  console.log('Server works on port: ' + port);
});
