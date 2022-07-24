const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Replies with a pic/gif of a cat!'),
  async execute(interaction) {
      const catResult = 'https://aws.random.cat/meow';
      const { file } = catResult.body;
      interaction.editReply({ file: [file] });
  },
};
