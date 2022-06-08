const { Client } = require("discord.js")
global.mongoose = require("mongoose");
const database  = process.env.GOOSYA

module.exports = {
  name: "ready",
  once: true,
  /**
 * @param {Client} client
  */
  execute(client) {
    console.log("ya rodilsya");
    client.user.setActivity("я ебу сабак", {type: "LISTENING"});

    client.on("messageCreate", async message => {
    if (message.author.bot == true) return;
    global.user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    global.guild = await Guild.findOne({ guildID: message.guild.id });
    if(!user) {
      User.create({ guildID: message.guild.id, userID: message.author.id });
      console.log(`Пользователь ${message.author.username} был добавлен в БД.`)
    }
    if(!guild) { 
      Guild.create({ guildID: message.guild.id }); 
      console.log(`Сервер ${message.guild.name} был добавлен в БД.`)
    } 
  })

  if(!database) return;
  global.Guild = require('../../data/guild.js');
  global.User = require('../../data/user.js');
  mongoose.connect(database, {
   useNewUrlParser: true,
   useUnifiedTopology: true
  }).then(() => {
  console.log("ya konektnulsya")
  }).catch((err) => {
    console.log(err)
  });
 // мэйби будет ошибка
// а не

    
}
}