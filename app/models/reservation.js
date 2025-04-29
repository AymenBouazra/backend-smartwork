const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true,
 },
 workspace: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Workspace',
  required: true,
 },
 start: {
  type: Date,
  required: true,
 },
 end: {
  type: Date,
  required: true,
 },
}, 
{ 
 timestamps: true ,
 versionKey: false,
});

module.exports = mongoose.model('Reservation', reservationSchema);
