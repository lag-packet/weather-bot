const { SlashCommandBuilder } = require('discord.js');
const { getWeatherData } = require('../../weatherApi.js');
const { OPENWEATHERMAP_API_KEY } = require('../../config.json');

// option list 
module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Get the weather for a specific location')
		.addStringOption(option =>
			option.setName('location')
				.setDescription('The location to get the weather for')
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName('emergency')
				.setDescription('Set this flag to get emergency weather updates')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('alert')
				.setDescription('The type of weather alert')
				.setRequired(false)),
	async execute(interaction) {
		const city = interaction.options.getString('city');
		//const getString = interaction.options.getString
		await interaction.reply('hi');
	}
}




/*
module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Provides weather information.')
		.addStringOption(option =>
			option.setName('city')
				.setDescription('The city')
				.setRequired(true)),
			// add another option here named setAlert
	async execute(interaction) {
		const city = interaction.options.getString('city');
		if (!city) {
			return await interaction.reply('Please provide a valid city.');
		}
		const city_weather_data = await getWeatherData(city, OPENWEATHERMAP_API_KEY);
		const kelvin = city_weather_data.main.temp;
		const fahrenheit = Math.floor((kelvin - 273.15) * 9/5 + 32);
		await interaction.reply(`The beautiful city of ${city_weather_data.name} is currently ${fahrenheit}° fahrenheit!`);

		// for option in option list execute it.
	},
}
*/
