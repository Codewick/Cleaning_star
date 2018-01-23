const express = require('express');
const Inspection = require('../models/inspection');
const Client = require('../models/client');
const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verifyToken = require('./verifyToken');
const router = express.Router();



// GET http://localhost:7000/inspections
router.get('/', verifyToken, (req, res) => {
  console.log(`request received at inspections GET endpoint ${res.body}`);
  Inspection.find()
    .populate('worker')
    .then(inspections => {
      console.log('found inspections: ', inspections);
      return res.json(inspections);
    })
    .catch(error => res.json({ error }))
});

// POST http://localhost:7000/inspections
router.post('/', verifyToken, (req, res) => {
  console.log(`request received at inspections POST endpoint ${res.body}`);
  Inspection.create(req.body)
    .then((inspection) => {
      console.log(`inspection created ${inspection}`);
      res.status(201).json(inspection).end();
    })
    .catch(error => res.json({ error }))
});

/* GET SINGLE Inspection BY ID */
router.get('/:id', function(req, res, next) {
  Inspection.findById(req.params.id, function (err, inspection) {
    if (err) return next(err);
    res.json(inspection);
  });
});

/* UPDATE Inspection */
router.put('/:id', function(req, res, next) {
  Inspection.findByIdAndUpdate(req.params.id, req.body, function (err, inspection) {
    if (err) return next(err);
    res.json(inspection);
  });
});

/* DELETE Inspection */
router.delete('/:id', function(req, res, next) {
  Inspection.findByIdAndRemove(req.params.id, req.body, function (err, inspection) {
    if (err) return next(err);
    res.json(inspection);
  });
});


module.exports = router;
