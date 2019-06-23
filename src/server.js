const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const router = require('./routes')

const { cors, bodyparser, json, logger } = require('./middlewares');

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(bodyparser())
app.use(json())
app.use(logger())

// routes
app.use(router.routes(), router.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err)
});

module.exports = app
