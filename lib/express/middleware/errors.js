
var scattered = {
  args: ['express/log', 'errors/AuthenticationError'],
  provides: {
    registerMiddleware: ['express/middleware/router']
  }
};

module.exports = function(log, AuthenticationError) {
  var module = {};

  module.registerMiddleware = function(express) {
    express.use(function(err, req, res, next) {
      if(err instanceof AuthenticationError) {
        res.send(401, {result: {error: "Unauthorized"}});
      } else {
        log.error("There was an error while handling the request: " + (err.stack || err));
        next(err);
      }
    });
  };
  
  return module;
};
module.exports.__module = scattered;