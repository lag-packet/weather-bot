const { SlashCommandBuilder } = require('discord.js');
const { getWeatherData } = require('../../weather.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather location')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
        const text = interaction.options.getString('text');
        return interaction.reply(`You said: ${text}`);
		//await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};