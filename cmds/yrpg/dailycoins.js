const ms = require("ms");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "dailycoins",
  aliases: ["dc"],
  category: "RPG",
  description: "получай 100 монеток каждый день.",
  run: async (client, message, args) => {
    let udata = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
  if(udata.dailycoinscd+86400000>Date.now() && udata.thirdglr == 1) {
    let sasalka = new MessageEmbed()
    .setColor("#767f8b")
      .setThumbnail(client.user.avatarURL({size: 2048}))
    .addField("вы получили 100 монеток!", "поздравляю.")
    message.reply({ embeds: [sasalka]})
  udata.dailycoinscd = Date.now()
  } else {
    let hueblan = new MessageEmbed()
    .setColor("#767f8b")
      .setThumbnail(client.user.avatarURL({size: 2048}))
    .addField("у вас нет доступа к этой команде.", `прочитайте третью главу или же подождите \`${ms((Date.now()-86400000-udata.dailycoinscd))}\`.`)
    message.reply({ embeds: [hueblan]})
  }
  }
}