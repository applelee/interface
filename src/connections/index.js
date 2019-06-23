const mongoose = require('mongoose')
const { mongoDB_conf } = require('../../config')
const { protocol, host, port } = mongoDB_conf
const url = `${protocol}://${host}:${port}`

// exports.baseConnection = () => mongoose.createConnection(url, {
//   auth: {
//     authSource: 'admin',
//     user: 'kingapple',
//     password: 'lijia111927',
//   },
//   dbName: 'lijia',
//   useNewUrlParser: true,
// })

exports.baseConnection = (auth={}, dbName='admin') => mongoose.createConnection(url, {
  auth: {
    authSource: 'admin',
    ...auth,
  },
  dbName,
  useNewUrlParser: true,
})
