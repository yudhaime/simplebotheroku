const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='&';

client.on('ready', () => {
    console.log('Siap Bro!!!');
});

client.on('message', message => {
  if (message.author.bot) return;
 
  const args = message.content.slice(prefix.length).trim().split('%');
  const command = args.shift().toLowerCase();
  const umumkan = client.channels.get("620055202438840330")
  const pemberitahuan = client.channels.get("620055202438840330")
    if(command === 'ping') {
        message.channel.send('Pong!');
    } else
    if (message.content.includes('https')) {
        if(message.author.id !== process.env.BOT_TOKEN) return;
        pemberitahuan.send('message.content');
        message.reply(`Pesan terkirim`);
    } else
    if (command === "asl") {
        let text = args[0]; // Remember arrays are 0-based!.
        let url = args[1];
        let location = args[2];
        umumkan.send(`${text} langsung aja ke ${url}` );
        message.reply(`Pesan terkirim`);
}
});
client.login(process.env.BOT_TOKEN)
