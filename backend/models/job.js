const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  skills: [String],
  budget: String,
});

module.exports = mongoose.model('Job', JobSchema);
