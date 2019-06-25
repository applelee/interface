const router = require('koa-router')()
const { allOptions, userLogin, userAdminList, userAdd, userDeleteAdmin } = require('../controllers')
const { tokenVerify } = require('../middlewares')
const { baseUrl } = require('../../config')
const { apiUrl } = baseUrl

router.options('*', allOptions)
router.use('*', tokenVerify)
router.post(`${apiUrl}/user/login`, userLogin)
router.get(`${apiUrl}/user/adminList`, userAdminList)
// router.post(`${apiUrl}/user/add`, userAdd)
router.post(`${apiUrl}/user/deleteAdmin`, userDeleteAdmin)

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
