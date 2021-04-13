const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {

let kullanıcı = message.mentions.members.first();
let sebep = args.slice(1).join(" ")

if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bu Komutu Kullanamazsın!")

if (!kullanıcı) return message.channel.send("Bir Kullanıcı Etiketlemelisin!")
if (!sebep) {
sebep = "Ceza Sebebi Belirtilmedi!"
}
let dcs = new Discord. MessageEmbed()
.setColor("RED")
.setDescription("**__Uyarı Verilen Kullanıcı:__** <@" + kullanıcı.id + ">\n\n **__Uyarı Veren Yetkili:__** <@" + message.author.id + ">\n\n**__Uyarı Sebebi:__** `" + sebep + "`")
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
message.delete()
message.channel.send(dcs)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uyarı', 'uyari'],
    permLevel: 2
  };
  


module.exports.help = {
name: "ceza"
}