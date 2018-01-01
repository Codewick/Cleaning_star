const express = require('express');
const bodyParser = require('body-parser');
//const authMiddleware = require('./middleware/auth');

// Create the app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const inspectionsRouter = require('./routes/inspections');
app.use('/inspections', inspectionsRouter);

const clientsRouter = require('./routes/clients');
app.use('/clients', clientsRouter);

const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

app.get('/', (req, res) => {     //this is a callback
  res.json({
    resources: [{
      inspections: '/inspections'
    }]
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



module.exports = app
