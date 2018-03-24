const config = {
  name: 'koa-boilerplate',
  //端口号配置
  port: 8000,
  // fetch api
  apiProxy: '',
  // 签名秘钥
  secret: 'ilovera',
  // log 等级
  log4js: {
    level: 'TRACE'
  },
  // 中间件配置
  option: {
    publicPath: '../../dist'
  },
  // redis 注入
  redis: {
    port: 6379,
    host: '127.0.0.1',
  },

  database: {
    DATABASE: 'db_node',
    USERNAME: 'root',
    PASSWORD: '123456',
    PORT: '3306',
    HOST: '127.0.0.1'
  },
};

module.exports = config;