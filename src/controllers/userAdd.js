const { baseConnection } = require('../connections')
const { userSchema } = require('../schema')

module.exports = async ctx => {
  let result = {}
  const { tokenInfo } = ctx
  const db = baseConnection(tokenInfo)
  // 切换数据库
  const lijia = db.useDb('lijia')
  // const db = baseConnection({
  //   user: tokenInfo.user,
  //   password: tokenInfo.password,
  //   authSource: 'admin',
  // }, 'lijia')
  const User = lijia.model('apple', userSchema)
  const userModel = new User({
    name: 'small red hat',
    old: Math.round(Math.random()*100),
  })

  // lijia.dropCollection('temp')

  await lijia.on('connected', err => {
    if (err) {
      result = err
      return
    }

    // console.log('链接成功！')
    userModel.save((err, res) => {
      console.log('++++++++++++++', res)
    })
  })

  await User.find({}, (err, res) => {
    console.log('=============', res)
  })
  // await db.createUser({
  //   user: 'admin1',
  //   pwd: '123456',
  //   db: 'admin',
  //   roles: [{
  //     role: 'dbAdminAnyDatabase',
  //     db: 'admin',
  //   }],
  // })

  // await db.model('system.users', {}).insert(tokenInfo, (err, res) => {
  //   if (err) {
  //     result = err
  //     return
  //   }

  //   console.log(res)
    
  //   result = {
  //     code: 200,
  //     msg: '成功。',
  //     data: res,
  //   }
  // })

  ctx.body = result
}