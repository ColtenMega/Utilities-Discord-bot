const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('MU.xyz is up and running');

    client.user.setActivity(`${client.guilds.cache.size} servers | .help`, {
        type: "WATCHING",
        url: "https://www.twitch.tv/m3ga101"
    });

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'ping') {
            client.commands.get('ping').execute(message, args)
        }
        if (command === 'hi') {
            message.delete();
            client.commands.get('hi').execute(message, args);
        }
        if (command === 'avatar') {
            message.delete();
            client.commands.get('avatar').execute(message, args);
        }
        if (command === 'kick') {
            client.commands.get('kick').execute(message, args);
        }
        if (command === 'say') {
            client.commands.get('say').execute(message, args);
        }




    })
});
client.login('My bot token');
