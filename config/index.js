exports.mongoDB_conf = {
  protocol: 'mongodb',
  host: '127.0.0.1',
  port: 27000,
}

exports.baseUrl = {
  apiUrl: '/api/v1',
}

exports.withToken = {
  expiresIn: 7200,
  secret: '凌云记',
}