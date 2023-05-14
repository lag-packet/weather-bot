const { SlashCommandBuilder } = require('discord.js');
const { getWeatherData } = require('../../weatherApi.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Provides weather information for the specified city.')
		.addStringOption(option =>
			option.setName('city')
				.setDescription('The city to get the weather information for.')
				.setRequired(true)),
	async execute(interaction) {
		const city = interaction.options.getString('city');
		// Fetch the weather data for the given city using your getWeatherData function
		//const weatherData = await getWeatherData(city);
		return interaction.reply(`Weather data for ${city}: ${weatherData}`);
	},
};