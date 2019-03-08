const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const db = "mongodb+srv://hussein:hussein@meandb-fdkyf.mongodb.net/test?retryWrites=true"

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')
    }
});

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(registeredUser)
    }
  })
})

module.exports = router;
