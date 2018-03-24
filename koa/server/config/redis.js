const config = require('./index.js')
const koaRedis = require('koa-redis')

const redis = new koaRedis(config.redis)

module.exports = redis