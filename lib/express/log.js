
module.exports = function(loggerFactory) {
  return loggerFactory.create('express');
};


module.exports.__module = {
  args: ['loggerFactory']
};
