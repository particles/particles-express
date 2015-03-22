
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var scattered = {
  provides: {"express/middleware/register": {after: ['express/middleware/views'], before: ['express/middleware/router']}},
  args: ['express/log', 'npm!express']
};

module.exports = function(log, express) {
  var module = {};

  module.register = function(expressApp) {
    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({extended: true}));
    expressApp.use(methodOverride());
  };

  return module;
};
module.exports.__module = scattered;
