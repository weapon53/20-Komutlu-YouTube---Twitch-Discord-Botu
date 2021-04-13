const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' **Sıkça Sorulan Sorular**')
.setTimestamp()

.addField('**Kodlar Nerede?**', 'Videolarımda gördüğünüz tüm kodların hepsi sunucumuzda <@&> rolüne sahip kişiler görebileceği odalarda duruyor')

.addField(' **Abone Rolü Nasıl Alınır?**', '<#> kanalını tamamen okumanız sizlere yardımcı olacaktır')

.setFooter('YouTube Ömer Tuna', client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'info',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};
