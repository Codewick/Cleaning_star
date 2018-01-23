const express = require('express');
const User = require('../models/user');
const verifyToken = require('./verifyToken');

const router = express.Router();



//New user
// Registers a user and returns the user that was created as hash.
// Note that token generation only occurs when the user performs login (not registration)
// localhost:7000/register
router.post('/', verifyToken, (req, res) => {

  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password //hashedPassword
  },
  (err,user) => {
         console.log(`error (if any): `, err)
         console.log(`user: `, user)

    if(err) return res.status(500).send("There was a problem registering the user.")

    res.json({
      message: "User succesfully created.",
      id:user._id,
      email: user.email
    });
  });
});





module.exports = router;
