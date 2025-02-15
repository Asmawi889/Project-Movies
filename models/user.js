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
  email : {
    type: String,
    required: false,
  },
  favList : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
