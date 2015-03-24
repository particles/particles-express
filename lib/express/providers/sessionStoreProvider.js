
var MemoryStore = require('express-session').MemoryStore;

var self = module.exports = {
  __module: {
    properties: {
      express: 'npm!express'
    }
  },

  getNewSessionsStore: function() {
    return new MemoryStore();
  }
};
