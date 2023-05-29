const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setalert')
        .setDescription('Set a weather alert for a specific location.')
        .addStringOption(option =>
            option.setName('city')
                .setDescription('The city')
                .setRequired(true)),
    async execute(interaction) {
        // TODO: Implement functionality for setting a weather alert
        await interaction.reply('This feature is under development.');
    },
};
