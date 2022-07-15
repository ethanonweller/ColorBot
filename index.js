const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES]});

const config = require('./config.json')
const levels = require('./levels')

client.on('ready', async () => {
  console.log('The client is ready!')
  levels(client)
})

client.login(config.token)
