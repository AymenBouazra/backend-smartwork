const mongoose = require('mongoose');

const BusinessUnitSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  default: '',
 },
},
{
 timestamps: true,
 versionKey: false,
});

module.exports = mongoose.model('BusinessUnit', BusinessUnitSchema);