const mongoose = require('mongoose')
const { mongoDB_conf } = require('../../config')
const { protocol, host, port } = mongoDB_conf
const url = `${protocol}://${host}:${port}`

module.exports.userLogin = () => mongoose.createConnection(url, {
  user: 'kingapple',
  pass: 'lijia111927',
  dbName: 'admin',
})
