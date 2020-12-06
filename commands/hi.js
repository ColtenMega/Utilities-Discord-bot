const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'hi',
    description: 'This is a Command that will say hi to a fat user',
    execute(message, args){
        message.reply(`Well hello there!`);
    }
}