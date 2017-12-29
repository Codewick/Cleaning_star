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

  Inspection.find()
    .populate('worker')
    .then(inspections => res.json(inspections))
    .catch(error => res.json({ error }))
});

router.post('/', (req, res) => {
  Inspection.create(req.body)
    .then((inspection) => {
      res.status(201).json(inspection).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = router;
