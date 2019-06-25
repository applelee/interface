const jwt = require('jsonwebtoken')
const { baseConnection } = require('../connections')
const { withToken } = require('../../config')
const { secret, expiresIn } = withToken

module.exports = async ctx => {
  const { body } = ctx.request
  const db = baseConnection(body)
  let result = {}

  await db.on('connected', err => {
    if (err) {
      result = err
      return
    }

    result = {
      code: 200,
      msg: '登陆成功！',
      token: jwt.sign(body, secret, { expiresIn }),
    }
  })

  await db.model('system.users', {}).find({}, (err, res) => {
    result = {
      ...result,
      userType: res.length > 0 ? 'admin' : 'user',
    }
  })

  ctx.body = result
}