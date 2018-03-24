const testController = require('../controller/test')

module.exports = function(router) {
  router.get('/api/test', testController.index);
}