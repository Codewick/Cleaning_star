require ('dotenv').config({path: '../.env'});

module.exports = {
  'secret' : process.env.SECRETKEY
};

module.exports = {
  'DBsecret' : process.env.DB_SECRET_KEY
};
