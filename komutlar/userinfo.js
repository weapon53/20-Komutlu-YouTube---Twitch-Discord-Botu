
const Discord = require('discord.js');
const moment = require('moment')
const humanizeDuration = require("humanize-duration")

exports.run = async (client, message, args)=> {
//let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))
let muser = message.guild.member(message.mentions.users.first());
let userid;
if(isNaN(args[0])){
  if(!muser){
    userid = message.author.id;
  }else{
    userid = muser.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
let oluşturma = `${humanizeDuration(Date.now() - user.createdAt, {largest: 6, round: true})}`
let oluşturma2 = `${humanizeDuration(Date.now() - message.guild.members.cache.get(user.id).joinedAt, {largest: 6, round: true})}`
let nickname = message.guild.member(user).displayName 
let mentionFlags = user.flags.toArray().join('  ')


let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + ``, user.displayAvatarURL({dynamic: true}))
.addField('Kullanıcı Hakkında', [
    ` **Kullanıcı Adı:** ${user.tag}`,
    `  **Avatar:** [PNG](${user.displayAvatarURL({ format: 'png',  size: 1024 })}) | [JPEG](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })}) | [GIF](${user.displayAvatarURL({ format: 'gif',  size: 1024 })})`,
    `   • **Hesabını Oluşturma Tarihi:** ${moment(  user.createdAt ).format('DD/MM/YYYY HH:mm:ss')}`,
    '     └>  `'  + `${oluşturma}` +' ago`'
    ])
    .addField('<a:pingimiz:819681608557658144> Üye Hakkında', [
     ` **Kullanıcı Adı:** ${nickname}`,
     `   **Sunucuya Katılma Zamanı:** ${moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm:ss')}`,
     '   └> `'  + `${oluşturma2}` +' ago`',
     `   **Sahip Olduğu En Yüksek Rol:** <@&${message.guild.member(user).roles.highest.id}>`,
     `   **Üyenin Kaç Rolü Var:** **${message.guild.member(user).roles.cache.size -1}**`
    ])
.setFooter('weapon#0001 RolePlay v1.2', client.user.avatarURL())
.setThumbnail(user.displayAvatarURL({dynamic: true}))
.setColor(message.guild.member(user).roles.highest.hexColor)
message.channel.send(embed)

} else {

  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + `'s User Info`, user.displayAvatarURL({dynamic: true}))
.addField('Kullanıcı Hakkında', [
    ` **Kullanıcı Adı:** ${user.tag}`,
    `  **Avatar:** [PNG](${user.displayAvatarURL({ format: 'png',  size: 1024 })}) | [JPEG](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })}) | [GIF](${user.displayAvatarURL({ format: 'gif',  size: 1024 })})`,
    `   • **Hesabını Oluşturma Tarihi:** ${moment(  user.createdAt ).format('DD/MM/YYYY HH:mm:ss')}`,
    '     └>  `'  + `${oluşturma}` +' ago`'
    ])
    .addField('Üye Hakkında', [
     ` **Kullanıcı Adı:** ${nickname}`,
     `   **Sunucuya Katılma Zamanı:** ${moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm:ss')}`,
     '   └> `'  + `${oluşturma2}` +' ago`',
     `   **Sahip Olduğu En Yüksek Rol:** <@&${message.guild.member(user).roles.highest.id}>`,
     `   **Üyenin Kaç Rolü Var:** **${message.guild.member(user).roles.cache.size -1}**`
    ])
.setFooter('weapon', client.user.avatarURL())
.setThumbnail(user.displayAvatarURL({dynamic: true}))
.setColor(message.guild.member(user).roles.highest.hexColor)
message.channel.send(embed)

}
}catch{
  message.channel.send("Bir Hata Var!");
  return;
}

};

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ui'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: '',
  usage: 'userinfo [@kullanıcı]'
};