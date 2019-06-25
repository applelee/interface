const { baseConnection } = require('../connections')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const db = baseConnection(tokenInfo)

  await db.on('connected', err => {
    if (err) {
      result = err
      return
    }
  })

  await db.model('system.users', {}).find({}, (err, res) => {
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