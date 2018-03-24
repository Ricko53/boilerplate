const fs = require('fs')
const path = require('path')

const bodyParser = require('koa-bodyparser')
const server = require('koa-static')
const logger = require('../utils/logger').getLogger('app')

function middleware(app, option = {}) {
  app.use(bodyParser())

  if(option.publicPath) {
    app.use(server(path.join(__dirname, option.publicPath)))
  }

  // 异常捕获
  app.use(async function(ctx, next){
    try {
      await next()
    }catch(error){
      logger.error(error)
      
      ctx.body = {
        error: {
          msg: error.message,
          status: 500,
        }
      };
    }
  })
}

module.exports = middleware