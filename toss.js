exports.run = (client, message, args) => {
  message.channel.send({content : toss()})
}

function toss() {
  var x = (Math.floor(Math.random() * 2) == 0);
  if (x) {
    return "heads";
  } else {
    return "tails";
  }
}

exports.name = "toss"