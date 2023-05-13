const axios = require('axios');
const config = require('./config.json');

async function getWeatherData(location, apiKey) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching weather data: ${error.message}`);
      throw error;
    }
  }

module.exports = {
    getWeatherData,
};