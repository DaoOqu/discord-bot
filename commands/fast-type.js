const { SlashCommandBuilder } = require('@discordjs/builders');

// use guild ID
const example = {

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
      message.edit(stages[stage])(game.counter);
    }

    --game.conter;
  }

  setTimeout(gameLoop, 1000)
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fasttype')
    .setDescription('Starts fast type game! A game that tests how fast you can type the given word!'),

    // gameLoop() ??

  async execute(interaction) {
    const { channel } = message

    message.delete();
    channel.send('Preparing game...').then((message) => {
      games[channel.id] = {
        message,
        stage: 'STARTING',
        counter: 5,
        remainingWords: [],
        points: {}
      }
    })

    // gameLoop() ??

  },
};