exports.run = (client, message, args) => {
    var utenteKick = message.mentions.members.first();

    if (!message.member.permissions.has("KICK_MEMBERS")) {
      message.channel.send("You're not allowed to use this command");
      return;
    }

    if (!utenteKick) {
      message.channel.send("You haven't mentioned any user");
      return;
    }

    if (!message.mentions.members.first().kickable) {
      message.channel.send("unable to kick");
      return;
    }
let len = args[0].length + 1
  let banReason = args.join(" ").slice(len);
        if (!banReason) {
            banReason = "None"
        }
    utenteKick
      .kick({reason: banReason})
      .then(() => message.channel.send("<@" + utenteKick + ">" + " has been kicked"));
}

exports.name = "kick"