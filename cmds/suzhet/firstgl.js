const { MessageEmbed, MessageButton, MessageActionRow, MessageComponentInteraction } = require("discord.js")

module.exports = {
  name: "firstgl",
  category: "RPG история",
  description: "продолжение самой неинтересной истории.",
  run: async(client, message, args) => {
  let udata = await User.findOne({userId:message.author, guildId: message.guild.id});
       if(udata.firstglr == 1) {
  let lolich = new MessageEmbed()
   .addField("?", "зачем вам читать то, что уже прочитано?")
   .setColor("#767f8b")
    message.reply({embeds: [lolich]})
 }  else {
const lol = new MessageActionRow()
            .addComponents(
             new MessageButton()
                    .setCustomId("firstid")
                    .setLabel('прочитал(а).')
                    .setStyle("PRIMARY")
              );
const embed = new MessageEmbed()
  .addField("глава первая.", "```и вот вы, купили книгу, так и не поняв ее названия. вы решили, что самым лучшим местом для чтения будет ваш домик в лесу, ведь там тихо и уютно. вы отправились в лес, но по пути вы угодили в яму.\n~БЛЯЯЯЯЯЯЯЯТЬ КУДА Я ПОПАЛ!!!??!~\nподумали вы за секунду до приземления и потеряли сознание от удара.```")
  .setColor("#767f8b")
   let msg = await message.reply({ embeds: [embed], components: [lol] })
    const filter = i => i.customId === 'firstid' && i.user.id === message.author.id

    const collector = message.channel.createMessageComponentCollector({ filter, time: 25000 });
    collector.on('collect', async i => {
	if (i.customId === 'firstid') {
    const nembed = new MessageEmbed()
  .addField("глава первая.", "```вы прочитали первую главу, спасибо!```")
  .setColor("#767f8b")
		await msg.edit({ embeds: [nembed], components: []});
    udata.firstglr = 1
    udata.save()
	}
});
collector.on('end', collected => {return;});
  }
}
}