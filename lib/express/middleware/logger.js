
var scattered = {
  args: ['express/log', 'utils/logger', 'npm!express'],
  provides: ['registerMiddleware']
};

module.exports = function(log, logger, express) {
  var module = {};
  var accessLog = logger('Access');

  module.registerMiddleware = function(expressApp) {
    var loggerStream = {
      write: function(message, encoding){
        accessLog.info(message);
      }
    };
    expressApp.use(express.logger({stream: loggerStream}));
  };
  
  return module;
};
module.exports.__module = scattered;
