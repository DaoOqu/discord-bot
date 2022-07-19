require("dotenv").config();

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('ready', (msg) => {
  if(msg.content.toLowerCase() === 'ping') msg.reply("pong!")
});

client.login(process.env.DISCORD_TOKEN);