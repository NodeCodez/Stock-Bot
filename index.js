
const fs = require("fs");
const discord = require("discord.js");
const settings = require("./config/bot.json");
const client = new discord.Client({ disableMentions: 'everyone' });
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName}`);
        client.commands.set(commandName, props);
    });
});
client.login(settings.token);//