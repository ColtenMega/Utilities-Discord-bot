const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'kick',
    description: 'This is a kick command that will temporaorly kick a user from __ server.',
    execute(message, args){


        const member = message.mentions.members.first()
        if (!member) {
          return message.reply(`Who are you trying to kick? You must mention a user.`)
        }
        if (!member.kickable) {
          return message.reply(`I can't kick this user. Sorry!`)
        }
        return member
          .kick()
          .then(() => message.reply(`${member.user.tag} was kicked.`))
          .catch((error) => message.reply(`Sorry, an error occured.`))
      }
    }