const express = require('express');
const Inspection = require('../models/inspection');
const Client = require('../models/client');
const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verifyToken = require('./verifyToken');
const router = express.Router();

// const authorize = (req, res, next) => {
//   next(); return;
//   if (req.user) {
//     next();
//   } else {
//     res.status(403).end();
//   }
// }

// GET http://localhost:7000/inspections
router.get('/', verifyToken, (req, res) => {
  Inspection.find()
    .populate('worker')
    .then(inspections => res.json(inspections))
    .catch(error => res.json({ error }))
});

// POST http://localhost:7000/inspections
router.post('/', (req, res) => {
  console.log(`request received at inspections/ endpoint ${res.body}`);
  Inspection.create(req.body)
    .then((inspection) => {
      console.log(`inspection created ${inspection}`);
      res.status(201).json(inspection).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = router;
