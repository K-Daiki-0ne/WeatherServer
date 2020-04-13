const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();

try {
  app.listen(port, () => console.log('Sevrer status ...OK'))
} catch (error) {
  console.log('Server status ...NO');
}