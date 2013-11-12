
var scattered = {
  provides: ['registerMiddleware'],
  args: ['express/log', 'svc!controllers/setup']
};

module.exports = function(log, setupControllers) {
  var module = {};

  module.registerMiddleware = function(expressApp) {
    expressApp.use(expressApp.router);
    return setupControllers.sequence(expressApp);
  };
  
  return module;
};
module.exports.__module = scattered;

