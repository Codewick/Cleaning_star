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

// TODO - potentially move into a router
app.get('/user', (req, res) => {
  User.find({}, (err, user) => {
    res.json(user);
  })
});

module.exports = app;
