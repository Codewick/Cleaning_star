
const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// create a schema
const inspectionSchema = Schema({
  client: { type: ObjectId, ref: 'Client' },
  date: Date,
  frequency: Number,
  auditor: String,
  comments: String,
  date: Date,
  employee: { type: ObjectId, ref: 'Employee'}
});

// convert schema into Model, instances of models(classes) are documents
const Inspection = mongoose.models.inspection || mongoose.model('Inspection', inspectionSchema);

module.exports = Inspection;
