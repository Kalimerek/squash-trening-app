const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  skills: [String],
  shots: [String],
  numberOfPlayers: [Number]
});

module.exports = mongoose.model('Exercise', exerciseSchema);
