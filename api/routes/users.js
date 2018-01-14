const express = require('express');


const router = express.Router();



router.post('/register', (req, res) => {

  User.create({

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password //hashedPassword
  },
    (err,user) => {
      console.log(`err, user: `, err, user)

      if(err) return res.status(500).send("There was a problem registering the user.")

      res.json({
        message: "User succesfully created.",
        id:user._id,
        email: user.email
      });
  });
});


module.exports = router;
