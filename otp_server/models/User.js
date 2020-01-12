const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  email: {
    type: String
  },
  code: {
    type: Number
  },
  codeValid: {
    type: Boolean,
    default: true
  }
});

userSchema.methods.generateAuthToken = function() {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
