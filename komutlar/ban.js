const Discord = require("discord.js"); 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Yetkin Yok!");
  let nrcos_user = args[0];
  if (isNaN(nrcos_user)) return message.reply("Doğru ID Girmelisiniz! Örnek; !ban 796656653972930580");
  await message.guild.members.ban(nrcos_user);
  return message.reply(`\`${nrcos_user}\`  Sunucudan Banlandı! <a:bannedkanka:819677597922230332>`);
}; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban","ban"]
};

exports.help = {
  name: "ban",
  description: "ID ile Sunucudan Birisini Banlar!",
  usage: "forceban <kullanıcı-id>"
};