const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;
const config = require('../config');

mongoose.connect('mongodb://star:star@ds111598.mlab.com:11598/cleaning_star', { useMongoClient: true });

module.exports = mongoose;
