const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

  title: {
    type: String,
    minlength: 5,
    maxlength: 79,
    required: true,
  },
  description: {
    type: String,
    minlength: 16,
    maxlength: 599
  },
  maxNumberOfStudents: {
    type: Number,
    min: 1,
    max: 50,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: 'Must have start date - default value is the created date',
  },

  end: {
    type: Date,
    required: 'Must have end date - default value is the created date + 1 week'
  },
});

module.exports = mongoose.model('students', studentSchema);