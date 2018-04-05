const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Alert = new Schema({
  tid: String,
  created: Date,
  update: Date,
  actived: Boolean,
  site_name: String
})

module.exports = mongoose.model('Alert', Alert)