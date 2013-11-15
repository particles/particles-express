
module.exports = {
  __module: {
    provides: ["register_views_dir"]
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  }
};