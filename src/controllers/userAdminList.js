const { baseConnection } = require('../connections')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const db = baseConnection(tokenInfo)
  const Admin = db.model('system.users', {})

  await db.on('connected', () => {})

  result = await Admin.find({})
  result = {
    code: 200,
    msg: '成功。',
    data: result,
  }

  ctx.body = result
}