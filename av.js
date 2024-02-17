const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
  .setColor(0x333333)
  .setAuthor(`${user.username}'s Avatar`)
  .setImage(user.displayAvatarURL());
message.channel.send({ embeds: [avatarEmbed] })
}

exports.name = "avatar"
