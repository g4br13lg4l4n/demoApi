const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const Theme = require('./theme')


const Nodo = new Schema({
  nid: Number,
  url: String,
  title: String,
  image: String,
  sumary: String,
  aid: {type: Schema.Types.ObjectId, ref: 'Theme'}
})

module.exports = mongoose.model('nodo', Nodo)