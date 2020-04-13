const express = require('express');
const { getWeather } = require('../api/weather');
const router = express.Router();

router.get('/:lat/:lon', async(req, res) => {
  const { location } = req.params;
  const result = await getWeather(location.lat, location.lon);
  res.send(result);
})

module.exports = router