const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  wallet: String,
  skills: [String],
});

module.exports = mongoose.model('Profile', ProfileSchema);
