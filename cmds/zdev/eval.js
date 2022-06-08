const config = require("../../config.json");

module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "выполняет указанный код.",
    category: "разработчикам",
  run: async (client, message, args) => {
    if (config.devs.includes(message.author.id) == false) return;
    const { inspect } = require('util');
    const { MessageEmbed } = require('discord.js');

    let code = args.join(" ")
    try {
      let preEval = process.hrtime.bigint();
      let evaled = await eval(code);
      let lastEval = process.hrtime.bigint();
      if (typeof evaled !== "string") evaled = inspect(evaled);
      if (evaled.includes(process.env.TOKEN) == true) {
        let evalerror = {
          author: {
        name: 'ты че..',
        icon_url: ' ',
        url: ' ',
    },
          description: "\`\`\`js\nReferenceError: u are dolbaeb\n\`\`\`",
          color: "#767f8b"
        }
        
        message.reply({ embeds: [evalerror] });
      } else if (evaled.includes(process.env.GOOSYA) == true) {
      let evalerror = {
         author: {
        name: 'ты че..',
        icon_url: ' ',
        url: ' ',
    },
        description: "\`\`\`js\nReferenceError: u are dolbaeb\n\`\`\`",
        color: "#767f8b"
    }
    message.reply({embeds:[evalerror]});
    } else {
        message.reply(`\`\`\`js\n${evaled.slice(0, 1900)}\`\`\``, { code: "js" });
      }
    } catch (e) {
      if (typeof (e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      let evalerror = {
        author: {
        name: 'что-то пошло не так, да?',
        icon_url: ' ',
        url: ' ',
    },
        description: "\`\`\`js\n" + e + "\n\`\`\` ",
        color: "#767f8b"
      }
      message.reply({ embeds: [evalerror] });
    }
  }
}