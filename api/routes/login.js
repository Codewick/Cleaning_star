const express = require('express');
const User = require('../models/user');

const router = express.Router();



//Log In
router.post('/', (req, res) => {
    console.log(`logging in with req.body: `, req.body);

    User.find({
      email: req.body.email
    },
      (err,users) => {
        console.log(`login err, users: `, err, users)
        user = users[0];
        console.log(`login err, user: `, err, user)

        if(err) return res.status(500).send("There was a problem logging in the user.")

        //create a token   //config.secret
        jwt.sign ({email: user.email, id: user._id}, config.secret, (err, token) => {
          console.log(`jwt sign err, token: `, err, token)

          res.status(200).send ({
            auth: true,
            token: token
          });
          //expiresIn: 86400 //expires in 24 hrs
        });
    });

});

module.exports = router;
