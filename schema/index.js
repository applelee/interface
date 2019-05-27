const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports.userSchema = new Schema({
  name: {
    type: String,
    default: '无名之辈',
  },
  old: Number,
}, {
  // collection: 'temp',
})
