const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user')
const config = require('../config');
const router = express.Router();





  //
  // path = require('path'),
  // async = require('async'),
  // crypto = require('crypto'),
  // _ = require('lodash'),
  // hbs = require('nodemailer-express-handlebars'),
  // email = process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com',
  // pass = process.env.MAILER_PASSWORD || 'auth_email_pass',
  // nodemailer = require('nodemailer');

//
// var smtpTransport = nodemailer.createTransport({
//   service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
//   auth: {
//     user: email,
//     pass: pass
//   }
// });
//
//
// var handlebarsOptions = {
//   viewEngine: 'handlebars',
//   viewPath: path.resolve('./api/templates/'),
//   extName: '.html'
// };
//
// smtpTransport.use('compile', hbs(handlebarsOptions));
//
//
// exports.render_forgot_password_template = function(req, res) {
//   return res.sendFile(path.resolve('./public/forgot-password.html'));
// };
//
// exports.render_reset_password_template = function(req, res) {
//   return res.sendFile(path.resolve('./public/reset-password.html'));
// };


//FORGOT PASSWORD
//exports.forgot_password = function(req, res)
router.post('/', (req, res) => {
    console.log(`receiving req.body from the frontend: `, req.body);

    User.find({
      email: req.body.email
    },
      (err,users) => {
        console.log(`This returns a user in an array. login err, users: `, err, users)
        user = users[0];
        console.log(`This is a user extracted from the previous array. login err, user: `, err, user)

        if(err) return res.status(500).send("There was a problem to find the user.")

        res.json({
          message: "User found.",
          id:user._id,
          email: user.email
        });
    });
  })
  //   function(user, done) {
  //     // create the random token
  //     crypto.randomBytes(20, function(err, buffer) {
  //       var token = buffer.toString('hex');
  //       done(err, user, token);
  //     });
  //   },
  //   function(user, token, done) {
  //     User.findByIdAndUpdate({ _id: user._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
  //       done(err, token, new_user);
  //     });
  //   },
  //   function(token, user, done) {
  //     var data = {
  //       to: user.email,
  //       from: email,
  //       template: 'forgot-password-email',
  //       subject: 'Password help has arrived!',
  //       context: {
  //         url: 'http://localhost:3000/auth/reset_password?token=' + token,
  //         name: user.fullName.split(' ')[0]
  //       }
  //     };
  //
  //     smtpTransport.sendMail(data, function(err) {
  //       if (!err) {
  //         return res.json({ message: 'Kindly check your email for further instructions' });
  //       } else {
  //         return done(err);
  //       }
  //     });
  //   }
  // ], function(err) {
  //   return res.status(422).json({ message: err });
  // });
//};


//
//
// // RESET PASSWORD
// exports.reset_password = function(req, res, next) {
//   User.findOne({
//     reset_password_token: req.body.token,
//     reset_password_expires: {
//       $gt: Date.now()
//     }
//   }).exec(function(err, user) {
//     if (!err && user) {
//       if (req.body.newPassword === req.body.verifyPassword) {
//         user.hash_password = bcrypt.hashSync(req.body.newPassword, 10);
//         user.reset_password_token = undefined;
//         user.reset_password_expires = undefined;
//         user.save(function(err) {
//           if (err) {
//             return res.status(422).send({
//               message: err
//             });
//           } else {
//             var data = {
//               to: user.email,
//               from: email,
//               template: 'reset-password-email',
//               subject: 'Password Reset Confirmation',
//               context: {
//                 name: user.fullName.split(' ')[0]
//               }
//             };
//
//             smtpTransport.sendMail(data, function(err) {
//               if (!err) {
//                 return res.json({ message: 'Password reset' });
//               } else {
//                 return done(err);
//               }
//             });
//           }
//         });
//       } else {
//         return res.status(422).send({
//           message: 'Passwords do not match'
//         });
//       }
//     } else {
//       return res.status(400).send({
//         message: 'Password reset token is invalid or has expired.'
//       });
//     }
//   });
// };

module.exports = router;
