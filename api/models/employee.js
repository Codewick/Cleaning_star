const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const employeeSchema = Schema({
  name: String,
  contact_number: Number,
  inspections: [{ type: ObjectId, ref: 'Inspection'}]
});

const Employee = mongoose.models.employee || mongoose.model('Employee', employeeSchema);

module.exports = Employee;
