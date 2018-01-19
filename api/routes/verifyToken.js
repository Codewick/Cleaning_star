const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      res.status(200).send(decoded);
    });
}

module.exports = verifyToken;
