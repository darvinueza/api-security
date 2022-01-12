const express = require('express');
const app = express();
const port = 3000;

const { checkApiKey } = require('./middlewares/auth.handler');

app.get('/api/v1', checkApiKey, (req, res) => {
  res.send('¡Hello World!');
});

app.get('/api/v1/users', checkApiKey, (req, res) => {
  res.json({
    name: 'Dario',
    lastname: 'Vinueza'
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
