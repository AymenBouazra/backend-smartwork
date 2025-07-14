const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  type: { type: String, enum: ['remote', 'on-site'], required: true },
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: false },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);