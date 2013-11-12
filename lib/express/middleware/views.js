
var scattered = {
  provides: 'registerMiddleware',
  args: ['express/log', 'config']
};

module.exports = function(log, config) {
  var module = {};

  
  module.registerMiddleware = function(expressApp) {
    expressApp.set('views', config.get('assets.viewsDir'));
    expressApp.set('view engine', 'jade');
    
    //cache enabled by default in prod
    //expressApp.set('view cache', true);
    expressApp.set('view options', {
      layout: false
    });
  };
  
  return module;
};
module.exports.__module = scattered;
