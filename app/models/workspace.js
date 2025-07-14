const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  number: String,
  location: String, // e.g., "2nd floor - Sector B"
  businessUnit: String,
  isMeetingRoom: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Workspace', workspaceSchema);