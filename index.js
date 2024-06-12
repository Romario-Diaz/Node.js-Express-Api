const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const routerApi = require('./routes');
routerApi(app)


app.listen(port, () => {
  console.log('Mi port', port);
});
