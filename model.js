const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  avatar: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  time: {
      type: Date,
      default:Date.now()
  }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;