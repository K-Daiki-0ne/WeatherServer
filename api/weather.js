const axios = require('axios');
require('dotenv').config()

export const getWeather = async (lat, lon) => {
  const baseUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const reqUrl = `${baseUrl}/${apiKey}`;
  try {
    const data = await axios.get(reqUrl);
    return data;
    console.log('Get API ...OK');
  } catch (error) {
    console.error('Get API ...NO');
  }
}