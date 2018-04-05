const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const UsersAlerts = new Schema({
  uid: Number,
  tid: Number, 
  active: Boolean,
  update: Date,
  created: Date
})

module.exports = mongoose.model('UsersAlerts', UsersAlerts)