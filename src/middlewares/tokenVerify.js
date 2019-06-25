const jwt = require('jsonwebtoken')
const { withToken } = require('../../config')
const { secret } = withToken

module.exports = async (ctx, next) => {
  const token = ctx.get('Authorization')
  const userLogin = '/user/login'

  if (ctx.url.indexOf(userLogin) < 0 && token) {
    // ctx.throw(402)
    // return

    try {
      ctx.tokenInfo = jwt.verify(token, secret)
    }
    catch (e) {
      ctx.throw(402)
      return
    }
  }

  await next()
}