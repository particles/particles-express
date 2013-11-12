
var scattered = {
  provides: {registerMiddleware: ['express/middleware/preprocessors']},
  args: ['express/log', 'config', 'npm!express']
};

module.exports = function(log, config, express) {
  var module = {};

  module.registerMiddleware = function(expressApp) {
    expressApp.use(config.get('assets.publicUrlRoot'), 
      express.static(config.get('assets.assetsDir'), {maxAge: (60 * 60 * 24 * 1000)}));
  };
  
  return module;
};

module.exports.__module = scattered;
