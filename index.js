const express = require('express');
const app = express();
const port = 8080;
const userData = require('./data/user.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/user', (req, res) => {
  res.json(userData);
});

app.get('/test', (req, res) => {
  res.send('<h1>Testing network</h1>');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});