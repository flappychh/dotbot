const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os');
let cpuStat = require("cpu-stat");
const ms = require("ms");
const { connection } = require("mongoose");
require("../../events/client/ready");

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
          .setColor("#767f8b")
          .addField("использование озу", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}мб из ${(os.totalmem() / 1024 / 1024).toFixed(2)}мб`, true)
          .addField("время работы", `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, true)
          .addField("всего пользователей", `${client.users.cache.size}`, true)
          .addField("всего серверов", `${client.guilds.cache.size}`, true)
          .addField("всего каналов", `${client.channels.cache.size}`, true)
          .addField("версия discord.js / node.js", `v${version} / ${process.version}`, true)
          .addField("модель процессора", `\n${os.cpus().map(i => `${i.model}`)[0]}`, true)
          .addField("использование процессора", `${percent.toFixed(2)}%`, true)
          .addField("версия arch linux", `${os.arch()}`, true)
          .addField("задержка между сообщениями", `${client.ws.ping}мс`, true)  
    .addField("mongodb", `${switchTo(connection.readyState)}`, true)
      message.reply({ embeds: [stats] })
  });
    function switchTo(val) {
  var status = " ";
  switch(val) {
    case 0 : status = `ОТКЛЮЧЕНО`
    break;
    case 1 : status = `ПОДКЛЮЧЕНО`
    break;
    case 2 : status = `ПОДКЛЮЧЕНИЕ`
    break;
    case 3 : status = `ОТКЛЮЧЕНИЕ`
    break;
  }
  return status;
  }
  }
}