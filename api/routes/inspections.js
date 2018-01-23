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
  console.log(`request received at inspections/ endpoint ${res.body}`);
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
