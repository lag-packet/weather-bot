# weather-bot

A discord bot using discordjs and a weather api.

## How to build

```
$ npm install
$ node deploy-commands.js # run this when updates made to commands/initial run to register commands.
$ node .
```

- Keep in mind that this project does not include a config! Here is a starter `config.json` config where you must fill out with your own respective information:
```
{
    "token": {your discord token},
    "clientId": {your discord client id},
	"guildId": {your guildID (optional but in here for future debugging)},
    "OPENWEATHERMAP_API_KEY": "{your open weather map api key}"
}
```

## How to use discord bot

- Use this invite: `https://discord.com/api/oauth2/authorize?client_id=1106859436548558939&permissions=0&scope=bot%20applications.commands`
- Once bot is in discord server issue the command `/weather {city}` where location is a city of your liking. If the bot is configured correctly you should see Weather Bot responding with `The beautiful city of {city} is currently {temp}° fahrenheit!`
