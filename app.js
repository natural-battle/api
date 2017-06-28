'use strict';

const SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const app = express();

const config = {
  appRoot: __dirname // required config
};

app.use(express.static('static'));

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  console.log('http://127.0.0.1:' + port, process.env.NODE_ENV || 'no env');
});

module.exports = app; // for testing
