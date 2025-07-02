const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 firstname: {
  type: String,
  required: true,
 },
 lastname: {
  type: String,
  required: true,
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
 role: {
  type: String,
  required: true,
  default: 'Employee',
  enum: ['Manager', 'Employee'],
 },
},
{
 timestamps: true,
 versionKey: false,
});

module.exports = mongoose.model('User', userSchema);