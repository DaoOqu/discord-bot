const { SlashCommandBuilder } = require('@discordjs/builders');
const { words } = require("C:/Users/PC/Desktop/GitHub Repos/discord-bot/commands/utility/fast-type-words.json");
require("dotenv").config();

// use guild ID
const example = {
  channelId: {
    message: 'message object',
    stage: 'string',
    counter: 'number',
    currentWord: 'string',
    remainingWords: ['words here'],
    points: {
      userId: 'points'
    }
  }
}

const games = {}

const stages = {
  'STARTING': (counter) => {
    return `A new "fast type" game is starting in ${counter}s!`;
  },
  'IN_GAME': () => {},  
  'ENDING': () => {}
}

const gameLoop = () => {
  for(const key in games) {
    const game = games[key]
    const { message, stage } = game

    if(stage === 'STARTING') {
      const string = stages[stage](game.counter);
      message.edit(string);
    }

    --game.counter;
  }

  setTimeout(gameLoop, 1000)
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fasttype')
    .setDescription('Starts fast type game! A game that tests how fast you can type the given word!'),

  async execute(interaction) {
    const { channel } = interaction;

    // message.delete();
    channel.send('Preparing game...').then((message) => {
      games[channel] = {
        message,
        stage: 'STARTING',
        counter: 5,
        remainingWords: [...words],
        points: {}
      }
    })
  }
};