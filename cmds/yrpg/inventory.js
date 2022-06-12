const { MessageEmbed, MessageButton } = require("discord.js");

module.exports = {
  name: "inventory",
  aliases: ["inv"],
  description: "показывает ваш инвентарь, как не странно.",
  category: "RPG",
  run: async (client, message, args) => {
  let udata = await User.findOne({userID:message.author.id, guildID: message.guild.id});
    if(udata.twoglr == 0) {
      let hui = new MessageEmbed()
      .addField('доступ запрещен', 'чтобы открыть доступ, прочитайте вторую главу.')
      .setColor("#767f8b")
      .setThumbnail(client.user.avatarURL({size: 2048}))
      message.reply({embeds: [hui]})
    } else {
    let zalupa = new MessageEmbed()
    .setThumbnail(client.user.avatarURL({size: 2048}))
    .addField("твой инвентарь :arrow_heading_down:", "<:mbslot:984537899590639616>")
    .addField("хранилища", `\`\`\`${udata.hand} рука: 1/1 (мистическая книга)\`\`\``)
      .setColor("#767f8b")
    message.reply({embeds: [zalupa]})
    }
  }
}