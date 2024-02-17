exports.run = (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) {
    message.channel.send("You're not allowed to use this command");
    return;
  }
  if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
    message.channel.send("You're not allowed to use this command");
    return;
  }

  var count = message.content.slice(7);
  count = parseInt(count);
  if (!count) {
    message.channel.send("Please provide the count of the message to be cleared");
    return;
  }

  message.channel.bulkDelete(count, true);
  message.channel.send(count + " message cleared").then((msg) => {
    msg.delete({ timeout: 1000 });
  });

}

exports.name = "clear"