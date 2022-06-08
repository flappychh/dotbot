const { Client, MessageEmbed } = require("discord.js");
const { connection } = require("mongoose");
require("../../events/client/ready");

module.exports = {
 name: "status",
  category: "разработчикам"
  description: "отображает статус бота и подключение к БД.",
  /**
  *
  * @param {Client} client
  */
run: async(client, message, args) => {
  let lol = new MessageEmbed()
  .setColor("#767f8b")
  .setDescription(`dotbot: онлайн - \`${client.ws.ping}мс\` - 
запустился <t:${parseInt(client.readyTimestamp / 1000)}:R>\nмонга: \`${switchTo(connection.readyState)}\` `)

message.channel.send({embeds: [lol]})
}
}

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