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

const clientsRouter = require('./routes/clients');
app.use('/clients', clientsRouter);

const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

const signup = require('./routes/signup');
app.use('/user/new', signup);

const login = require('./routes/login');
app.use('/login', login);



app.get('/', verifyToken, (req, res) => {     //this is a callback
  res.json({
    message: 'Welcome to the index page',
    resources: [{
      inspections: '/inspections'
    }]
  });
});


app.get('/user', (req, res) => {

  User.find({}, (err, user) => {
    res.json(user);
  })

});




app.get('/', (req, res) => {     //this is a callback
  res.json({
    resources: [{
      clients: '/clients'
    }]
  })
});



app.get('/', (req, res) => {     //this is a callback
  res.json({
    resources: [{
      clients: '/employees'
    }]
  })

});


//Verify token
function verifyToken(req, res, next){

    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      res.status(200).send(decoded);
    });

}


module.exports = app
