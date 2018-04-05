const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Vocabulary = new Schema({
  vid: Number,
  name: String,
  create:  Date,
  update: Date
})

module.exports = mongoose.model('vocabulary', Vocabulary)