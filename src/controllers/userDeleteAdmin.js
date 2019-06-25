const { baseConnection } = require('../connections')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const { user } = ctx.query
  const db = baseConnection(tokenInfo)
  const Admin = db.model('system.users', {})

  await db.on('connected', () => {})
  
  result = await Admin.remove({ user })

  ctx.body = result
}