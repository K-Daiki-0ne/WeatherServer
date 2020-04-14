const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const port = 5000;

const app = express();

app.use(bodyParser());
app.use(cors());
app.use('/', router);

try {
  app.listen(port, () => console.log('Sevrer status ...OK'))
} catch (error) {
  console.log('Server status ...NO');
}