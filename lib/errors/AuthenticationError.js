var util = require('util');

var AuthenticationError = function (message) {
  this.message = message;
  this.stack = new Error(message).stack;
};

util.inherits(AuthenticationError, Error);

module.exports = AuthenticationError;
module.exports.__module = {type: 'object'};