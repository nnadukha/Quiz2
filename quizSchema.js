const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  sid: String,
  name: String
});

module.exports = mongoose.model('ExamRecords', quizSchema);