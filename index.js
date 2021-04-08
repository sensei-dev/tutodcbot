const Discord = require("discord.js")
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disabeleeveryone: true })

console.log("A bot elindult!")
bot.on("ready", async() => {
    bot.user.setActivity(`${bot.guilds.cache.size} Servers`, { type: "WATCHING" })
})
bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let command = MessageArray [0]
    let args = MessageArray.slice(1)
    let prefix = botconfig.prefix


console.log("A szia és a mobvadász kommand betöltve!")

    if(command === `${prefix}Szia`){
        message.reply("Szia te gyerek! ")
    }
    if(command === `${prefix}mobvadasz`) {
        let embed = new Discord.MessageEmbed() 
        .setColor("RED")
        .setAuthor(message.author.username)
        .setTitle("mobvadasz egy buzi ")
        .setDescription("mindenki tudja")
        .setThumbnail(message.author.displayAvatarURL())

        message.channel.send(embed)
    }
    if(command === `${prefix}buzikefegecikurvaanyad`) {
        let mobbuzi = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(message.author.username)
        .setTitle("buzikefegecikurvaanyadbuzikefegecikurvaanyad")
        .setDescription("buzikefegecikurvaanyadbuzikefegecikurvaanyad \n buzikefegecikurvaanyadbuzikefegecikurvaanyad \n buzikefegecikurvaanyadbuzikefegecikurvaanyad ")
        .setThumbnail(message.author.displayAvatarURL())

        message.channel.send(mobbuzi)
    }

})
bot.login(tokenfile.token)
