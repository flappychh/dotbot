const schema = mongoose.Schema({
    guildID: String,
  pechatedsoobschenii: {type: String}
})
module.exports = mongoose.model("Guild", schema)