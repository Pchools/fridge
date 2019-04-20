const mongoose = require("mongoose");

let User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    //To be encripted
    type: String,
    required: true
  }
});

var userModel = mongoose.model('User', User);
module.exports = userModel;
