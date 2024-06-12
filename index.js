const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes')

routerApi(app)

// app.get('/', (req, res) => {
//   res.send('Hola mundo');
// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola Soy un nuevo endpoint');
// });



// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.json({ message: 'no params' });
//   }
// });

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  console.log('Mi port', port);
});
