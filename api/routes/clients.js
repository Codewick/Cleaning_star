const express = require('express');
const Inspection = require('../models/inspection');
const Client = require('../models/client');
const Employee = require('../models/employee');

const router = express.Router();

const authorize = (req, res, next) => {
  next(); return;
  if (req.user) {
    next();
  } else {
    res.status(403).end();
  }
}

router.get('/', authorize, (req, res) => {

  Client.find()
    .populate('inspection')
    .then(clients => res.json(clients))
    .catch(error => res.json({ error }))
});

router.post('/', (req, res) => {
  Client.create(req.body)
    .then((client) => {
      res.status(201).json(client).end();
    })
    .catch(error => res.json({ error }))
});

/* DELETE client */
router.delete('/:id', function(req, res, next) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, client) {
    if (err) return next(err);
    res.json(client);
  });
});

module.exports = router;
