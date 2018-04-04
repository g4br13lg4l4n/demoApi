const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Vocabulary = new Schema({
  vid: Number,
  name: String,
  date_create:  Date,
  date_update: Date
})

module.exports = mongoose.model('vocabulary', Vocabulary)