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
});
