const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='%';

client.on('ready', () => {
    console.log('Siap Bro!!!');
});

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if(command === 'ping') {
        message.channel.send('Pong!');
    } else
    if (command === 'blah') {
        message.channel.send('Meh.');
    }
});
client.login(process.env.BOT_TOKEN)
