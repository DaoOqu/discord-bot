const { SlashCommandBuilder } = require('@discordjs/builders');

async function getJSONResponse(body) {
  let fullBody = '';

  for await(const data of body) {
    fullBody += data.toString();
  }

  return JSON.parse(fullBody);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Replies with a pic/gif of a cat!'),
  async execute(interaction) {
      const catResult = 'https://aws.random.cat/meow';
      const { file } = await getJSONResponse(catResult.body);
      interaction.reply({ file: [file] });
  },
};
