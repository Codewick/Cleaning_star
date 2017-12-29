const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/inspections', { useMongoClient: true });

module.exports = mongoose;
