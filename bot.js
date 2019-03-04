const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552155887356346379")
setInterval(function() {
channel.send(`I Love Myths Server <3 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
