const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fasttype')
    .setDescription('Starts fast type game! A game that tests how fast you can type the given word!'),
  async execute(interaction) {
    
  },
};