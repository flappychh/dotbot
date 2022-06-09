const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "bash",
  aliases: ["bh"],
  description: "выполняет указанную команду.",
    category: "разработчикам",
run: async (client, message, args) => {
       let out = require('child_process').execSync(args.join(' ')).toString('utf8')
    if(message.author.id != "887303819300577291") return;
    try {
  let embedick = new MessageEmbed
  .addField("bash", `${out}`)
  message.reply({embeds: [embedick]})
    } catch {
 let embedicks = new MessageEmbed()
  .addField("произошла обшибка.", "```ъ?```")
  message.reply({embeds: [embedicks]})      
}
}
}