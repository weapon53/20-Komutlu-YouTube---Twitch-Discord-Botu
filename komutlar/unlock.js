exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Bu komudu kullanabilmek için **KANALLARI YÖNET** yetkisine sahip olmalısın!")
    let every = message.guild.roles.cache.find(r => r.name === "@everyone");
    message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
    });
   
    message.channel.send("<#"+message.channel + "> ** Adlı Kanalın Başarıyla Kilidini Açtım **");
    };
    exports.conf = {
      aliases: ["un-lock"],
    };
    exports.help = {
      name: "unlock",
    };