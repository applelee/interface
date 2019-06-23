const cors = require('./cors');
const logger = require('./logger');
const json = require('./json');
const bodyparser = require('./bodyparser');
const tokenVerify = require('./tokenVerify');

module.exports = {
  cors,
  logger,
  json,
  bodyparser,
  tokenVerify,
}