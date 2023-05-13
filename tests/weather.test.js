const { getWeatherData } = require('../weather.js');
const config = require('../config.json');
const axios = require('axios');

jest.mock('../config.json', () => {
    return {
        OPENWEATHERMAP_API_KEY: 'mock-api-key',
    };
});

jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({
            data: {
                name: 'New York',
                weather: [
                    {
                        description: 'clear sky',
                    },
                ],
            },
        })),
    };
});

const mockLocation = 'New York';

test('getWeatherData should return weather data for a given location', async () => {
    const weatherData = await getWeatherData(mockLocation, config.OPENWEATHERMAP_API_KEY);

    expect(weatherData).toBeDefined();
    expect(weatherData.name).toBe(mockLocation);
    expect(weatherData.weather).toBeDefined();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${mockLocation}&appid=${config.OPENWEATHERMAP_API_KEY}`);
});