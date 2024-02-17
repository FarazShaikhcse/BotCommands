const Discord = require("discord.js")
const options = [
  '🇦',
  '🇧',
  '🇨',
  '🇩',
  '🇪',
  '🇫',
  '🇬',
  '🇭',
  '🇮',
  '🇯',
  '🇰',
  '🇱',
  '🇲',
  '🇳',
  '🇴',
  '🇵',
  '🇶',
  '🇷',
  '🇸',
  '🇹',
  '🇺',
  '🇻',
  '🇼',
  '🇽',
  '🇾',
  '🇿',
];

exports.run = (client, message, args) => {
  message.delete()
    if (args.length >= 1) {
      // Defining the question...
      console.log(args)
let question = [];

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('"')) break;
  else question.push(args[i]);
}

question = question.join(' ');
      if (!message.content.includes("\"")) { // yes no unsure question
      
        return message
          .channel
          .send(`${message.author} asks: ${question}`)
          .then(async (pollMessage) => {
            await pollMessage.react('👍');
            await pollMessage.react('👎');
            await pollMessage.react(message.guild.emojis.get('475747395754393622'));
          });
      } else { // multiple choice
        const args = message.content.trim().split(/ +/g);



// Defining the choices...
const choices = [];

const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
let match;
while (match = regex.exec(args.join(' '))) choices.push(match[2]);

// Creating and sending embed...
let content = [];
for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
content = content.join('\n');

var embed = new Discord.MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**${question}**`)
  .setDescription(content);

message.channel.send({ content : `:bar_chart: ${message.author} started a poll.`, embeds: [embed] })
  .then(async m => {
    for (let i = 0; i < choices.length; i++) await m.react(options[i]);
  });
      }
    } else {
      var content = `Please use below formats:\n +poll question \n +poll question "choice1" "choice2"(for multiple choices)`
      var embed = new Discord.MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`Invalid Command`)
  .setDescription(content);
message.channel.send({ embeds: [embed] })
    }
  }


exports.name = "poll"