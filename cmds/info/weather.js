const weather = require('weather-js');
const discord = require('discord.js')

module.exports = {
  name: "weather",
  aliases: ["weath"],
  description: "получите данные о погоде из любой точки.",
  category: "информация",
  run: (client, message, args) => {


    if(!args.length) {
      return message.reply("укажите локацию.")
    }

 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {

let lolka = new discord.MessageEmbed()
.setTitle(`погода в ${result[0].location.name}.`)
.setColor("#667680")
.setDescription("температура может быть разной в разное время.")
.addField("температура", `${result[0].current.temperature} по цельсию`, true)
.addField("текстура неба", result[0].current.skytext, true)
.addField("влажность воздуха", result[0].current.humidity, true)
.addField("скорость ветра", result[0].current.windspeed, true)//What about image
.addField("время наблюдения за погодой", result[0].current.observationtime, true)
.setThumbnail(result[0].current.imageUrl);
   message.reply({embeds: [lolka]})
} catch(err) {
  return message.reply("невозможно получить прогноз из данной локации.")
}
});   


  }
}