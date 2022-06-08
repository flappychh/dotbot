const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "показывает список команд бота.",
  category: "информация",
  run: async (client, message, args) => {
        const command = await client.commands.get(args[0]);
      if (args[0]) {

      if (!command) {
       let LlLlL = {
      author: "че.",
      description: "команды не существует, возможно вы перепутали что-то.",
      color: "#767f8b"
    }
    message.reply({
      embeds:[LlLlL]
    })
      } else {

      let embed = new MessageEmbed()
        .addField("описание", `\`\`\`${command.description}\`\`\``)
        .addField("алиасы", `\`\`\`${command.aliases.join(", ")}\`\`\` `, true)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#767f8b");

      return message.reply({embeds: [embed]})
    };
    } else {

      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setColor("767f8b")
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.values()) {
        let category = comm.category || "неизвестно.";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
      
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category} [${value.length}]`, desc);
      }
      return message.reply({embeds: [emx]});
    };
}
}
