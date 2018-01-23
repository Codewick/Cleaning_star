const express = require('express');
const Inspection = require('../models/inspection');
const Client = require('../models/client');
const Employee = require('../models/employee');
const verifyToken = require('./verifyToken');

const router = express.Router();

// GET http://localhost:7000/clients
router.get('/', verifyToken, (req, res) => {

  Client.find()
    .populate('inspection')
    .then(clients => res.json(clients))
    .catch(error => res.json({ error }))
});

// POST http://localhost:7000/clients
router.post('/', verifyToken, (req, res) => {
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
