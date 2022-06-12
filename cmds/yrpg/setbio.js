const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "setbio",
  aliases: ["sb"],
  description: "меняет биографию на ту, которую установили вы.",
  category: "RPG",
  run: async (client, message, args) => {
    let udata = await User.findOne({userID:message.author.id, guildID: message.guild.id});
  if(message.content == '.setbio') {
    let huesos = new MessageEmbed()
    .setThumbnail(client.user.avatarURL({size: 2048}))
  .setColor("#767f8b")
  .addField("биография успешно удалена.", "поздравляю.")
  udata.biog = 'отсутсвует'
  udata.save()
  message.reply({ embeds: [huesos] })
  } else {
    let huilan = new MessageEmbed()
    .setThumbnail(client.user.avatarURL({size: 2048}))
  .setColor("#767f8b")
  .addField("биография успешно изменена на", `${message.content.replace(".setbio", " ")}`)
  udata.biog = `${message.content.replace(".setbio", " ")}`
  udata.save()
  message.reply({ embeds: [huilan] })
    
  }
  }
}