const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola Soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product One',
      price: 1000,
    },
    {
      name: 'Product Two',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product One',
    price: 1000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port', port);
});
