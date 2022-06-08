const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports = {
    name: "stats",
    aliases: ["bot", "botinfo", "bi"],
    category: "информация",
  description: "показывает детализированную информацию о боте.",
  run: async (client, message, args) => {
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [д], H [ч], m [м], s [с]");
      const stats = new MessageEmbed()
          .setTitle("че")
          .setColor("#667680")
          .addField("использование озу", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}мб из ${(os.totalmem() / 1024 / 1024).toFixed(2)}мб`, true)
          .addField("время работы", `${duration}`, true)
          .addField("всего пользователей", `${client.users.cache.size}`, true)
          .addField("всего серверов", `${client.guilds.cache.size}`, true)
          .addField("всего каналов", `${client.channels.cache.size}`, true)
          .addField("версия Discord.js", `v${version}`, true)
          .addField("версия node.js", `${process.version}`, true)
          .addField("модель процессора", `\n${os.cpus().map(i => `${i.model}`)[0]}`, true)
          .addField("использование процессора", `\`\`\`${percent.toFixed(2)}%\`\`\``, true)
          .addField("версия arch linux", `\`\`\`${os.arch()}\`\`\``, true)
          .addField("задержка между сообщениями", `\`\`\`${client.ws.ping}мс\`\`\``, true)  
      message.reply({ embeds: [stats] })
  });
  }
  };