const log4js = require('log4js');
log4js.configure({
  appenders: {
    infoAppender: {
      type: 'dateFile',  //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
      filename: './server/log/info/',
      pattern: 'yyyy-MM-dd.log',
      //包含模型
      alwaysIncludePattern: true
    },
    errorAppender: {
      type: 'dateFile',  //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
      filename: './server/log/error/',
      pattern: 'yyyy-MM-dd.log',
      //包含模型
      alwaysIncludePattern: true
    },
    console: {
      type: 'console'
    },
    info: {
      type: 'logLevelFilter',
      level: 'info',
      appender: 'infoAppender',
    },
    error: {
      type: 'logLevelFilter',
      level: 'error',
      appender: 'errorAppender',
   }
  },
  categories: { default: { appenders: ['console', 'info', 'error'], level: 'info' } }
});

exports.getLogger = (type) => {
  return log4js.getLogger(type)
};

// module.exports = (app) => {
//     app.logger = log4js.getLogger('app')
// }