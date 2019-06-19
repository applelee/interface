const router = require('koa-router')()
const mongoose = require('mongoose')
const { Schema } = mongoose
const { baseUrl } = require('../config')
const { api } = baseUrl
const { userLogin } = require('../mongo')
const { userSchema } = require('../schema')

router.get(`${api}/user/login`, async (ctx, next) => {
  const db = userLogin()
  let result = ''

  await db.on('connected', err => {
    if (err) {
      console.log('链接失败！')
      result = '链接失败！'
    }
    else {
      console.log('链接成功！')
      result = '链接成功！'
    }
  })

  const User = new Schema({})

  await db.model('system.users', User).find({}, (err, res) => {
    result = res
  })

  // await db.system.users.find().then(res => {
  //   console.timeLog('res')
  // })

  ctx.body = result
})

// router.get(`${apiBaseUrl}/`, async (ctx, next) => {
//   let result = ''
//   const db = connection()
//   const User = db.model('lijias', userSchema)
//   const userModel = new User({
//     name: '果王',
//     old: Math.round(Math.random()*100),
//   })

//   await db.on('connected', (err, res) => {
//     if (err) {
//       console.log('链接失败！')
//       result = '链接失败！'
//     }
//     else {
//       console.log('链接成功！')
//       result = '连接成功！'

//       userModel.save((err, res) => {
//         console.log(err)
//         console.log(res)

//         // User.find({name: '果王'}, 'name', (err, res) => {
//         //   console.log(err)
//         //   console.log(res)
//         // })
//       })
//     }
//   })

//   ctx.body = result
// })

// router.get('/connection2', async (ctx, next) => {
//   let result = '';
//   const User = mongoose.model('lijias', userSchema)
//   const userModel = new User({
//     name: '果王',
//     old: Math.round(Math.random()*100),
//   })

//   connection2();

//   await mongoose.connection.on('connected', (err, res) => {
//     if (err) {
//       console.log('链接失败！')
//       result = '链接失败！'
//     }
//     else {
//       console.log('链接成功！')
//       result = '连接成功！'

//       userModel.save((err, res) => {
//         console.log(err)
//         console.log(res)

//         User.find({name: '果王'}, (err, res) => {
//           console.log(err)
//           console.log(res.length)
//         })
//       })
//     }
//   })

//   ctx.body = result
// })

module.exports = router
