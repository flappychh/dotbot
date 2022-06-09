const { MessageEmbed, MessageButton, MessageActionRow, MessageComponentInteraction } = require("discord.js")

module.exports = {
  name: "2gl",
  category: "RPG история",
  description: "продолжение самой неинтересной истории.",
  run: async(client, message, args) => {
  let udata = await User.findOne({userID:message.author.id, guildID: message.guild.id});
       if(udata.twoglr == 1) {
  let lolich = new MessageEmbed()
   .addField("?", "зачем вам читать то, что уже прочитано?")
   .setColor("#767f8b")
    message.reply({embeds: [lolich]})
 } else {
const lol = new MessageActionRow()
            .addComponents(
             new MessageButton()
                    .setCustomId("2id")
                    .setLabel('прочитал(а).')
                    .setStyle("PRIMARY")
              );
const embed = new MessageEmbed()
  .addField("глава вторая.", "```и вот вы очнулись после приземления. первое что вы осознали - у вас появился инвентарь, прямо как в игре!\n~ЕБААААТЬ ЧЕ~\nсразу же подумали вы. теперь, вам конечно же захотелось его увидеть, но вы пока не знаете как этого сделать. но уже знаете что у вас в первом слоте книга, та самая, которую вы прихватили с собой по пути в лес...\nПРОДОЛЖЕНИЕ СЛЕДУЕТ..```")
  .addField("новое!", "```книга: 1x;\n.inventory\nслоты инвентаря: 1x.```")
  .setColor("#767f8b")
   let msg = await message.reply({ embeds: [embed], components: [lol] })
    const filter = i => i.customId === '2id' && i.user.id === message.author.id

    const collector = message.channel.createMessageComponentCollector({ filter, time: 25000 });
    collector.on('collect', async i => {
	if (i.customId === '2id') {
    const nembed = new MessageEmbed()
  .addField("глава вторая.", "```вы прочитали вторую главу, спасибо!```")
  .setColor("#767f8b")
		await msg.edit({ embeds: [nembed], components: []});
    udata.twoglr = 1
    udata.book = 1
    udata.save()
	}
});
collector.on('end', collected => {return;});
  }
}
}
