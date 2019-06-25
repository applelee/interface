const jwt = require('jsonwebtoken')
const { baseConnection } = require('../connections')
const { withToken } = require('../../config')
const { secret, expiresIn } = withToken

module.exports = async ctx => {
  const { body } = ctx.request
  const db = baseConnection(body)
  let result = {}
  let data = {}

  await db.on('connected', err => {
    result = {
      code: 200,
      msg: '登陆成功！',
      token: jwt.sign(body, secret, { expiresIn }),
    }
  })

  data = await db.model('system.users', {}).find({})
  
  result = {
    ...result,
    userType: data.length > 0 ? 'admin' : 'user',
  }

  ctx.body = result
}