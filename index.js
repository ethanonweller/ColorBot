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



// // Require the necessary discord.js classes
// const { Client, Intents } = require('discord.js');
// const mongoose = require('mongoose')
// require('dotenv').config()
// const levels = require('./levels')
// const profileSchema = require('./test-schema')


// // Create a new client instance
// const bot = new Client({ intents: [Intents.FLAGS.GUILDS,
// 	Intents.FLAGS.GUILD_MEMBERS,
// 	Intents.FLAGS.GUILD_MESSAGES,
// 	Intents.FLAGS.GUILD_VOICE_STATES]});

// // When the client is ready, run this code (only once)
// bot.once('ready', async () => {
//     await mongoose.connect(
//         process.env.MONGO_URI || '',
//     {
//         keepAlive: true,
//     }
//     )
// 	console.log('Ready!');
   
// });

// bot.on("message", async message => {
    
    
// });


// // Login to Discord with your client's token
// bot.login(process.env.TOKEN);