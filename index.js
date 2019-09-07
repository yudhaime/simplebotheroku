const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='%';

client.on('ready', () => {
    console.log('Siap Bro!!!');
});

client.on('message', message => {
  if (message.author.bot) return;
 
  const args = message.content.slice(prefix.length).trim().split('%%');
  const command = args.shift().toLowerCase();
    if(command === 'ping') {
        message.channel.send('Pong!');
    } else
    if (command === 'blah') {
        message.channel.send('Meh.');
    } else
    if (command === "asl") {
        let age = args[0]; // Remember arrays are 0-based!.
        let sex = args[1];
        let location = args[2];
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}
});
client.login(process.env.BOT_TOKEN)
