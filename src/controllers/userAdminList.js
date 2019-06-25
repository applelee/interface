const { baseConnection } = require('../connections')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const db = baseConnection(tokenInfo)
  const Admin = db.model('system.users', {})

  await db.on('connected', () => {})

  await Admin.find({}, (err, res) => {
    if (err) {
      result = err
      return
    }
    
    result = {
      code: 200,
      msg: '成功。',
      data: res,
    }
  })

  ctx.body = result
}