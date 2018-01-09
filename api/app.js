const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const User = require('./models/user')
//const authMiddleware = require('./middleware/auth');

// Create the app
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
   app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const inspectionsRouter = require('./routes/inspections');
app.use('/inspections', inspectionsRouter);


app.get('/', verifyToken, (req, res) => {     //this is a callback
  res.json({
    message: 'Welcome to the index page',
    resources: [{
      inspections: '/inspections'
    }]
  });
});



//Verify token
function verifyToken(req, res, next){
  // //Get auth value
  // const bearerHeader = req.headers['authorization'];
  // //Check if bearer is undefined
  // if (bearerHeader !== 'undefined'){
  //   const bearer = bearerHeader.split(' ');
  //   const bearerToken = bearer[1];
  //   req.token = bearerToken;
  //   // need to add here token verification
  //   //if jwt


    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      res.status(200).send(decoded);
    });


  //   next();
  // }
  // else {
  //   res.status(403).send({message: 'Forbidden'})
  // }
}






app.get('/user', (req, res) => {

  User.find({}, (err, user) => {
    res.json(user);
  })

});




app.post('/login', (req, res) => {
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




app.post('/register', (req, res) => {
  //var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  //const user = new User({

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
  //req.user = user;

});




module.exports = app
