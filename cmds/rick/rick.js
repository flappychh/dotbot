const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name : "button",
  description: "тестовая команда.",
  category: "разработчикам",
  run : async(client, message, args) => {
    let user = await User.findOne({
      userID: message.author.id,
      guildID: message.guild.id 
    })
  const lol = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('кнопка.')
                    .setStyle("PRIMARY")
                    .setCustomId("primary")
          );

    let msg = await message.reply({ content: "чел харош?", components: [lol]});
    

 const filter = i => i.customId === 'primary' && i.user.id === message.author.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 9000 });

collector.on('collect', async i => {
	if (i.customId === 'primary') {
		await msg.edit({ content: 'йоубать коупать!', components: [lol]});
    user.prologr = 0
    user.save()
	}
});
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
         
  }
}