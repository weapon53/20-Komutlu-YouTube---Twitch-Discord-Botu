const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz! **(MAKSİMİM 100 TANE SİLEBİLİRİM)** ");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    
    message.channel.send(`${args[0]} tane mesaj başarılı bir şekilde silindi`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'clear'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle '
};