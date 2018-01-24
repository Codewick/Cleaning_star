
const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const clientSchema = Schema({
  name: String,
  address: String,
  contact_number: String,
  e_mail: String,
  contact_person: String,
  inspections: [{ type: ObjectId, ref: 'Inspection'}]
});

const Client = mongoose.models.client || mongoose.model('Client', clientSchema);

module.exports = Client;
