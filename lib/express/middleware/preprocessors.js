var scattered = {
  provides: {registerMiddleware: {after: ['express/middleware/views'], before: ['express/middleware/router']}},
  args: ['express/log', 'npm!express']
};

module.exports = function(log, express) {
  var module = {};

  module.registerMiddleware = function(expressApp) {
    expressApp.use(express.compress());
    expressApp.use(express.cookieParser());
    expressApp.use(express.bodyParser());
    expressApp.use(express.methodOverride());
  };
  
  return module;
};
module.exports.__module = scattered;
