const router = require('koa-router')()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const { Schema } = mongoose
const { baseUrl, mongoDB_conf } = require('../../config')
const { apiUrl } = baseUrl
const { userLogin } = require('../connections')
const { protocol, host, port } = mongoDB_conf
const url = `${protocol}://${host}:${port}`
const secret = 'lijia111927'
const token = jwt.sign({
  user: 'lijia',
  pwd: '123456',
}, secret, {expiresIn: 1})
const decode = jwt.decode(token, secret)

router.post(`${apiUrl}/user/login`, async (ctx, next) => {
  const db = userLogin()
  let result = ''

  console.log(ctx.request.body)

  await db.on('connected', err => {
    if (err) {
      console.log('链接失败！')
    }
  })

  result = await db.model('system.users', {}).find({}, (err, res) => {
    return res
  })

  result = await db.model('lijias', {}).find({}, (err, res) => {
    return res
  })

  ctx.body = result
})

router.get('/', async (ctx, next) => {
  setTimeout(() => {
    jwt.verify(token, secret, (err, res) => {
      console.log('verify========', err, res)
    });

    const decode = jwt.decode(token, secret)
    console.log('decode=========', decode)
  }, 1)

  ctx.body = { token, payload: decode }
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
