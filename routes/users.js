const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register route
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({succes: true, msg:'User register'});
    }
  })
});

//Authenticate route
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

//Profile route
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
