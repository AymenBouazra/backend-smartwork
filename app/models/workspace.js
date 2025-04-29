const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  required: true,
 },
},
{
 timestamps: true,
 versionKey: false,
});

module.exports = mongoose.model('Workspace', workspaceSchema);