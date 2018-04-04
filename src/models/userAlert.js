const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const userAlert = new Schema({
  uid: Number,
  name: String,
  email: String
},{
  collection: 'userAlerts'
})

module.exports = mongoose.model('userAlert', userAlert)