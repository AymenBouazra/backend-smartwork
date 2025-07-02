const mongoose = require('mongoose');

const InvitationSchema = new mongoose.Schema({
 email: {
  type: String,
  required: true,
 },
 registered: {
  type: Boolean,
  default: false,
 },
},
{
 timestamps: true,
 versionKey: false,
});

module.exports = mongoose.model('Invitation', InvitationSchema);