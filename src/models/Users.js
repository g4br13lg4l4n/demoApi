const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Users = new Schema({
  username: String,
  email: String,
  uid: Number,
  created: Date,
  update: Date
})

module.exports = mongoose.model('Users', Users)