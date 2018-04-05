const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Vocabulary = new Schema({
  vid: Number,
  name: String,
  create:  Date,
  sitename: String,
  update: Date
})

module.exports = mongoose.model('Vocabulary', Vocabulary)