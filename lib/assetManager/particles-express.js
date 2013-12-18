
module.exports = {
  __module: {
    provides: ["assetManager/register_views_dir"]
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  }
};