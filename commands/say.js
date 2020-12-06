const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'say',
    description: 'Say = bot.say+Restrict.soon',
    execute(message, args) {

        const sayMessage = args.join(" ");
        message.delete()
        message.channel.send(sayMessage)
    }
}