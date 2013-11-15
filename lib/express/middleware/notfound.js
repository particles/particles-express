
var self = module.exports = {
  __module: {
    properties: {
      log: "express/log"
    },
    provides: {
      registerMiddleware: {after: '**'}
    }
  },


  registerMiddleware: function(express) {
    express.use(function(req, res, next) {
      self.log.error("Url not found", req.method, req.url, req.headers);
      res.status(404);

      // respond with html page
      if(req.accepts('html')) {
        res.render('errors/404', { url: req.url });
        return;
      }

      // respond with json
      if(req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
      }

      // default to plain-text. send()
      res.type('txt').send('Not found');
    });
  }
};