const express = require('express');
const Inspection = require('../models/inspection');
const Client = require('../models/client');
const Employee = require('../models/employee');
const verifyToken = require('./verifyToken');

const router = express.Router();

// GET http://localhost:7000/employees
router.get('/', verifyToken, (req, res) => {
  Employee.find()
    .populate('employee')
    .then(employees => res.json(employees))
    .catch(error => res.json({ error }))
});

// POST http://localhost:7000/employees
router.post('/',verifyToken, (req, res) => {
  Employee.create(req.body)
    .then((employee) => {
      res.status(201).json(employee).end();
    })
    .catch(error => res.json({ error }))
});

router.delete('/:id', function(req, res, next) {
  Employee.findByIdAndRemove(req.params.id, req.body, function (err, employee) {
    if (err) return next(err);
    res.json(employee);
  });
});

module.exports = router;
