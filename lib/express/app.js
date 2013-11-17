
var util = require('util'),
  http = require('http');

var __module = {
  provides: ['app_start', 'server_start'],
  args: [
    'express/log', 'config', 'utils/promises', 'npm!express',
    'svc!express/middleware/registerMiddleware', 'svc|sequence!express/server_start'
  ]
};

module.exports = function(log, config, promises, express,
                          registerMiddleware, startServer) {
  var self = {};

  self.express = express();
  self.server = http.createServer(self.express);

  self.app_start = function() {
    log.info("Configuring express middleware...");
    return registerMiddleware.sequence(self.express).then(function(){
      return startServer(self.server);
    });
  };

  self.server_start = function(server) {
    log.info("Starting Express app...");
    var deferred = promises.defer();
    server.listen(config.get('server.port') || 3000, config.get('server.ip') || "0.0.0.0", function() {
      log.info(util.format("Express server listening on port %d in %s mode (%s)",
      server.address().port, self.express.settings.env, "BASE URL"));
      deferred.resolve();
    });

    return deferred.promise;
  };

  return self;
};


module.exports.__module = __module;
