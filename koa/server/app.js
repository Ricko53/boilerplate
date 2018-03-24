const Koa = require('koa')
const koaRouter = require('koa-router')()
const middleware = require('./middleware')
const logger = require('./utils/logger').getLogger('app')

const config = require('./config')
const { routers } = require('./loader')

const app = new Koa()

// 注入中间件
middleware(app, config.option)

// 注入 routes
routers.forEach(route => {
  route(koaRouter)
})
app.use(koaRouter.routes())

app.listen(config.port)
console.log(`app started at port ${config.port}...`)