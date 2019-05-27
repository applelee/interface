const mongoose = require('mongoose');
const { mongoDB_conf } = require('../config')
const { protocol, host, port, database, user, pass } = mongoDB_conf
const url = `${protocol}://${host}:${port}/${database}`

module.exports.connection = () => mongoose.createConnection(url, {
  user,
  pass,
  useNewUrlParser:true,
})

module.exports.connection2 = () => mongoose.connect(url, {
  user,
  pass,
  useNewUrlParser:true,
})
