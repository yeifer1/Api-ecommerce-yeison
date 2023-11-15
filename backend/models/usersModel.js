const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Otros campos de usuario, como nombre, apellido, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;