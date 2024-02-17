exports.run = (client, message, args) => {
    let utenteBan = message.mentions.members.first() 
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      message.channel.send("You're not allowed to use this command");
      return;
    }

    if (!utenteBan) {
      message.channel.send("You haven't mentioned any users");
      return;
    }

    if (!utenteBan.kickable) {
      message.channel.send("unable to ban");
      return;
    }
  let len = args[0].length + 5
  let banReason = args.join(" ").slice(len);
        if (!banReason) {
            banReason = "None"
        }

     utenteBan.ban({reason: banReason})
      .then(() =>
        message.channel.send("<@" + utenteBan + ">" + " has been banned")
      );
  }

exports.name = "ban"