const { SlashCommandBuilder } = require('discord.js');
const { getWeatherData } = require('../../weatherApi.js');
const { OPENWEATHERMAP_API_KEY } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Provides weather information.'),
	async execute(interaction) {
		await interaction.reply(`Weather command!`);
	},
};




/*{
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
		const weatherData = await getWeatherData(city, OPENWEATHERMAP_API_KEY);
		return interaction.reply(`Weather data for ${city}: ${weatherData}`);
	},
};*/