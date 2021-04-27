const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config-secrets.json');



client.on('message',  (message) => {


});



// Run the bot
client.login(config.token)
    .catch(console.error);
