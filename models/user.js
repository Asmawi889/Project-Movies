const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Email : {
    type: String,
    required: false,
  },
  FavList : [{
    type: String,
    required: false,
  }]
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
