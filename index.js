const express = require('express');
const app = express();
const port = 3000;
// const { faker } = require('@faker-js/faker');
const faker = require('faker')

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola Soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter')
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product One',
    price: 1000,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.json({ message: 'no params' });
  }
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
