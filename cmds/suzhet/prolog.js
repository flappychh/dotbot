const { MessageEmbed, MessageButton, MessageActionRow, MessageComponentInteraction } = require("discord.js")

module.exports = {
  name: "prolog",
  category: "RPG история",
  description: "начало самой неинтересной истории.",
  run: async(client, message, args) => {
  let udata = await User.findOne({userId:message.author, guildId: message.guild.id});
       if(udata.prologr = 1) {
  let lolich = new MessageEmbed()
   .addField("?", "зачем вам читать то, что уже прочитано?")   
    message.reply({embeds: [lolich]})
 }  else {
const lol = new MessageActionRow()
            .addComponents(
             new MessageButton()
                    .setCustomId("prologid")
                    .setLabel('прочитал(а).')
                    .setStyle("PRIMARY")
              );
const embed = new MessageEmbed()
  .addField("пролог.", "```лето. на улице - веселятся и смеются дети, а вы, как обычно сидите дома.\n~скучно. нужно что-то начать делать..~ - подумали вы, и после этого решили пойти в библиотеку и взять какую-нибудь книгу. так и начиналась история о том, что лучше не покупать книги со странными названиями.```")
  .setColor("#767f8b")
   let msg = await message.reply({ embeds: [embed], components: [lol] })
    const filter = i => i.customId === 'prologid' && i.user.id === message.author.id

    const collector = message.channel.createMessageComponentCollector({ filter, time: 20000 });
    collector.on('collect', async i => {
	if (i.customId === 'prologid') {
    const nembed = new MessageEmbed()
  .addField("пролог.", "```вы прочитали пролог, спасибо!```")
  .setColor("#767f8b")
		await msg.edit({ embeds: [nembed], components: []});
    user.prologr = 1
    user.save()
	}
});
collector.on('end', collected => {return;});
  }
}
}