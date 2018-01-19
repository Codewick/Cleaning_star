const mongoose = require('./base');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: { type: String, required: true }
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: true
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
