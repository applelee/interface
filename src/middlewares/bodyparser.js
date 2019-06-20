const bodyparser = require('koa-bodyparser')

module.exports = () => bodyparser({
  enableTypes: ['json', 'form', 'text'],
})