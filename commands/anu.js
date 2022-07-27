const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('anu')
    .setDescription("Replies with Anu's status!"),
  async execute(interaction) {
    return interaction.reply('Queen!');
  },
};