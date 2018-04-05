const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlertsGenerals = new Schema({
  tid: Number,
  created: Date,
  update: Date,
  vid: Number,
  actived: Boolean
})

module.exports = mongoose.model('AlertsGenerals', AlertsGenerals)