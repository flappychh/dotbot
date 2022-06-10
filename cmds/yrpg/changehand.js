const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changehand",
  aliases: ["ch"],
  description: "меняет основную руку персонажа на выбранную.",
  category: "RPG",
  run: async (client, message, args) => {
    let udata = await User.findOne({userID:message.author.id, guildID: message.guild.id});
  if(udata.hand == 'левая') {
    let huesos = new MessageEmbed()
    .setThumbnail(client.user.avatarURL({size: 2048}))
  .setColor("#767f8b")
  .addField("рука успешно изменена на правую", "поздравляю.")
  udata.hand = 'правая'
  udata.save()
  message.reply({ embeds: [huesos] })
  } else {
    let huilan = new MessageEmbed()
    .setThumbnail(client.user.avatarURL({size: 2048}))
  .setColor("#767f8b")
  .addField("рука успешно изменена на левую", "поздравляю.")
  udata.hand = 'левая'
  udata.save()
  message.reply({ embeds: [huilan] })
    
  }
  }
}