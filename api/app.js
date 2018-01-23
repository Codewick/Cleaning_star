const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const User = require('./models/user')
const userHandlers = require('./routes/passwords.js');

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

const forgotPassword = require('./routes/passwords')
app.use('/forgot_password', forgotPassword);
//   .get(userHandlers.render_forgot_password_template)
//   .post(userHandlers.forgot_password);
//
// const resetPassword = require('./routes/passwords')
// app.use('/reset_password')
//   .get(userHandlers.render_reset_password_template)
//   .post(userHandlers.reset_password);



// TO-DO - potentially move into a router
// app.get('/user', (req, res) => {
//   User.find({}, (err, user) => {
//     res.json(user);
//   })
// });

module.exports = app;
