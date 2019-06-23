const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    default: '无名之辈',
  },
  old: Number,
}, { collection: 'apple' })

// find 的中间件
// userSchema.pre('save', next => {
//   console.log('preeeeeeee')
//   next();
// })
// userSchema.post('save', (doc, next) => {
//   console.log(doc)
//   console.log('posttttttt')
//   next();
// })

module.exports.userSchema = userSchema
