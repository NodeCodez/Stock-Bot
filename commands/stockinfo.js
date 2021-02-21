const { MessageEmbed } = require('discord.js');
const google = require("google-finance-data");
exports.run = async(client, message, args) => {
    if (!args.length) {
        return message.channel.send(`You did not provide a stock, ${message.author}!`);
      }
      google.getSymbol(args)
      .then(data => message.channel.send(JSON.stringify(data, null, 2)))
  
      await message.channel.send("Waiting For Google Finance API to respond")
      
  }