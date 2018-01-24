const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;
const config = require('../config');

mongoose.connect(config.apiLink, { useMongoClient: true });

module.exports = mongoose;
