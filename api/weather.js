const axios = require('axios');
require('dotenv').config()

export const getWeather = async (lat, lon) => {
  const baseUrl
  const apiKey
  const reqUrl
  try {
    console.log('Get API ...OK');
    const data = await axios.get(reqUrl);
    return data;
  } catch (error) {
    console.error('Get API ...NO');
  }
}