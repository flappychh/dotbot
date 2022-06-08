const fs = require("fs")
const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const config = require("./config.json")
client.commands = new Collection();
client.aliases = new Collection();
client.descriptions = new Collection();
client.categories = fs.readdirSync("./cmds/");




const express = require('express');
const server = express();
server.all('/', (req, res) => {res.send(`ок`)})
function keepAlive() {server.listen(3000, () => { console.log("Запущено") });}
module.exports = keepAlive;

require("./handlers/events")(client);
require("./handlers/commands")(client);

client.on("messageCreate", async message => {

  if(message.content == "<@983009232498606194>" || message.content == "<@!983009232498606194>") {
    let embed = {
      author: "даров.",
      description: "я d.js13, ты можешь использовать команды с префиксом \`.\`.",
      color: "#767f8b"
    }
    message.reply({
      embeds:[embed]
    })
  } else return;
  
})

 client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return; //оно не может префикс найти
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
// client.on("debug", ( e ) => console.log(e)); на всякий

client.login(process.env.TOKEN)