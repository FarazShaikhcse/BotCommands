exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if (!toSay) return message.channel.send({ content: "You have to write something" })
  message.channel.send({ content: toSay })
  message.delete()
}

exports.name = "say"