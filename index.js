require("dotenv").config();
const { request } = require('undici');

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

async function getJSONResponse(body) {
  let fullBody = '';

  for await(const data of body) {
    fullBody += data.toString();
  }

  return JSON.parse(fullBody);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {
  if(msg.content.toLowerCase() === 'ping') msg.reply("pong!");
});

client.on('interactionCreate', async interaction => {
  if(!interaction.isCommand()) return;
  
  const { commandName } = interaction;
  await interaction.deferReply();

  if(commandName.toLowerCase() === 'cat') {
    const catResult = await request('https://aws.random.cat/meow');
    const { file } = await getJSONResponse(catResult.body);
    interaction.editReply({ files: [file] });
  }
});

client.login(process.env.DISCORD_TOKEN);