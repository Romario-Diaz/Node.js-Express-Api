const productsRouter = require('./products.router');

function routerApi(app) {
  app.use('/products', productsRouter);
  // app.use('/users', usersRouter)
}

module.exports = routerApi;
