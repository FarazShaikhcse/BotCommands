const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const colorDictionary = {
  white: "#FFFFFF",
  black: "#000000",
  red: "#FF0000",
  green: "#008000",
  blue: "#0000FF",
  yellow: "#FFFF00",
  purple: "#800080",
  orange: "#FFA500",
  gray: "#808080",
    default: '#00FFFF'
};

const channelName =  message.mentions.channels.first();
  var color = args[1] 
  if(!args[1].startsWith('#')) 
    color = colorDictionary[color || 'default']
  let content = [];
for (let i = 2; i < args.length; i++) content.push(`${args[i]}`);
content = content.join(' ');
  const text = args[2]
  const embed = new Discord.MessageEmbed()
    .setDescription(content)
  .setColor(color)
  channelName.send({ embeds: [embed] })
}

exports.name = "embed"