const logger = require('../utils/logger').getLogger('testController');

module.exports = {

  index: async function (ctx, next) {
    ctx.body = {
      code: 200,
      data: 'Hey guys'
    }
  },

}