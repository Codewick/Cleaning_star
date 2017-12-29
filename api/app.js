const express = require('express');
const bodyParser = require('body-parser');
//const authMiddleware = require('./middleware/auth');

// Create the app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const inspectionsRouter = require('./routes/inspections');
app.use('/inspections', inspectionsRouter);


app.get('/', (req, res) => {     //this is a callback
  res.json({
    resources: [{
      inspections: '/inspections'
    }]
  })
});

module.exports = app
