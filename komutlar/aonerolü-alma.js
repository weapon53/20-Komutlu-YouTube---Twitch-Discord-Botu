const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}` , client.user.avatarURL())
.setColor('RED')
.setDescription(`Abone Rolünü Almak İçin Allta Bulunan Linkleri Takip Etmeniz Gereklidir

[YouTube Kanalımı Takip Etmek İçin Tıkla](https://www.youtube.com/channel/UC-4WKMXFDSVE7QeButB9zpg)

[Instagram Hesabımı Takip Etmek İçin Tıkla](https://www.instagram.com/omerweapon/)

Bu Linklerde Bulunan Sosyal Medya Adreslerini Takip Ettikten Sonra <#> Kanalına **Tam Görünümlü Şekilde Ekran Görüntüsü Atınız**

Ekran Görüntüsünü Attıktan Sonra <@&> Rolüne Sahip Birini Etikleyin Yada Rolü Etiketleyiniz!

Eğer Hala Size Abone Rolü Verilmiyorsa <@> Özelden Yazabilirsiniz! 

`)



.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'bb01',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};
