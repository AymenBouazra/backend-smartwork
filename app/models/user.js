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
 profile: {
  type: String,
  enum:['Superviseur','Normal']
 },
 businessUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessUnit' },
 preferences: {
   workLocation: { type: String, enum: ['remote', 'on-site', 'hybrid'] },
   defaultDays: [String], // e.g., ['monday', 'tuesday']
 }
},
{
 timestamps: true,
 versionKey: false,
});

module.exports = mongoose.model('User', userSchema);