module.exports = () => async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild')
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH')
  ctx.set('Access-Control-Allow-Credentials', true)

  await next()
}