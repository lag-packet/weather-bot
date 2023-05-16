const { Client, CommandInteraction } = require('discord.js');
const { execute: locationExecute } = require('../commands/weather/location');
const { execute: setalertExecute } = require('../commands/weather/setalert');

const mockInteraction = (options) => {
  return new CommandInteraction(new Client(), {
    id: '123',
    application_id: '123',
    type: 1,
    version: 1,
    channel_id: '123',
    user: {},
    token: '123',
    member: {},
    data: { options },
  });
};

describe('Weather command tests', () => {
  test('location subcommand', async () => {
    const interaction = mockInteraction([{ name: 'city', value: 'New York' }]);
    interaction.reply = jest.fn();

    await locationExecute(interaction);

    expect(interaction.reply).toHaveBeenCalled();
    // Add more specific expectations as needed
  });

  test('setalert subcommand', async () => {
    const interaction = mockInteraction([{ name: 'city', value: 'Los Angeles' }]);
    interaction.reply = jest.fn();

    await setalertExecute(interaction);

    expect(interaction.reply).toHaveBeenCalled();
    // Add more specific expectations as needed
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
