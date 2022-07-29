const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dave')
    .setDescription("Replies with Dave's status!"),
  async execute(interaction) {
    return interaction.reply('King!');
  },
};