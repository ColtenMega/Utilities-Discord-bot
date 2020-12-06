const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'avatar',
    description: 'This is a Command that will send users avator / profile picture!!!',
    execute(message, args){
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
    }
}

