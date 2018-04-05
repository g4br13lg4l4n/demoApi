const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Nodos = new Schema({
  nid: Number,
  url: String,
  title: String,
  images: Object,
  sumary: String,
  tid: Number,
})

module.exports = mongoose.model('Nodos', Nodos)