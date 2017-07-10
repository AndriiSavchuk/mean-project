const express = require('express');
const router = express.Router();

//Register route
router.post('/register', (req, res, next) => {
  res.send('REGISTER');
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
