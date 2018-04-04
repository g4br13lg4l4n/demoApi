const mongoose = require('mongoose')
const User = require('./userAlert')
const Vocabulary = require('./Vocabulary')
const Nodo = require('./nodo')
const Schema = mongoose.Schema 

const Theme = new Schema({
  aid: String,
  name_site: String,
  url: String,
  nodo: {type: Schema.Types.ObjectId, ref: 'nodo'},
  user: {type: Schema.Types.ObjectId, ref: 'userAlert'},
  vid: {type: Schema.Types.ObjectId, ref: 'vocabulary'}
})

module.exports = mongoose.model('Theme', Theme)