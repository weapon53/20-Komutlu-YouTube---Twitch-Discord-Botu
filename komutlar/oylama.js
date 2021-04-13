const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;


  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`:x:yazı yazman gerek :x:`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()

        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("weapon", client.user.avatarURL()) 
        .addField(`${client.user.username}`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✔️");
      message.react("❌");
      message.channel.send('@everyone @here')
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 3
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: ".oylama "
};
