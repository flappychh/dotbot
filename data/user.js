const schema = mongoose.Schema({

    userID: String,
    guildID: String,
    prologr: {type: Number, default: 0},
    firstglr: {type: Number, default: 0},
    twoglr: {type: Number, default: 0},
    coins: {type: Number, default: 0}
    

})
module.exports = mongoose.model("User", schema)