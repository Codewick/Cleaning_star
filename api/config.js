require ('dotenv').config({path: '../.env'});

module.exports = {
  'secret' : process.env.SECRETKEY,
  'apiLink' : process.env.MONGO_URI
};
