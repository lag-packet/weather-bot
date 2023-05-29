// weather.test.js
const locationHandler = require('../commands/weather/location.js');

jest.mock('../weatherApi.js', () => ({
  getWeatherData: jest.fn().mockResolvedValue({
    main: {
      temp: 300 // 300K, or about 27°C
    },
    name: 'Test City'
  })
}));

jest.mock('../config.json', () => ({
  OPENWEATHERMAP_API_KEY: 'test-api-key'
}));

describe('location command', () => {
  it('replies with weather information for a valid city', async () => {
    const mockInteraction = {
      options: {
        getString: jest.fn().mockReturnValue('Test City')
      },
      reply: jest.fn()
    };
    
    await locationHandler.execute(mockInteraction);

    expect(mockInteraction.options.getString).toHaveBeenCalledWith('city');
    expect(mockInteraction.reply).toHaveBeenCalledWith('The beautiful city of Test City is currently 80° fahrenheit!');
  });

  it('replies with an error message for an invalid city', async () => {
    const mockInteraction = {
      options: {
        getString: jest.fn().mockReturnValue(null)
      },
      reply: jest.fn()
    };
    
    await locationHandler.execute(mockInteraction);

    expect(mockInteraction.options.getString).toHaveBeenCalledWith('city');
    expect(mockInteraction.reply).toHaveBeenCalledWith('Please provide a valid city.');
  });
});



// Before modular sub commands
/*

const { SlashCommandBuilder } = require('discord.js');
const { getWeatherData } = require('../weatherApi.js');
const weatherCommand = require('../commands/weather/weatherCommand.js');

jest.mock('../weatherApi.js', () => {
    return {
        getWeatherData: jest.fn(),
    };
});


describe('weather command', () => {
    it('replies with temperature in fahrenheit', async () => {
        // Mock the getWeatherData function
        getWeatherData.mockResolvedValue({
            name: 'London',
            main: {
                temp: 284,
            },
        });

        // Manually create a mock interaction object
        const interaction = {
            options: {
                getString: jest.fn().mockReturnValue('London'),
            },
            reply: jest.fn(),
        };

        // Execute the command
        await weatherCommand.execute(interaction);

        // Test if the reply was called with the expected message
        expect(interaction.reply).toHaveBeenCalledWith('The beautiful city of London is currently 51° fahrenheit!');
    });
});*/
