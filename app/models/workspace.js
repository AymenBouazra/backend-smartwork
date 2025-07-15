const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  name: String,
  location: String, // e.g., "2nd floor - Sector B"
  businessUnit: {type: mongoose.Schema.Types.ObjectId, ref:"BusinessUnit"},
  isMeetingRoom: { type: String, default: 'Non' },
  isAvailable: { type: String, default: 'Oui'}
}, { timestamps: true });

module.exports = mongoose.model('Workspace', workspaceSchema);