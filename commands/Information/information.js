const Discord = require("discord.js");

module.exports = {

    name: "information",

    aliases: ["info"],

    category: "Information",

    description: "Returns information about Attack on Titan: Last Hope",

    run: async (client, message, args) => {

        const dinfoembed = new Discord.RichEmbed()
        .setColor('#fc03db')
        .setTitle("Attack on Titan: Lost Hope")
        .addField('Lost Hope', 'Welcome to Attack On Titan Last Hope, a Perma Death Roleplay based on the Attack on Titan Anime and Manga. In order to play the game join the ROBLOX [Group](https://www.roblox.com/groups/5151918/Attack-on-Titan-Last-Hope#!/about) and check the description of it for more info. Enjoy your time here!', true)
        .addField('Bot', 'The Bot prefix is: lh!. Say !lh for a list of commands.')
        .setTimestamp()

        message.channel.send(dinfoembed)

    }}