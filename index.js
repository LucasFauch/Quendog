const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
    console.log("Waf!");
});

client.on('message', async message => {
    if (message.author.bot) return;
    else{
        if(message.member.roles.cache.some(role => role.name == 'SALE CHIEN' && Math.random()>0.9)){
            if(Math.random()>0.99){
                message.reply("Waf ! :dog: https://tenor.com/view/scary-angry-pissed-mad-bro-gif-10066144"
            } else{
                message.reply("Waf ! :dog:");
            }
        };
    }
});
