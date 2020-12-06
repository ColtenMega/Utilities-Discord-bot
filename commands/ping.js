const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    execute(message, args){
       message.reply('Calculating ping...').then(resultMessage => {
           const ping = resultMessage.createdTimestamp - message.createdTimestamp
    
           resultMessage.edit(`Pong!🏓 ${ping}ms`) 

    })
  }
}

        