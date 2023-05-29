const { SlashCommandSubcommandBuilder } = require('discord.js');
const { getWeatherData } = require('../../weatherApi.js');
const { OPENWEATHERMAP_API_KEY } = require('../../config.json');

module.exports = {
    data: new SlashCommandSubcommandBuilder()
        .setName('location')
        .setDescription('Get the weather for a specific location.')
        .addStringOption(option =>
            option.setName('city')
                .setDescription('The city')
                .setRequired(true)),
    async execute(interaction) {
        const city = interaction.options.getString('city');
        if (!city) {
            return await interaction.reply('Please provide a valid city.');
        }
        const city_weather_data = await getWeatherData(city, OPENWEATHERMAP_API_KEY);
        if (!city_weather_data) {
            return await interaction.reply("Please provide a valid city.");
        }
        const kelvin = city_weather_data.main.temp;
        const fahrenheit = Math.floor((kelvin - 273.15) * 9 / 5 + 32);
        await interaction.reply(`The beautiful city of ${city_weather_data.name} is currently ${fahrenheit}° fahrenheit!`);
    },
};
