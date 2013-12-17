
module.exports = function(loggerFactory) {
  return loggerFactory.create('Controllers');
};


module.exports.__module = {
  args: ['loggerFactory']
};
