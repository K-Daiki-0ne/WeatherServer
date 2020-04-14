const express = require('express');
const { getWeather } = require('../api/weather');
const router = express.Router();

router.get('/:lat/:lon', async (req, res) => {
  const latitude = req.params.lat;
  const longitude = req.params.lon;
  const result = await getWeather(latitude, longitude);
  const data = await result.data;
  res.send(data);
})

module.exports = router