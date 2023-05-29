const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, "..", 'commands');
const commandsFolders = fs.readdirSync(foldersPath);

describe('Command handler', () => {
    for (const folder of commandsFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            test(`Command file ${filePath} should have "data" and "execute" properties`, () => {
                expect(command).toHaveProperty('data');
                expect(command).toHaveProperty('execute');
                expect(typeof command.execute).toBe('function');
            });
        }
    }
});