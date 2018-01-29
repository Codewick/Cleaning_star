const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

function verifyToken(req, res, next){
    // console.log('in verify token with req.headers: ', req.headers);
    // console.log('in verify token with: ', req.body.token, req.query.token, req.headers['x-access-token']);
    // let token = req.body.token || req.query.token || req.headers['x-access-token'];
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : undefined;
    console.log('in verify token with token: ', token);
    // console.log('is not token: ', !token);
    if (token === undefined) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, supersecret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({
          message: 'Error: Token invalid'
        });
        console.error('Error: Token invalid: ', error);
        next(error);
        return;
        // return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      } else {
        req.user = decodedToken;

        User.find({ email: decodedToken.email })
          .then((user) => {
            if (user) {
              console.log('Success authorising user with middleware: ', decodedToken);
              next();
            } else {
              res.status(403).json({
                message: 'Error: Token valid but user no longer exists in database'
              });
              console.error('Error: Token valid but user no longer exists in database: ', error);
              next(error);
              return;
            }
          })
          .catch((error) => {
            res.status(500).json({
              message: 'Error: Token valid but error occurred retrieving user from database'
            });
            console.error('Error: Token valid but error occurred retrieving user from database: ', error);
            next(error);
            return;
          })
      }

      // res.status(200).send(decoded);
    });
}

module.exports = verifyToken;
