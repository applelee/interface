const { baseConnection } = require('../connections')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const { user } = ctx.query
  const db = baseConnection(tokenInfo)
  const Admin = db.model('system.users', {})

  // await db.on('connected', () => {})

  // await Admin.remove({ user }, (err, res) => {
  //   if (err) {
  //     result = err
  //     return
  //   }
    
  //   console.log(res)
  // })

  ctx.body = result
}